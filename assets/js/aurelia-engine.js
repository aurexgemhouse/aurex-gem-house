/* =============================================
   AURELIA – Gem Intelligence Engine
   Main bot controller + all gemstone logic
   ============================================= */

(function () {
    'use strict';

    // ===================================================================
    //  GEMSTONE DATA TABLES
    // ===================================================================

    const BIRTHSTONES = {
        1: 'Garnet', 2: 'Amethyst', 3: 'Aquamarine', 4: 'Diamond',
        5: 'Emerald', 6: 'Pearl', 7: 'Ruby', 8: 'Peridot',
        9: 'Blue Sapphire', 10: 'Opal', 11: 'Topaz', 12: 'Tanzanite'
    };

    const ZODIAC_DATES = [
        { sign: 'Capricorn', start: [1, 1], end: [1, 19] },
        { sign: 'Aquarius', start: [1, 20], end: [2, 18] },
        { sign: 'Pisces', start: [2, 19], end: [3, 20] },
        { sign: 'Aries', start: [3, 21], end: [4, 19] },
        { sign: 'Taurus', start: [4, 20], end: [5, 20] },
        { sign: 'Gemini', start: [5, 21], end: [6, 20] },
        { sign: 'Cancer', start: [6, 21], end: [7, 22] },
        { sign: 'Leo', start: [7, 23], end: [8, 22] },
        { sign: 'Virgo', start: [8, 23], end: [9, 22] },
        { sign: 'Libra', start: [9, 23], end: [10, 22] },
        { sign: 'Scorpio', start: [10, 23], end: [11, 21] },
        { sign: 'Sagittarius', start: [11, 22], end: [12, 21] },
        { sign: 'Capricorn', start: [12, 22], end: [12, 31] }
    ];

    const ZODIAC_GEMS = {
        'Aries': 'Diamond', 'Taurus': 'Emerald', 'Gemini': 'Pearl',
        'Cancer': 'Ruby', 'Leo': 'Peridot', 'Virgo': 'Sapphire',
        'Libra': 'Opal', 'Scorpio': 'Topaz', 'Sagittarius': 'Turquoise',
        'Capricorn': 'Garnet', 'Aquarius': 'Amethyst', 'Pisces': 'Aquamarine'
    };

    const ZODIAC_TO_PLANET = {
        'Aries': 'Mars', 'Taurus': 'Venus', 'Gemini': 'Mercury',
        'Cancer': 'Moon', 'Leo': 'Sun', 'Virgo': 'Mercury',
        'Libra': 'Venus', 'Scorpio': 'Mars', 'Sagittarius': 'Jupiter',
        'Capricorn': 'Saturn', 'Aquarius': 'Saturn', 'Pisces': 'Jupiter'
    };

    const PLANETARY_GEMS = {
        'Sun': 'Ruby', 'Moon': 'Pearl', 'Mars': 'Red Coral',
        'Mercury': 'Emerald', 'Jupiter': 'Yellow Sapphire',
        'Venus': 'Diamond', 'Saturn': 'Blue Sapphire',
        'Rahu': 'Hessonite', 'Ketu': "Cat's Eye"
    };

    const CHINESE_ANIMALS = [
        'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
        'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
    ];

    const CHINESE_ELEMENTS_CYCLE = ['Metal', 'Metal', 'Water', 'Water', 'Wood', 'Wood', 'Fire', 'Fire', 'Earth', 'Earth'];

    const CHINESE_GEMS = {
        'Rat': 'Garnet', 'Ox': 'Aquamarine', 'Tiger': 'Sapphire',
        'Rabbit': 'Pearl', 'Dragon': 'Amethyst', 'Snake': 'Opal',
        'Horse': 'Topaz', 'Goat': 'Emerald', 'Monkey': 'Peridot',
        'Rooster': 'Citrine', 'Dog': 'Diamond', 'Pig': 'Moonstone'
    };

    const VARIANT_GEMS = {
        'Wood': 'Emerald', 'Fire': 'Ruby', 'Earth': 'Topaz',
        'Metal': 'White Sapphire', 'Water': 'Aquamarine'
    };

    // ===================================================================
    //  GEMSTONE IMAGE PATHS (relative from /guide/)
    // ===================================================================

    const GEM_IMAGES = {
        // Birthstones
        'Garnet': 'assets/images/gemstones/birthstones/january-garnet.png',
        'Amethyst': 'assets/images/gemstones/birthstones/february-amethyst.png',
        'Aquamarine': 'assets/images/gemstones/birthstones/march-aquamarine.png',
        'Diamond': 'assets/images/gemstones/birthstones/april-diamond.png',
        'Emerald': 'assets/images/gemstones/birthstones/may-emerald.png',
        'Pearl': 'assets/images/gemstones/birthstones/june-pearl.png',
        'Ruby': 'assets/images/gemstones/birthstones/july-ruby.png',
        'Peridot': 'assets/images/gemstones/birthstones/august-peridot.png',
        'Blue Sapphire': 'assets/images/gemstones/birthstones/september-blue-sapphire.png',
        'Opal': 'assets/images/gemstones/birthstones/october-opal.png',
        'Topaz': 'assets/images/gemstones/birthstones/november-imperial-topaz.png',
        'Tanzanite': 'assets/images/gemstones/birthstones/december-tanzanite.png',
        'Turquoise': 'assets/images/gemstones/birthstones/december-turquoise.png',
        // Planetary
        'Red Coral': 'assets/images/gemstones/planets/mars-red-coral.png',
        'Yellow Sapphire': 'assets/images/gemstones/planets/jupiter-yellow-sapphire.png',
        'Hessonite': 'assets/images/gemstones/planets/rahu-hessonite-garnet.png',
        "Cat's Eye": 'assets/images/gemstones/planets/ketu-cats-eye-chrysoberyl.png',
        'Sapphire': 'assets/images/gemstones/birthstones/september-blue-sapphire.png',
        // Chinese zodiac
        'Citrine': 'assets/images/gemstones/birthstones/november-citrine.png',
        'Moonstone': 'assets/images/gemstones/birthstones/june-moonstone.png',
        // Variant
        'White Sapphire': 'assets/images/gemstones/white-sapphire.svg'
    };

    const ZODIAC_SYMBOLS = {
        'Aries': '♈', 'Taurus': '♉', 'Gemini': '♊', 'Cancer': '♋',
        'Leo': '♌', 'Virgo': '♍', 'Libra': '♎', 'Scorpio': '♏',
        'Sagittarius': '♐', 'Capricorn': '♑', 'Aquarius': '♒', 'Pisces': '♓'
    };

    const CHINESE_EMOJIS = {
        'Rat': '🐀', 'Ox': '🐂', 'Tiger': '🐅', 'Rabbit': '🐇',
        'Dragon': '🐉', 'Snake': '🐍', 'Horse': '🐎', 'Goat': '🐐',
        'Monkey': '🐒', 'Rooster': '🐓', 'Dog': '🐕', 'Pig': '🐖'
    };

    const MONTH_NAMES = [
        '', 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // ===================================================================
    //  TIMEZONE DATA
    // ===================================================================

    const TIMEZONES = [
        { value: 'Pacific/Auckland', label: 'New Zealand (Auckland) UTC+12/+13' },
        { value: 'Australia/Sydney', label: 'Australia (Sydney) UTC+10/+11' },
        { value: 'Australia/Melbourne', label: 'Australia (Melbourne) UTC+10/+11' },
        { value: 'Australia/Brisbane', label: 'Australia (Brisbane) UTC+10' },
        { value: 'Australia/Adelaide', label: 'Australia (Adelaide) UTC+9:30/+10:30' },
        { value: 'Australia/Perth', label: 'Australia (Perth) UTC+8' },
        { value: 'Asia/Tokyo', label: 'Japan (Tokyo) UTC+9' },
        { value: 'Asia/Seoul', label: 'South Korea (Seoul) UTC+9' },
        { value: 'Asia/Shanghai', label: 'China (Shanghai) UTC+8' },
        { value: 'Asia/Hong_Kong', label: 'Hong Kong UTC+8' },
        { value: 'Asia/Taipei', label: 'Taiwan (Taipei) UTC+8' },
        { value: 'Asia/Singapore', label: 'Singapore UTC+8' },
        { value: 'Asia/Kuala_Lumpur', label: 'Malaysia (KL) UTC+8' },
        { value: 'Asia/Bangkok', label: 'Thailand (Bangkok) UTC+7' },
        { value: 'Asia/Jakarta', label: 'Indonesia (Jakarta) UTC+7' },
        { value: 'Asia/Colombo', label: 'Sri Lanka (Colombo) UTC+5:30' },
        { value: 'Asia/Kolkata', label: 'India (Kolkata) UTC+5:30' },
        { value: 'Asia/Dubai', label: 'UAE (Dubai) UTC+4' },
        { value: 'Europe/London', label: 'United Kingdom (London) UTC+0/+1' },
        { value: 'Europe/Paris', label: 'France (Paris) UTC+1/+2' },
        { value: 'America/New_York', label: 'USA East (New York) UTC-5/-4' },
        { value: 'America/Chicago', label: 'USA Central (Chicago) UTC-6/-5' },
        { value: 'America/Denver', label: 'USA Mountain (Denver) UTC-7/-6' },
        { value: 'America/Los_Angeles', label: 'USA West (Los Angeles) UTC-8/-7' }
    ];

    // ===================================================================
    //  STATE
    // ===================================================================

    let state = {
        step: 'welcome',
        gender: null,
        dob: null,        // { day, month, year }
        birthTime: null,   // "HH:MM"
        timezone: null,
        results: null      // computed gems
    };

    // ===================================================================
    //  DOM REFERENCES
    // ===================================================================

    const chatEl = document.getElementById('aurelia-messages');
    const inputEl = document.getElementById('aurelia-input');

    // ===================================================================
    //  GEMSTONE CALCULATION FUNCTIONS
    // ===================================================================

    function getBirthstone(month) {
        return BIRTHSTONES[month] || 'Garnet';
    }

    function getZodiacSign(day, month) {
        for (const z of ZODIAC_DATES) {
            const [sm, sd] = z.start;
            const [em, ed] = z.end;
            if (month === sm && day >= sd && (month !== em || day <= ed)) return z.sign;
            if (month === em && day <= ed && month !== sm) return z.sign;
        }
        return 'Capricorn'; // fallback
    }

    function getZodiacGemstone(sign) {
        return ZODIAC_GEMS[sign] || 'Garnet';
    }

    function getVedicPlanet(sign) {
        return ZODIAC_TO_PLANET[sign] || 'Sun';
    }

    function getPlanetaryGemstone(planet) {
        return PLANETARY_GEMS[planet] || 'Ruby';
    }

    function getChineseAnimal(year) {
        // 1900 was a Rat year
        const idx = ((year - 1900) % 12 + 12) % 12;
        return CHINESE_ANIMALS[idx];
    }

    function getChineseElement(year) {
        const idx = ((year - 1900) % 10 + 10) % 10;
        return CHINESE_ELEMENTS_CYCLE[idx];
    }

    function getChineseGemstone(animal) {
        return CHINESE_GEMS[animal] || 'Garnet';
    }

    function getVariantGemstone(element) {
        return VARIANT_GEMS[element] || 'Topaz';
    }

    function getGemImage(gemName) {
        return GEM_IMAGES[gemName] || 'assets/images/gemstones/birthstones/january-garnet.png';
    }

    // ===================================================================
    //  COMPUTE ALL RESULTS
    // ===================================================================

    function computeResults() {
        const { day, month, year } = state.dob;
        const zodiac = getZodiacSign(day, month);
        const planet = getVedicPlanet(zodiac);
        const animal = getChineseAnimal(year);
        const element = getChineseElement(year);

        state.results = {
            birthstone: {
                gem: getBirthstone(month),
                detail: MONTH_NAMES[month] + ' Birthstone',
                category: 'Birthstone'
            },
            zodiac: {
                gem: getZodiacGemstone(zodiac),
                detail: zodiac + ' ' + (ZODIAC_SYMBOLS[zodiac] || ''),
                category: 'Astrological',
                sign: zodiac
            },
            planetary: {
                gem: getPlanetaryGemstone(planet),
                detail: planet + ' · Vedic',
                category: 'Planetary',
                planet: planet
            },
            chinese: {
                gem: getChineseGemstone(animal),
                detail: (CHINESE_EMOJIS[animal] || '') + ' ' + animal,
                category: 'Chinese Zodiac',
                animal: animal
            },
            variant: {
                gem: getVariantGemstone(element),
                detail: element + ' ' + animal,
                category: 'Element Combination',
                element: element,
                animal: animal
            }
        };
    }

    // ===================================================================
    //  UI HELPER FUNCTIONS
    // ===================================================================

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function scrollToBottom() {
        requestAnimationFrame(() => {
            chatEl.scrollTop = chatEl.scrollHeight;
        });
    }

    function showTyping() {
        const typEl = document.createElement('div');
        typEl.className = 'typing-indicator';
        typEl.id = 'typing';
        typEl.innerHTML = `
            <div class="avatar-small">💎</div>
            <div class="bubble">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>`;
        chatEl.appendChild(typEl);
        scrollToBottom();
    }

    function hideTyping() {
        const el = document.getElementById('typing');
        if (el) el.remove();
    }

    async function addBotMessage(html, typingDelay) {
        if (typingDelay === undefined) typingDelay = 600 + Math.random() * 400;
        showTyping();
        await delay(typingDelay);
        hideTyping();

        const msgEl = document.createElement('div');
        msgEl.className = 'message bot';
        msgEl.innerHTML = `
            <div class="avatar-small">💎</div>
            <div class="bubble">${html}</div>`;
        chatEl.appendChild(msgEl);
        scrollToBottom();
    }

    function addUserMessage(text) {
        const msgEl = document.createElement('div');
        msgEl.className = 'message user';
        msgEl.innerHTML = `<div class="bubble">${escapeHtml(text)}</div>`;
        chatEl.appendChild(msgEl);
        scrollToBottom();
    }

    function setInput(html) {
        inputEl.innerHTML = html;
    }

    function clearInput() {
        inputEl.innerHTML = '';
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ===================================================================
    //  CONVERSATION FLOW
    // ===================================================================

    // ----- STEP 1: Welcome -----
    async function showWelcome() {
        state.step = 'welcome';
        await delay(500);
        await addBotMessage(
            'Hello! I\'m <strong>Aurelia</strong>, your personal gemstone advisor at Aurex Gem House. ✨'
        );
        await addBotMessage(
            'I can help you discover the perfect gemstones aligned with your birth chart — from Vedic astrology to Chinese zodiac.',
            800
        );
        await addBotMessage(
            'Shall we begin your personalised gemstone journey?',
            700
        );

        setInput(`
            <div class="action-buttons">
                <button class="action-btn primary" onclick="Aurelia.startJourney()">
                    ✨ Begin My Journey
                </button>
            </div>
        `);
    }

    // ----- STEP 2: Gender -----
    async function showGenderSelect() {
        state.step = 'gender';
        addUserMessage('Begin My Journey ✨');
        await addBotMessage(
            'Wonderful! First, please tell me — are you exploring gemstones for…'
        );

        setInput(`
            <div class="gender-cards">
                <button class="gender-card" onclick="Aurelia.selectGender('Male')">
                    <span class="gender-icon">👨</span>
                    <span class="gender-label">A Gentleman</span>
                </button>
                <button class="gender-card" onclick="Aurelia.selectGender('Female')">
                    <span class="gender-icon">👩</span>
                    <span class="gender-label">A Lady</span>
                </button>
            </div>
        `);
    }

    // ----- STEP 3: Birth Data -----
    async function showBirthInput(gender) {
        state.step = 'birth';
        state.gender = gender;
        addUserMessage(gender === 'Male' ? 'A Gentleman 👨' : 'A Lady 👩');

        await addBotMessage(
            `Lovely! Now, let me look into the celestial charts for ${gender === 'Male' ? 'him' : 'her'}. Please share the birth details below.`
        );

        // Build timezone options
        let tzOptions = '';
        for (const tz of TIMEZONES) {
            const selected = tz.value === 'Australia/Sydney' ? ' selected' : '';
            tzOptions += `<option value="${tz.value}"${selected}>${tz.label}</option>`;
        }

        setInput(`
            <div class="birth-form">
                <div class="form-row-2col">
                    <div class="form-group">
                        <label for="aur-dob">Date of Birth</label>
                        <input type="date" id="aur-dob" required>
                    </div>
                    <div class="form-group">
                        <label for="aur-time">Time of Birth</label>
                        <input type="time" id="aur-time" value="12:00">
                    </div>
                </div>
                <div class="form-group">
                    <label for="aur-tz">Birth Time Zone</label>
                    <select id="aur-tz">${tzOptions}</select>
                </div>
                <div class="submit-row">
                    <button class="action-btn primary" style="width:100%" onclick="Aurelia.submitBirthData()">
                        🔮 Reveal My Gemstones
                    </button>
                </div>
            </div>
        `);
    }

    // ----- STEP 4: Processing -----
    async function showProcessing() {
        state.step = 'processing';

        const dobInput = document.getElementById('aur-dob');
        const timeInput = document.getElementById('aur-time');
        const tzInput = document.getElementById('aur-tz');

        if (!dobInput || !dobInput.value) {
            // Show inline error
            const errEl = dobInput || inputEl;
            let existing = inputEl.querySelector('.form-error');
            if (!existing) {
                const fe = document.createElement('div');
                fe.className = 'form-error';
                fe.textContent = 'Please enter a date of birth.';
                inputEl.querySelector('.birth-form').prepend(fe);
            }
            return;
        }

        const parts = dobInput.value.split('-'); // YYYY-MM-DD
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

        state.dob = { day, month, year };
        state.birthTime = timeInput ? timeInput.value : '12:00';
        state.timezone = tzInput ? tzInput.value : 'Australia/Sydney';

        // Build display date
        const displayDate = `${day} ${MONTH_NAMES[month]} ${year}`;
        addUserMessage(`${displayDate} · ${state.birthTime} · ${state.timezone}`);
        clearInput();

        await addBotMessage('✨ Consulting the celestial charts…', 500);

        // Show crystal loading animation
        const procEl = document.createElement('div');
        procEl.className = 'message bot';
        procEl.id = 'processing-msg';
        procEl.innerHTML = `
            <div class="avatar-small">💎</div>
            <div class="bubble">
                <div class="processing-container">
                    <div class="crystal-loader">
                        <div class="facet"></div>
                        <div class="facet"></div>
                        <div class="facet"></div>
                        <div class="facet"></div>
                        <div class="facet"></div>
                    </div>
                    <span class="processing-text">Aligning your birth chart…</span>
                </div>
            </div>`;
        chatEl.appendChild(procEl);
        scrollToBottom();

        // Compute results during animation
        computeResults();

        await delay(2500);

        // Remove processing animation
        const procMsg = document.getElementById('processing-msg');
        if (procMsg) procMsg.remove();

        // Show results
        showResults();
    }

    // ----- STEP 5: Results -----
    async function showResults() {
        state.step = 'results';
        const r = state.results;

        await addBotMessage(
            '🌟 Your gemstones have been revealed! Each one is uniquely aligned to your birth chart.',
            600
        );

        // Build results grid
        const cards = [
            { ...r.birthstone },
            { ...r.zodiac },
            { ...r.planetary },
            { ...r.chinese },
            { ...r.variant }
        ];

        let gridHtml = '<div class="results-grid">';
        for (const c of cards) {
            const img = getGemImage(c.gem);
            gridHtml += `
                <div class="result-card">
                    <div class="result-category">${escapeHtml(c.category)}</div>
                    <div class="result-image">
                        <img src="${img}" alt="${escapeHtml(c.gem)}" onerror="this.style.display='none'">
                    </div>
                    <h4 class="result-gem-name">${escapeHtml(c.gem)}</h4>
                    <div class="result-detail">${escapeHtml(c.detail)}</div>
                </div>`;
        }
        gridHtml += '</div>';

        const resultMsg = document.createElement('div');
        resultMsg.className = 'message bot';
        resultMsg.innerHTML = `
            <div class="avatar-small">💎</div>
            <div class="bubble" style="max-width:95%">${gridHtml}</div>`;
        chatEl.appendChild(resultMsg);
        scrollToBottom();

        await delay(1200);

        await addBotMessage(
            'Would you like us to find the perfect stone for you? Our expert gemmologist will personally select and recommend stones based on your requirements.',
            800
        );

        setInput(`
            <div class="action-buttons">
                <button class="action-btn primary" onclick="Aurelia.showInquiry()">
                    💎 Proceed to Order Your Gems
                </button>
                <button class="action-btn" onclick="Aurelia.restart()">
                    ↩ Start Over
                </button>
            </div>
        `);
    }

    // ----- STEP 6: Inquiry Form -----
    async function showInquiryForm() {
        state.step = 'inquiry';
        addUserMessage('Proceed to Order My Gems 💎');

        await addBotMessage(
            'Excellent choice! Please share your details below so our gemmologist can prepare personalised recommendations for you.'
        );

        const r = state.results;

        // Build weight selects for each gem
        function weightSelect(name) {
            return `
                <select name="${name}" style="width:100%">
                    <option value="">Select weight…</option>
                    <option value="None">None</option>
                    <option value="Below 1ct">Below 1 carat</option>
                    <option value="1-2ct">1–2 carats</option>
                    <option value="2-3ct">2–3 carats</option>
                    <option value="3-4ct">3–4 carats</option>
                    <option value="4-5ct">4–5 carats</option>
                    <option value="Above 5ct">Above 5 carats</option>
                </select>`;
        }

        function gemRow(label, gemName, selectName) {
            return `
                <div class="gem-weight-row">
                    <div>
                        <span class="gem-name-fixed">${escapeHtml(gemName)}</span>
                        <span class="gem-category-hint">${escapeHtml(label)}</span>
                    </div>
                    <div>${weightSelect(selectName)}</div>
                </div>`;
        }

        setInput(`
            <form class="inquiry-form" id="aurelia-inquiry-form" onsubmit="return Aurelia.submitInquiry(event)">
                <!-- Honeypot -->
                <div class="honey-field">
                    <label>Leave blank</label>
                    <input type="text" name="_hp" tabindex="-1" autocomplete="off">
                </div>

                <div class="form-group">
                    <label for="aur-name">Full Name *</label>
                    <input type="text" id="aur-name" name="name" required placeholder="Your full name">
                </div>
                <div class="form-group">
                    <label for="aur-email">Email Address *</label>
                    <input type="email" id="aur-email" name="email" required placeholder="you@example.com">
                </div>
                <div class="form-group">
                    <label for="aur-mobile">Mobile Number</label>
                    <input type="tel" id="aur-mobile" name="mobile" placeholder="+61 412 345 678">
                </div>
                <div class="form-group">
                    <label for="aur-type">Purpose</label>
                    <select id="aur-type" name="type">
                        <option value="Personal">Personal</option>
                        <option value="Business">Business</option>
                        <option value="Gift">Gift</option>
                        <option value="Investment">Investment</option>
                    </select>
                </div>

                <div class="form-section-title">💎 Select Preferred Weight for Each Gemstone</div>

                ${gemRow('Birthstone', r.birthstone.gem, 'weightBirth')}
                ${gemRow('Astrological', r.zodiac.gem, 'weightAstro')}
                ${gemRow('Planetary · Vedic', r.planetary.gem, 'weightPlanet')}
                ${gemRow('Chinese Zodiac', r.chinese.gem, 'weightChinese')}
                ${gemRow('Element Combination', r.variant.gem, 'weightVariant')}

                <div class="form-group" style="margin-top:0.75rem">
                    <label for="aur-comments">Additional Requirements <span style="color:var(--muted);font-weight:400">(optional)</span></label>
                    <textarea id="aur-comments" name="comments" rows="3" placeholder="Any specific requirements — colour preference, budget range, certificate needs, etc." style="width:100%;resize:vertical"></textarea>
                </div>

                <div class="submit-row" style="margin-top:0.75rem">
                    <button type="submit" class="action-btn primary" id="aur-submit-btn" style="width:100%">
                        ✨ Submit My Inquiry
                    </button>
                </div>
            </form>
        `);

        scrollToBottom();
    }

    // ----- Submit Inquiry -----
    async function handleSubmitInquiry(e) {
        e.preventDefault();

        const form = document.getElementById('aurelia-inquiry-form');
        const submitBtn = document.getElementById('aur-submit-btn');

        // Gather form data
        const formData = {
            name: form.querySelector('[name="name"]').value.trim(),
            email: form.querySelector('[name="email"]').value.trim(),
            mobile: form.querySelector('[name="mobile"]').value.trim(),
            type: form.querySelector('[name="type"]').value,
            _hp: form.querySelector('[name="_hp"]').value,
            gender: state.gender,
            dob: state.dob ? `${state.dob.year}-${String(state.dob.month).padStart(2, '0')}-${String(state.dob.day).padStart(2, '0')}` : '',
            birthTime: state.birthTime || '',
            timezone: state.timezone || '',
            birthGem: state.results.birthstone.gem,
            astroGem: state.results.zodiac.gem,
            planetGem: state.results.planetary.gem,
            chineseGem: state.results.chinese.gem,
            variantGem: state.results.variant.gem,
            weightBirth: form.querySelector('[name="weightBirth"]').value,
            weightAstro: form.querySelector('[name="weightAstro"]').value,
            weightPlanet: form.querySelector('[name="weightPlanet"]').value,
            weightChinese: form.querySelector('[name="weightChinese"]').value,
            weightVariant: form.querySelector('[name="weightVariant"]').value,
            comments: form.querySelector('[name="comments"]').value.trim()
        };

        // Remove existing errors
        const existingErr = form.querySelector('.form-error');
        if (existingErr) existingErr.remove();

        // Show loading
        submitBtn.classList.add('loading');
        submitBtn.textContent = '';

        // Check if AureliaAPI is available
        if (window.AureliaAPI) {
            const result = await window.AureliaAPI.submitInquiry(formData);
            submitBtn.classList.remove('loading');

            if (result.success) {
                showThankYou();
            } else {
                submitBtn.textContent = '✨ Submit My Inquiry';
                const fe = document.createElement('div');
                fe.className = 'form-error';
                fe.textContent = result.message;
                form.prepend(fe);
            }
        } else {
            // Fallback — direct submit using no-cors mode (avoids CORS issues with Apps Script redirects)
            try {
                const cleanData = { ...formData };
                delete cleanData._hp;
                const formBody = new URLSearchParams();
                for (const [key, val] of Object.entries(cleanData)) {
                    formBody.append(key, val || '');
                }
                await fetch('https://script.google.com/macros/s/AKfycbwE8s4JvzoRiU42Y5NZsjs8dr9XLlYPke6fsIkY5vLeigCTWKCKZ1XBbFIYGC2CNOsd/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formBody
                });
                submitBtn.classList.remove('loading');
                showThankYou();
            } catch (err) {
                submitBtn.classList.remove('loading');
                submitBtn.textContent = '✨ Submit My Inquiry';
                const fe = document.createElement('div');
                fe.className = 'form-error';
                fe.textContent = 'Network error. Please try again.';
                form.prepend(fe);
            }
        }

        return false;
    }

    // ----- STEP 7: Thank You -----
    async function showThankYou() {
        state.step = 'thankyou';
        addUserMessage('Inquiry Submitted ✨');
        clearInput();

        await addBotMessage(
            `<div class="thankyou-container">
                <div class="thankyou-icon">💎</div>
                <h3>Thank You!</h3>
                <p>Thank you for submitting your inquiry to find your perfect gemstone. Our gemmologist will carefully review your selections and get back to you with personalised price recommendations.</p>
            </div>`,
            800
        );

        await addBotMessage(
            'It was a pleasure guiding you through your gemstone journey. We look forward to helping you find the perfect stone! ✨',
            900
        );

        setInput(`
            <div class="action-buttons">
                <button class="action-btn" onclick="Aurelia.restart()">
                    ↩ Start a New Journey
                </button>
                <a href="index.html" class="action-btn">
                    🏠 Return Home
                </a>
            </div>
        `);
    }

    // ----- Restart -----
    async function restart() {
        state = {
            step: 'welcome',
            gender: null,
            dob: null,
            birthTime: null,
            timezone: null,
            results: null
        };
        chatEl.innerHTML = '';
        clearInput();
        showWelcome();
    }

    // ===================================================================
    //  PUBLIC API
    // ===================================================================

    window.Aurelia = {
        startJourney: showGenderSelect,
        selectGender: showBirthInput,
        submitBirthData: showProcessing,
        showInquiry: showInquiryForm,
        submitInquiry: handleSubmitInquiry,
        restart: restart
    };

    // ===================================================================
    //  BOOT
    // ===================================================================

    showWelcome();

})();
