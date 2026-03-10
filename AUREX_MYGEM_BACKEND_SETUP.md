AUREX MY GEM – Backend Setup Guide
Google Sheets + Apps Script (100% Free Infrastructure)
🎯 Project Objective

Build a free, serverless lead capture backend for the AUREX “My Gem” application.

The backend must:

Receive POST requests from website

Store customer profile data

Save gemstone recommendations

Work with GitHub static hosting

Require zero monthly cost

Be secure and scalable

🏗 Architecture Overview

Frontend:

Static HTML / CSS / JS

Hosted on GitHub

Protected by Cloudflare

Backend:

Google Sheets (Database)

Google Apps Script (API endpoint)

Flow:

User → Website Form → fetch() POST → Apps Script → Google Sheet

📋 STEP 1 — Create Lead Storage Sheet

Open Google Sheets

Create new sheet

Name it:

AUREX_MYGEM_LEADS


In Row 1, create the following columns exactly:

Timestamp
Name
Email
Mobile
Type
DOB
Timezone
BirthGem
AstroGem
PlanetGem
ChineseGem
VariantGem
Weight_Birth
Weight_Astro
Weight_Planet
Weight_Chinese
Weight_Variant


Save the sheet.

🧠 STEP 2 — Create Google Apps Script Backend

Inside the same Google Sheet:

Click:

Extensions → Apps Script


Delete all existing code

Paste the following:

function doGet() {
  return ContentService
    .createTextOutput("Aurex MyGem Backend is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.mobile,
    data.type,
    data.dob,
    data.timezone,
    data.birthGem,
    data.astroGem,
    data.planetGem,
    data.chineseGem,
    data.variantGem,
    data.weightBirth,
    data.weightAstro,
    data.weightPlanet,
    data.weightChinese,
    data.weightVariant
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}


Important:

If your sheet tab name is NOT "Sheet1", update this line:

.getSheetByName("Sheet1");


to match your actual sheet tab name.

💾 STEP 3 — Save & Name Project

Click Save

Name project:

AurexMyGemBackend

🚀 STEP 4 — Deploy as Web App

Click:

Deploy → New Deployment


Choose:

Type: Web App


Settings:

Execute as:

Me


Who has access:

Anyone


Click Deploy

Authorize permissions

Copy the Web App URL

This URL is your API endpoint.

Store it securely.

🧪 STEP 5 — Test Backend

Open the Web App URL in browser.

If working correctly, it should display:

Aurex MyGem Backend is running.


If you see:

Bad Request (400)


You likely:

Did not add doGet()

Did not redeploy new version

Did not set access to "Anyone"

📡 STEP 6 — Example Frontend POST Request

The frontend must send JSON via fetch():

fetch("YOUR_WEB_APP_URL", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@email.com",
    mobile: "123456789",
    type: "Personal",
    dob: "1990-05-12",
    timezone: "Australia/Sydney",
    birthGem: "Blue Sapphire",
    astroGem: "Emerald",
    planetGem: "Ruby",
    chineseGem: "Horse",
    variantGem: "Fire Horse",
    weightBirth: "2-3ct",
    weightAstro: "1-2ct",
    weightPlanet: "Below 1ct",
    weightChinese: "3-5ct",
    weightVariant: "2-3ct"
  })
});


Expected response:

{ "status": "success" }


If successful, a new row will appear in Google Sheet.

🔐 Security Recommendations (Optional Enhancement)

For production readiness:

Add Google reCAPTCHA v3

Add frontend validation

Add basic secret token validation

Add rate limiting in Apps Script (optional)

📈 Phase Expansion Plan

Phase 1:

Store leads in Google Sheets

Manual follow-up

Phase 2:

Connect to Mailchimp (free tier)

Automate welcome email

Phase 3:

Migrate to Supabase or Firebase if traffic grows

✅ Expected Outcome

After completion:

Backend API endpoint live

Leads automatically stored

No paid server required

Fully scalable architecture

Secure data ownership

📌 Deliverables for Antigravity

Antigravity must:

Confirm sheet creation

Confirm Apps Script deployment

Provide API endpoint URL

Confirm test submission works

Verify row insertion

🏁 Completion Criteria

Backend is considered complete when:

Web App URL loads successfully

POST request returns status: success

Google Sheet records new row correctly

No 400 errors

End of document.