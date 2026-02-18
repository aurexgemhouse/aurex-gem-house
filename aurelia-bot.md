💎 AURELIA – Lead Generating Gemstone Recommendation Engine
Technical Specification for Google Antigravity Implementation

Project: Aurex Gem House
Chatbot Name: Aurelia
Infrastructure: GitHub Pages + Cloudflare + Google Apps Script

🎯 OBJECTIVE

Build a lead-generating gemstone recommendation engine called Aurelia, embedded under the Guide menu.

The system must:

Collect birth data

Calculate gemstone recommendations

Display results

Capture inquiry details

Store leads securely

Run on static hosting (no paid server)

🏗 CURRENT STACK

Frontend Hosting:

GitHub Pages

DNS / Security:

Cloudflare

Backend (Leads):

Google Sheets

Google Apps Script

This is a fully serverless architecture.

🧠 SYSTEM FLOW
STEP 1 – Gender Verification

Screen 1:

Please select:
[ Male ] [ Female ]


Store value → gender

STEP 2 – Date & Time Input

Screen 2:

Enter Date of Birth:
DD/MM/YYYY

Enter Time of Birth:
24H format (HH:MM)

Select Birth Time Zone:
Dropdown list (IANA format)
Example:
Australia/Sydney
Asia/Shanghai
Asia/Hong_Kong
Asia/Taipei
Asia/Tokyo


Store:

dob

birthTime

timezone

🔮 GEMSTONE LOGIC ENGINE

The logic runs in frontend JavaScript.

1️⃣ Birthstone by Month

Derived from:
dob.month

Example mapping:

Month	Gem
Jan	Garnet
Feb	Amethyst
Mar	Aquamarine
Apr	Diamond
May	Emerald
Jun	Pearl
Jul	Ruby
Aug	Peridot
Sep	Blue Sapphire
Oct	Opal
Nov	Topaz
Dec	Tanzanite
2️⃣ Western Zodiac Gemstone

Derived from:
dob + birthTime + timezone

Zodiac calculation required.

Example mapping:

Zodiac	Gem
Aries	Diamond
Taurus	Emerald
Gemini	Pearl
Cancer	Ruby
Leo	Peridot
Virgo	Sapphire
Libra	Opal
Scorpio	Topaz
Sagittarius	Turquoise
Capricorn	Garnet
Aquarius	Amethyst
Pisces	Aquamarine
3️⃣ Planetary Gemstone (Vedic)

Derived from:

Zodiac sign

Mapping example:

Planet	Gem
Sun	Ruby
Moon	Pearl
Mars	Red Coral
Mercury	Emerald
Jupiter	Yellow Sapphire
Venus	Diamond
Saturn	Blue Sapphire
Rahu	Hessonite
Ketu	Cat's Eye
4️⃣ Chinese Zodiac Gemstone

Derived from:
dob.year

12-year cycle logic required.

🖥 SCREEN: RESULTS DISPLAY

Show:

Your Birthstone:
Your Astrological Gemstone:
Your Planetary Gemstone:
Your Chinese Zodiac Gemstone:


Button:

Proceed to Order Your Gems

📋 CUSTOMER INQUIRY FORM

Fields:

Name
Email
Mobile
Business or Personal

GEM SELECTION WITH WEIGHT OPTIONS

For each gemstone:

Weight options dropdown:

Below 1ct

1–2ct

2–3ct

3–4ct

4–5ct

Above 5ct

Categories:

Birth Gemstone

Astrological Gemstone

Planet Gemstone

Chinese Zodiac Gemstone

Chinese Zodiac Year Combination Gemstone

Each gem auto-filled (read-only name).

✅ SUBMISSION MESSAGE

On successful POST:

Thank you for submitting inquiry to find your gemstone. 
We will work with our gemmologist and will get back to you with our price recommendation.

🧩 TOOLS REQUIRED BY ANTIGRAVITY
1️⃣ Frontend

HTML5

CSS3

Vanilla JavaScript

Timezone library (luxon.js or day.js)

Zodiac calculation script

Chinese zodiac year logic

Optional:

UI modal framework (lightweight)

2️⃣ Backend

Google Sheets (Lead storage)

Google Apps Script (API endpoint)

Secret token validation

CORS handling

Basic rate limiting

3️⃣ Security (Cloudflare)

Enable:

Bot Fight Mode

Rate limiting

Turnstile CAPTCHA (recommended)

Firewall rule for API abuse

🗂 FILE STRUCTURE (Recommended)
/guide/aurelia.html
/assets/js/aurelia-engine.js
/assets/js/zodiac-logic.js
/assets/js/chinese-zodiac.js
/assets/js/api-submit.js

🔐 SECURITY REQUIREMENTS

Must include:

Secret token validation

Honeypot hidden field

Email validation

Required field checks

Cloudflare Turnstile

Rate limit protection

🚀 SIMPLEST & BEST WAY TO HANDLE THIS

Given your current infrastructure:

✔ BEST ARCHITECTURE

Frontend Logic:
All gemstone calculations in JavaScript

Backend:
Google Apps Script → store lead only

No backend gemstone logic required.

This keeps:

Cost = $0

Maintenance low

Fast loading

Scalable up to ~1,000 leads/day

🏆 WHY THIS IS THE BEST APPROACH

✔ No server needed
✔ No database hosting cost
✔ No backend computation load
✔ Full control of gemstone mapping
✔ Easy to migrate later to Supabase

📈 FUTURE PHASE (When Scaling)

Replace Google Sheets with:

Supabase
or

Firebase

Add:

Admin dashboard

Lead scoring

Auto email automation

CRM integration

🎯 FINAL RECOMMENDATION

Aurelia should be:

Educational

Authoritative

Lead-focused

Not transactional

Use it to:

Build trust

Capture high-value gemstone leads

Qualify serious buyers

Support global markets

COMPLETION CHECKLIST FOR ANTIGRAVITY

Gender screen implemented

DOB + Time + Timezone logic working

Zodiac calculation verified

Chinese zodiac cycle verified

Result screen displaying correctly

Inquiry form posting successfully

Lead inserted into Google Sheet

Thank you message displayed

No console errors

Cloudflare security enabled

💎 END OF SPECIFICATION

AURELIA – Gem Intelligence Engine
Version 1.0
For Aurex Gem House