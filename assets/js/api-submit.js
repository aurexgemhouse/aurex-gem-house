/* =============================================
   AURELIA – API Submission Handler
   Sends leads to Google Sheets via Apps Script
   ============================================= */

(function () {
    'use strict';

    const API_URL = 'https://script.google.com/macros/s/AKfycbwE8s4JvzoRiU42Y5NZsjs8dr9XLlYPke6fsIkY5vLeigCTWKCKZ1XBbFIYGC2CNOsd/exec';

    /**
     * Validate email format
     */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /**
     * Validate required fields
     * Returns an error message string or null if valid
     */
    function validateInquiry(data) {
        if (!data.name || data.name.trim().length < 2) {
            return 'Please enter your full name.';
        }
        if (!data.email || !isValidEmail(data.email)) {
            return 'Please enter a valid email address.';
        }
        // Honeypot check — should be empty
        if (data._hp && data._hp.length > 0) {
            // Silently reject — bot detected
            return '__bot__';
        }
        return null;
    }

    /**
     * Submit inquiry data to Google Sheets
     * @param {Object} data - Form data object
     * @returns {Promise<{success: boolean, message: string}>}
     */
    async function submitInquiry(data) {
        // Validate first
        const validationError = validateInquiry(data);
        if (validationError) {
            if (validationError === '__bot__') {
                // Fake success for bots
                return new Promise(resolve => {
                    setTimeout(() => resolve({ success: true, message: 'Thank you!' }), 1500);
                });
            }
            return { success: false, message: validationError };
        }

        // Clean data — remove honeypot field before sending
        const cleanData = { ...data };
        delete cleanData._hp;

        try {
            // Google Apps Script returns a 302 redirect that lacks CORS headers,
            // so even simple POST requests fail in browser CORS mode.
            // Using mode: 'no-cors' sends the data successfully — we just can't
            // read the response. That's fine since we validate client-side first.
            const formBody = new URLSearchParams();
            for (const [key, val] of Object.entries(cleanData)) {
                formBody.append(key, val || '');
            }

            await fetch(API_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formBody
            });

            // With no-cors we get an opaque response — if fetch didn't throw,
            // the request was sent successfully.
            return { success: true, message: 'Inquiry submitted successfully!' };

        } catch (error) {
            console.error('Aurelia API Error:', error);
            return { success: false, message: 'Network error. Please check your connection and try again.' };
        }
    }

    // Expose globally for aurelia-engine.js
    window.AureliaAPI = {
        submitInquiry: submitInquiry,
        validateInquiry: validateInquiry
    };

})();
