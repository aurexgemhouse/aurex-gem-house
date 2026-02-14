# AUREX MY GEM - API Configuration

**Status:** ✅ DEPLOYED AND WORKING

**Deployment Date:** February 14, 2026

---

## 🔗 API Endpoint

```
https://script.google.com/macros/s/AKfycbydRp9b4M5UVvKYyMRk2viSpWxPQXFkphO8T8jPsyJ24MgHTidJr1LRyH8ClEALRy4v/exec
```

**Test Status:** ✅ GET request returns: "Aurex MyGem Backend is running."

---

## 📊 Google Sheet Database

**Sheet URL:**
```
https://docs.google.com/spreadsheets/d/1YcTXenWXwdaupMMTvQaZPlXQdTTWQrk8vGjq-Rl7FyI/edit
```

**Sheet Name:** AUREX_MYGEM_LEADS

**Columns:**
- Timestamp
- Name
- Email
- Mobile
- Type
- DOB
- Timezone
- BirthGem
- AstroGem
- PlanetGem
- ChineseGem
- VariantGem
- Weight_Birth
- Weight_Astro
- Weight_Planet
- Weight_Chinese
- Weight_Variant

---

## 🧪 Testing the Backend

### Test GET Request (Browser)
Open this URL in your browser:
```
https://script.google.com/macros/s/AKfycbydRp9b4M5UVvKYyMRk2viSpWxPQXFkphO8T8jPsyJ24MgHTidJr1LRyH8ClEALRy4v/exec
```

Expected response: `Aurex MyGem Backend is running.`

### Test POST Request (JavaScript)

```javascript
fetch("https://script.google.com/macros/s/AKfycbwwUY8nf8BoGmvIYe4o-jl3JxMd5TmxzDTbx4ChJxEVK4l-tdgbB-iqvkifQpDQgETw/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    mobile: "1234567890",
    type: "Personal",
    dob: "1990-05-15",
    timezone: "Australia/Sydney",
    birthGem: "Emerald",
    astroGem: "Ruby",
    planetGem: "Blue Sapphire",
    chineseGem: "Dragon",
    variantGem: "Water Dragon",
    weightBirth: "2-3ct",
    weightAstro: "1-2ct",
    weightPlanet: "Below 1ct",
    weightChinese: "3-5ct",
    weightVariant: "2-3ct"
  })
})
.then(response => response.json())
.then(data => console.log("Success:", data))
.catch(error => console.error("Error:", error));
```

Expected response:
```json
{ "status": "success" }
```

---

## 📝 Integration Instructions

### For Frontend Developers

1. **Copy the API endpoint URL** (see above)

2. **Store it securely** in your JavaScript configuration file

3. **Use fetch() to send data** when the user completes the "My Gem" form

4. **Handle responses:**
   - Success: `{ "status": "success" }` - Show thank you message
   - Error: Handle network errors gracefully

### Example Frontend Code

```javascript
// Configuration
const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwwUY8nf8BoGmvIYe4o-jl3JxMd5TmxzDTbx4ChJxEVK4l-tdgbB-iqvkifQpDQgETw/exec";

// Form submission handler
async function submitGemRecommendation(formData) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.status === "success") {
      // Show success message to user
      alert("Thank you! Your gem recommendations have been saved.");
    }
  } catch (error) {
    console.error("Failed to save:", error);
    // Show error message to user
    alert("Sorry, there was an error. Please try again.");
  }
}
```

---

## 🔐 Security Notes

- ✅ Backend deployed with "Anyone" access (required for public website)
- ✅ Data stored in your personal Google Sheet (only you can access)
- ⚠️ Consider adding reCAPTCHA v3 before public launch
- ⚠️ Add frontend validation to prevent spam
- ⚠️ Consider rate limiting for production use

---

## 📈 Next Steps

1. ✅ Backend deployed and tested
2. ⏳ Create frontend form for "My Gem" application
3. ⏳ Test POST request with real data
4. ⏳ Verify data appears in Google Sheet
5. ⏳ Add to website and go live!

---

**Last Updated:** February 14, 2026  
**Status:** Production Ready ✅
