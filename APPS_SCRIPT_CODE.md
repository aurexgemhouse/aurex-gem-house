# Apps Script Code for My Gem Backend

**Last Updated:** February 15, 2026

## Instructions

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1YcTXenWXwdaupMMTvQaZPlXQdTTWQrk8vGjq-Rl7FyI/edit
2. Go to **Extensions** → **Apps Script**
3. **Delete all existing code**
4. **Copy and paste the code below**
5. Click **Save** (💾)
6. Click **Deploy** → **New deployment** → **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** and copy the URL

---

## Code (For Form Submission)

```javascript
function doGet() {
  return ContentService
    .createTextOutput("Aurex MyGem Backend is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Sheet1");
    
    // Handle both JSON and form data
    var data;
    
    if (e.postData.type === "application/json") {
      // JSON data from fetch()
      data = JSON.parse(e.postData.contents);
    } else {
      // Form data from HTML form submission
      data = e.parameter;
    }
    
    // Add row to sheet
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.mobile || "",
      data.type || "",
      data.dob || "",
      data.timezone || "",
      data.birthGem || "",
      data.astroGem || "",
      data.planetGem || "",
      data.chineseGem || "",
      data.variantGem || "",
      data.weightBirth || "",
      data.weightAstro || "",
      data.weightPlanet || "",
      data.weightChinese || "",
      data.weightVariant || ""
    ]);
    
    // For form submissions, redirect to thank you page
    if (e.postData.type !== "application/json") {
      var thankYouUrl = data.redirect || "https://aurexgemhouse.store/thank-you.html";
      return HtmlService.createHtmlOutput(
        '<html><head><meta http-equiv="refresh" content="0;url=' + thankYouUrl + '"></head></html>'
      );
    }
    
    // For JSON, return success
    return ContentService
      .createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Current Deployment

**URL:** https://script.google.com/macros/s/AKfycbydRp9b4M5UVvKYyMRk2viSpWxPQXFkphO8T8jPsyJ24MgHTidJr1LRyH8ClEALRy4v/exec

**Status:** ✅ Working (GET requests confirmed)

**Access:** Anyone with the link can submit data
