# 🚀 Aurex Gem House - Migration Guide

**Last Updated:** February 16, 2026  
**Version:** 3.0

This guide will help you migrate the Aurex Gem House website to a new laptop with minimal effort.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start Migration](#quick-start-migration)
3. [Detailed File System Structure](#detailed-file-system-structure)
4. [Dependencies & Tools](#dependencies--tools)
5. [Git Repository Setup](#git-repository-setup)
6. [External Integrations](#external-integrations)
7. [Verification Checklist](#verification-checklist)

---

## ✅ Prerequisites

Before migrating, ensure you have the following installed on your new laptop:

### Required Software
- **Git** - Version control ([Download](https://git-scm.com/downloads))
- **Web Browser** - Chrome, Firefox, or Edge (for testing)
- **Text Editor/IDE** - VS Code, Sublime Text, or any preferred editor

### Optional (Recommended)
- **Node.js** - For running local development server (optional)
- **GitHub Desktop** - GUI alternative to Git CLI (optional)

### Required Accounts
- **GitHub Account** - Access to `aurexgemhouse/aurex-gem-house` repository
- **Google Account** - Access to Google Sheets backend (if applicable)

---

## 🚀 Quick Start Migration

### Step 1: Clone the Repository

Open terminal/command prompt and run:

```bash
# Navigate to your desired project location
cd d:\Project-1\Gemstone-webisite

# Clone the repository
git clone https://github.com/aurexgemhouse/aurex-gem-house.git new-website-3

# Navigate into the project
cd new-website-3
```

### Step 2: Verify Repository

```bash
# Check git status
git status

# Check remote connections
git remote -v

# Check current branch
git branch
```

Expected output:
- Current branch: `main`
- Remote: `origin` pointing to `https://github.com/aurexgemhouse/aurex-gem-house.git`

### Step 3: Open in Browser

Simply open `index.html` in your web browser to preview the site locally.

**That's it!** The website is a static HTML/CSS/JS site with no build process required.

---

## 📁 Detailed File System Structure

### Root Directory Overview

```
new-website-3/
├── .git/                          # Git repository data (auto-generated)
├── .gitignore                     # Git ignore rules
├── .nojekyll                      # GitHub Pages configuration
├── CNAME                          # Custom domain: aurexgemhouse.com
├── README.md                      # Project documentation
├── MIGRATION_GUIDE.md            # This file
├── 
├── # Documentation Files
├── APPS_SCRIPT_CODE.md           # Google Apps Script backend code
├── AUREX_MYGEM_API_CONFIG.md     # API configuration guide
├── AUREX_MYGEM_BACKEND_SETUP.md  # Backend setup instructions
├── FAVICON-INSTRUCTIONS.md        # Favicon implementation guide
├── style-guide.md                 # Design & content standards
├── gemini.md                      # Development context
├── 
├── # Main HTML Pages (English + 3 Languages)
├── index.html                     # Homepage (EN)
├── index.ja.html                  # Homepage (Japanese)
├── index.zh-cn.html               # Homepage (Simplified Chinese)
├── index.zh-tw.html               # Homepage (Traditional Chinese)
├── 
├── about.html                     # About page (+ 3 language variants)
├── guide.html                     # Gemstone guide (+ 3 language variants)
├── birthstones.html               # Birthstones (+ 3 language variants)
├── astrology.html                 # Western zodiac (+ 3 language variants)
├── planets.html                   # Vedic planets (+ 3 language variants)
├── zodiac.html                    # Chinese zodiac (+ 3 language variants)
├── 
├── # Legal & Policy Pages
├── privacy-policy.html
├── terms.html
├── shipping.html
├── returns.html
├── 
├── # Test & Development Pages
├── api-test.html                  # Backend API testing page
├── my-gem-form-test.html          # Form submission testing
├── google704e27e381325c13.html    # Google Search Console verification
├── 
├── # Brand Assets
├── favicon.png                    # Site favicon
├── aurex-gem-house-logo.jpg       # Company logo
├── 
├── # Core Directories
├── assets/                        # CSS, JS, and images
├── gem-pages/                     # Individual gemstone pages
└── [other files...]
```

### Assets Directory Structure

```
assets/
├── css/
│   └── styles.css                 # Main stylesheet (all styles in one file)
├── 
├── js/
│   └── main.js                    # Language switcher & interactions
├── 
└── images/
    ├── gemstones/
    │   ├── featured/              # Homepage featured gems (14 PNG images)
    │   ├── 4-gems/                # Additional gem images (38 PNG images)
    │   ├── birthstones/           # Monthly birthstone images (16 PNG)
    │   ├── astrology/             # Zodiac sign stones (12 PNG)
    │   ├── planets/               # Planetary gems (9 PNG)
    │   ├── chinese-zodiac/        # Chinese zodiac gems (12 PNG)
    │   ├── additional/            # Alternative gem views (6 PNG)
    │   └── *.svg                  # Legacy SVG files (14 files)
    ├── 
    ├── logo/
    │   ├── aurex-logo.png
    │   └── aurex-gem-house-logo.png
    └── 
    └── ui/
        ├── globe.svg              # Language switcher icon
        ├── play.svg
        ├── pin.svg
        ├── phone.svg
        └── mail.svg
```

### Gemstone Pages Directory

```
gem-pages/
└── en/                            # English gemstone detail pages (42 pages)
    ├── alexandrite.html
    ├── amber.html
    ├── amethyst.html
    ├── aquamarine.html
    ├── bloodstone.html
    ├── blue-sapphire.html
    ├── blue-spinel.html
    ├── carnelian.html
    ├── cats-eye-chrysoberyl.html
    ├── citrine.html
    ├── diamond.html
    ├── emerald.html
    ├── garnet.html
    ├── hessonite-garnet.html
    ├── imperial-topaz.html
    ├── jade.html
    ├── kunzite.html
    ├── lapis-lazuli.html
    ├── moonstone.html
    ├── morganite.html
    ├── obsidian.html
    ├── onyx.html
    ├── opal.html
    ├── padparadscha-sapphire.html
    ├── paraiba-tourmaline.html
    ├── pearl.html
    ├── peridot.html
    ├── pink-sapphire.html
    ├── red-coral.html
    ├── rose-quartz.html
    ├── ruby.html
    ├── sodalite.html
    ├── spinel.html
    ├── star-sapphire.html
    ├── tanzanite.html
    ├── tigers-eye.html
    ├── topaz.html
    ├── tourmaline.html
    ├── turquoise.html
    ├── white-sapphire.html
    ├── yellow-sapphire.html
    └── zircon.html
```

---

## 🔧 Dependencies & Tools

### No Build Process Required ✅

This is a **static website** with:
- Pure HTML5
- Pure CSS3
- Vanilla JavaScript (no frameworks)

**No npm, webpack, or build tools required!**

### Technology Stack

| Component | Technology | Notes |
|-----------|-----------|-------|
| **Markup** | HTML5 | Semantic, accessible markup |
| **Styling** | CSS3 | Single `styles.css` file |
| **Scripting** | Vanilla JS | Language switcher in `main.js` |
| **Hosting** | GitHub Pages | Automatic deployment from `main` branch |
| **Domain** | Custom DNS | aurexgemhouse.com via CNAME |
| **Backend** | Google Apps Script | Serverless, free tier |
| **Database** | Google Sheets | Stores form submissions |

### Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔗 Git Repository Setup

### Repository Information

| Setting | Value |
|---------|-------|
| **Repository Name** | `aurex-gem-house` |
| **Owner** | `aurexgemhouse` |
| **URL** | `https://github.com/aurexgemhouse/aurex-gem-house` |
| **Primary Branch** | `main` |
| **Hosting** | GitHub Pages (enabled on `main` branch) |

### Initial Setup Commands

```bash
# After cloning, verify setup
git remote -v

# Expected output:
# origin  https://github.com/aurexgemhouse/aurex-gem-house.git (fetch)
# origin  https://github.com/aurexgemhouse/aurex-gem-house.git (push)

# Check current branch
git branch

# Expected output:
# * main

# Pull latest changes
git pull origin main
```

### Common Git Workflows

#### Making Changes

```bash
# 1. Check status
git status

# 2. Add changes
git add .

# 3. Commit with message
git commit -m "Update: description of changes"

# 4. Push to GitHub
git push origin main
```

#### Syncing with Remote

```bash
# Fetch latest changes
git fetch origin

# Pull and merge
git pull origin main

# If conflicts occur, resolve them manually and:
git add .
git commit -m "Resolved merge conflicts"
git push origin main
```

### GitHub Pages Configuration

The site auto-deploys from the `main` branch:

1. Push changes to `main` branch
2. GitHub Pages automatically rebuilds (takes 1-3 minutes)
3. Changes appear at `https://aurexgemhouse.com`

**Configuration Files:**
- `.nojekyll` - Disables Jekyll processing (required)
- `CNAME` - Contains custom domain: `aurexgemhouse.com`

---

## 🔌 External Integrations

### 1. Google Sheets Backend

**Purpose:** Stores "My Gem" form submissions

**Setup Required:**
1. Access Google Sheet: `AUREX_MYGEM_LEADS`
2. Ensure you have edit permissions
3. Verify Apps Script deployment is active

**Configuration Files:**
- `AUREX_MYGEM_BACKEND_SETUP.md` - Complete setup guide
- `APPS_SCRIPT_CODE.md` - Backend code reference
- `AUREX_MYGEM_API_CONFIG.md` - API configuration

**Apps Script URL:**
- Stored in Google Apps Script deployment
- Test endpoint: Visit URL in browser, should show "Aurex MyGem Backend is running."

**Testing:**
- Use `api-test.html` page to verify backend connectivity
- Use `my-gem-form-test.html` for form submission testing

### 2. GitHub Pages

**Domain:** aurexgemhouse.com  
**SSL:** Auto-enabled via GitHub  
**Deployment:** Automatic on push to `main`

**To update domain (if needed):**
1. Update `CNAME` file with new domain
2. Configure DNS at your domain registrar:
   - Add CNAME record pointing to `aurexgemhouse.github.io`

### 3. Google Search Console

**Verification File:** `google704e27e381325c13.html`  
**Purpose:** SEO monitoring and indexing

**Access:** https://search.google.com/search-console

---

## ✅ Verification Checklist

After migration, verify everything is working:

### Local Verification

- [ ] Repository cloned successfully
- [ ] All files present (check against file structure above)
- [ ] `index.html` opens in browser
- [ ] Images load correctly
- [ ] CSS styling appears
- [ ] JavaScript language switcher works
- [ ] All internal links work
- [ ] All 42 gemstone pages accessible

### Git Verification

- [ ] `git status` shows clean working tree
- [ ] `git remote -v` shows correct origin
- [ ] `git branch` shows `main` as current branch
- [ ] `git pull origin main` works without errors

### Online Verification

- [ ] Push test commit to GitHub
- [ ] Site updates at aurexgemhouse.com (wait 1-3 minutes)
- [ ] SSL certificate shows (HTTPS works)
- [ ] Custom domain resolves correctly
- [ ] All pages load without 404 errors

### Backend Verification (Optional)

- [ ] Access Google Sheet `AUREX_MYGEM_LEADS`
- [ ] Visit Apps Script web app URL
- [ ] See "Aurex MyGem Backend is running." message
- [ ] Test form submission via `api-test.html`
- [ ] Verify data appears in Google Sheet

---

## 🆘 Troubleshooting

### Issue: Images Not Loading

**Solution:** Check relative paths. All images use relative paths from project root:
```html
<!-- Correct path from index.html -->
<img src="assets/images/gemstones/featured/ruby.png">

<!-- Correct path from gem-pages/en/ruby.html -->
<img src="../../assets/images/gemstones/featured/ruby.png">
```

### Issue: Git Push Rejected

**Solution:** 
```bash
# Pull latest changes first
git pull origin main

# Then push
git push origin main
```

### Issue: GitHub Pages Not Updating

**Solution:**
1. Check GitHub Actions tab in repository
2. Wait 3-5 minutes for build to complete
3. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
4. Clear browser cache

### Issue: Backend API Not Working

**Solution:**
1. Check `AUREX_MYGEM_BACKEND_SETUP.md` for setup steps
2. Verify Apps Script deployment is set to "Anyone" access
3. Test endpoint URL in browser
4. Check Google Sheet permissions

---

## 📞 Additional Resources

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and structure |
| `MIGRATION_GUIDE.md` | This file - migration instructions |
| `style-guide.md` | Design and content standards |
| `gemini.md` | Development context and notes |
| `AUREX_MYGEM_BACKEND_SETUP.md` | Backend configuration |
| `FAVICON-INSTRUCTIONS.md` | Favicon implementation guide |

### External Links

- **Live Site:** https://aurexgemhouse.com
- **GitHub Repository:** https://github.com/aurexgemhouse/aurex-gem-house
- **GitHub Pages Docs:** https://docs.github.com/en/pages

---

## 🎯 Quick Reference Commands

```bash
# Clone repository
git clone https://github.com/aurexgemhouse/aurex-gem-house.git new-website-3

# Navigate to project
cd new-website-3

# Check status
git status

# Pull latest changes
git pull origin main

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# View commit history
git log --oneline -10
```

---

## 📝 Notes

### Project Characteristics

- **Zero Dependencies:** No npm packages, no build process
- **Fully Static:** Works offline, can be opened directly in browser
- **Image Heavy:** ~130+ PNG images, ensure they're all present
- **Multilingual:** 4 languages (EN, JA, ZH-CN, ZH-TW)
- **42 Gemstone Pages:** All in `/gem-pages/en/` directory
- **Modern CSS:** Uses flexbox, grid, custom properties
- **Vanilla JS:** No jQuery or frameworks

### Migration Time Estimate

- **Experienced Developer:** 5-10 minutes
- **First Time Setup:** 15-30 minutes
- **Including Backend Setup:** Add 30-45 minutes

---

**Happy Migrating! 💎**

If you encounter any issues, refer to the troubleshooting section or check the detailed documentation files in the project root.
