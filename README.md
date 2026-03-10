# 💎 Aurex Gem House

**Luxury Gemstones | Ethically Sourced | Certified Quality**

A premium gemstone website showcasing luxury gems sourced from Sri Lanka and Thailand, delivered to Australia, China, Hong Kong, Taiwan, and Japan.

---

## 🌐 Live Website

**Domain:** aurexgemhouse.store  
**Hosted on:** GitHub Pages  
**Repository:** aurexgemhouse/aurex-gem-house

---

## 📋 Project Overview

Aurex Gem House is a multilingual luxury gemstone showcase featuring:

- **168 gemstone detail pages** (42 per language × 4 languages)
- **Multilingual support** (English, Simplified Chinese, Traditional Chinese, Japanese)
- **Educational resources** (Birthstones, Astrology, Planetary Gems, Chinese Zodiac)
- **JS-loaded header/footer** with language-specific includes
- **Premium design** with elegant typography and refined aesthetics
- **Responsive layout** optimized for all devices

---

## 🗂️ Site Structure

### Main Pages (4 Languages Each)
- Homepage (`index.html`) - Featured gemstones and hero section
- About (`about.html`) - Company information
- Guide (`guide.html`) - Gemstone education
- Birthstones (`birthstones.html`) - Monthly birthstone guide
- Astrology (`astrology.html`) - Western zodiac gemstones
- Planets (`planets.html`) - Vedic planetary gemstones (Navaratna)
- Chinese Zodiac (`zodiac.html`) - Chinese zodiac gemstones

### Gemstone Detail Pages (168 Pages — 42 per Language)
Located in `/gem-pages/en/`, `/gem-pages/cn/`, `/gem-pages/jp/`, `/gem-pages/tw/`:

**Featured Sapphires:** Blue Sapphire, Padparadscha Sapphire, Pink Sapphire, White Sapphire, Yellow Sapphire, Star Sapphire

**Precious & Rare:** Ruby, Emerald, Diamond, Alexandrite, Cat's Eye Chrysoberyl

**Collector Gems:** Spinel, Blue Spinel, Hessonite Garnet, Zircon, Moonstone, Tourmaline

**Popular Stones:** Amethyst, Aquamarine, Citrine, Garnet, Opal, Pearl, Peridot, Tanzanite, Topaz, Turquoise

**Additional Gems:** Amber, Bloodstone, Carnelian, Jade, Kunzite, Lapis Lazuli, Morganite, Obsidian, Onyx, Paraiba Tourmaline, Red Coral, Rose Quartz, Sodalite, Tiger's Eye

### Legal & Policy Pages (4 Languages Each)
- Privacy Policy (`privacy-policy.html` + `.zh-cn`, `.zh-tw`, `.ja`)
- Terms of Service (`terms.html` + `.zh-cn`, `.zh-tw`, `.ja`)
- Shipping Policy (`shipping.html` + `.zh-cn`, `.zh-tw`, `.ja`)
- Return Policy (`returns.html` + `.zh-cn`, `.zh-tw`, `.ja`)

### Header/Footer Includes
Dynamically loaded per language via `main.js`:
- `assets/includes/header-en.html`, `header-ja.html`, `header-zh-cn.html`, `header-zh-tw.html`
- `assets/includes/footer-en.html`, `footer-ja.html`, `footer-zh-cn.html`, `footer-zh-tw.html`

---

## 🎨 Design System

### Colors
- **Primary Background:** Dark luxury (`#0b0b0d`)
- **Text:** Soft warm white (`#f8f7f2`)
- **Accent Gold:** Subtle luxury touches
- **Gem Cards:** Radiant silver borders with glow effects

### Typography
- Clean, professional sans-serif
- Hierarchical heading structure
- Optimal readability and spacing

### Components
- **Hero Section:** Welcome message with call-to-action
- **Gem Cards:** Interactive cards with images and descriptions
- **Language Switcher:** EN, 简体, 繁體, 日本語
- **Footer:** Multi-column layout with categories, resources, legal, and about sections

---

## 🖼️ Assets Structure

```
assets/
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Header/footer loader, language switcher, contact form
├── includes/               # JS-loaded header/footer templates (8 HTML files)
│   ├── header-en.html, header-ja.html, header-zh-cn.html, header-zh-tw.html
│   └── footer-en.html, footer-ja.html, footer-zh-cn.html, footer-zh-tw.html
└── images/
    ├── gemstones/
    │   ├── featured/       # Homepage featured gems (14 PNG images)
    │   ├── 4-gems/         # Additional gem images (47 PNG images)
    │   ├── birthstones/    # Monthly birthstone images (16 PNG)
    │   ├── astrology/      # Zodiac sign stones (12 PNG)
    │   ├── planets/        # Planetary gems (9 PNG)
    │   ├── chinese-zodiac/ # Chinese zodiac gems (12 PNG)
    │   ├── additional/     # Alternative views (6 PNG)
    │   └── *.svg           # Legacy SVG files
    ├── favicon/            # Favicon files (multiple sizes)
    ├── logo/
    │   └── aurex-logo.png
    └── ui/
        └── *.svg           # UI icons (globe, play, pin, phone, mail)
```

---

## 🚀 Deployment

**Platform:** GitHub Pages  
**Branch:** `main`  
**Configuration:** `.nojekyll` file ensures proper deployment  
**CNAME:** Custom domain configured  
**SSL:** Enabled via GitHub Pages

### Recent Updates
- ✅ Mar 10: Fixed encoding issues (CJK text restoration in 20 pages)
- ✅ Mar 10: Fixed language switcher for gem-pages (directory-based switching)
- ✅ Mar 10: Added 9 missing gemstone images
- ✅ Mar 10: Translated legal pages (privacy, terms, shipping, returns) to ZH-CN, ZH-TW, JA
- ✅ Mar 10: Created gem-pages in CN, JP, TW (42 pages each)
- ✅ Mar: JS-loaded header/footer with 4 language variants
- ✅ Feb 14: Updated gemstone images (SVG → PNG)
- ✅ Feb 12: All gem cards linked to detail pages
- ✅ Responsive design optimized

---

## 📝 Content Guidelines

See individual documentation files for details:
- `MIGRATION_GUIDE.md` - **Complete migration instructions for moving to new laptop**
- `FILE_SYSTEM_INVENTORY.md` - **Detailed file system inventory and structure**
- `GEMSTONE-CONTENT-AUSTRALIAN-MARKET.md` - Professional copywriting for each gemstone
- `GEMSTONE-LIST.md` - Complete inventory of 42+ gemstones
- `GEMSTONE-PAGE-MASTER-TEMPLATE.md` - Template for creating new gemstone pages
- `style-guide.md` - Design and content standards
- `gemini.md` - Development context and AI assistant notes
- `AUREX_MYGEM_BACKEND_SETUP.md` - Backend setup guide
- `APPS_SCRIPT_CODE.md` - Google Apps Script code reference

---

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with modern features
- **Vanilla JavaScript** - Language switching functionality
- **Git/GitHub** - Version control and hosting
- **GitHub Pages** - Static site hosting

---

## 📧 Contact

**Location:** Sydney · Colombo · Bangkok  
**Target Markets:** Australia, China, Hong Kong, Taiwan, Japan

---

## 📄 License

© 2026 Aurex Gem House · All rights reserved.

---

**Last Updated:** March 10, 2026  
**Version:** 4.0 (Production)
