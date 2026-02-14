# Aurex Gem House - Style Guide

**Design Standards & Code Conventions**

---

## 🎨 Visual Design System

### Color Palette

#### Primary Colors
- **Background:** `#0b0b0d` - Deep luxury black
- **Text:** `#f8f7f2` - Soft warm white
- **Muted Text:** `rgba(248, 247, 242, 0.6)` - Subtle gray

#### Accent Colors
- **Gold:** Subtle gold accents for luxury touches
- **Border Radiance:** Silver glow effect on gem cards
- **Link Hover:** Bright accent for interactive elements

#### Usage Guidelines
- Dark background provides luxury feel
- High contrast text for readability
- Subtle accents prevent overwhelming design
- No flashy or garish colors

---

### Typography

#### Font System
- **Primary Font:** Professional sans-serif (system font stack)
- **Headings:** Bold, clear hierarchy
- **Body Text:** Readable line height (1.6-1.8)
- **Footer:** Smaller, muted text

#### Heading Hierarchy
```
H1: Page title (hero section) - Large, bold
H2: Section titles - Medium, refined
H3: Subsection titles (footer, gem names) - Smaller, clear
```

#### Text Guidelines
- **Concise messaging** - Short paragraphs
- **Clear language** - No jargon unless explained
- **Australian English** - Spelling and terminology
- **Professional tone** - Calm, confident, refined

---

### Spacing & Layout

#### Grid System
- **Container max-width:** Comfortable reading width
- **Section padding:** Generous white space
- **Card gaps:** Consistent spacing between elements

#### Responsive Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

---

## 🧩 Component Standards

### Header
- **Logo:** Left-aligned, linked to homepage
- **Navigation:** Horizontal menu, clear labels
- **Language Switcher:** Globe icon + language buttons
- **Sticky behavior:** May remain at top on scroll

### Hero Section
- **H1 Title:** "Gems That Whisper Luxury"
- **Lead paragraph:** Brief value proposition
- **CTA Button:** "Enquire Now" (or similar)
- **Optional video placeholder:** Play icon overlay

### Gem Cards
- **Structure:**
  - Image (square aspect ratio)
  - H3 heading (gemstone name)
  - Description (origin · characteristics)
- **Border:** Radiant silver glow effect
- **Hover:** Subtle interaction (no aggressive effects)
- **Clickable:** Entire card links to detail page

### Footer
- **Multi-column layout:**
  - Gem Categories
  - Resources
  - Legal
  - About
- **H3 headings** for column titles
- **Contact info:** Location pins (Sydney · Colombo · Bangkok)
- **Copyright:** Muted text at bottom

---

## 📐 Code Conventions

### HTML Standards

#### Semantic Markup
```html
<!-- Use proper HTML5 elements -->
<header>, <nav>, <main>, <section>, <article>, <footer>

<!-- Headings in proper order -->
<h1> → <h2> → <h3> (no skipping levels)

<!-- Images with alt text -->
<img src="..." alt="Descriptive text">
```

#### Accessibility
```html
<!-- ARIA landmarks -->
<header role="banner">
<nav aria-label="Primary">
<main id="main" tabindex="-1">
<footer role="contentinfo">

<!-- Skip link -->
<a class="skip-link" href="#main">Skip to content</a>

<!-- Language attributes -->
<html lang="en">
<link rel="alternate" hreflang="zh-CN" href="...">
```

#### Meta Tags
```html
<!-- Essential meta -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="...">
<title>Page Title | Aurex Gem House</title>

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
```

---

### CSS Standards

#### Organization
1. **Reset/Base styles** - Global resets
2. **Typography** - Font definitions
3. **Layout** - Grid, containers
4. **Components** - Header, cards, footer
5. **Utilities** - Helper classes
6. **Responsive** - Media queries

#### Naming Conventions
- **Classes:** Lowercase with hyphens (`.gem-card`, `.site-header`)
- **Avoid IDs** for styling (use for anchors only)
- **BEM methodology** acceptable but not required

#### Code Quality
- Consistent indentation (2 spaces)
- Group related properties
- Use shorthand where appropriate
- Comment complex sections

---

### JavaScript Standards

#### Current Usage
- **Language switcher** - Minimal vanilla JS
- **No frameworks** - Keep it simple
- **Progressive enhancement** - Works without JS

#### Code Style
```javascript
// Clear variable names
const languageButtons = document.querySelectorAll('[data-lang]');

// Event delegation
header.addEventListener('click', handleClick);

// Avoid inline handlers
// ❌ <button onclick="...">
// ✅ <button data-action="...">
```

---

## 📝 Content Guidelines

### Writing Style

#### Tone
- **Refined and confident** - No hype or exaggeration
- **Educational** - Informative without overwhelming
- **Calm authority** - Trust-building
- **Culturally aware** - Respectful of traditions

#### Structure
- **Short paragraphs** - 2-3 sentences max
- **Clear headings** - Guide the reader
- **Bullet points** - Easy scanning
- **Active voice** - Direct and clear

### Gemstone Content Template

```
# Gemstone Name
*Emotional positioning line*

[1-2 sentence introduction]

## Why Australians Choose [Gemstone]
✓ Feature 1
✓ Feature 2
✓ Feature 3
✓ Feature 4
✓ Feature 5

[Supporting sentence]

## Colour & Quality Guide
**Colour:** [Description]
**Clarity:** [Description]
**Treatment:** [Honest disclosure]
**Certification:** Available from GIA/IGI/etc.

## Cultural & Traditional Significance
- **Birthstone:** Month (if applicable)
- **Associated with:** Values/qualities
- **Planetary Link:** (if relevant)

## Investment & Market Appeal in Australia
[2-3 sentences on market demand, investment potential]
```

---

## 🌐 Multilingual Guidelines

### Language Versions
- **English** (`.html`) - Primary/default
- **Simplified Chinese** (`.zh-cn.html`) - 简体中文
- **Traditional Chinese** (`.zh-tw.html`) - 繁體中文
- **Japanese** (`.ja.html`) - 日本語

### Translation Standards
- **Professional translations** - No machine translation
- **Cultural adaptation** - Not literal translation
- **Consistent structure** - Same HTML layout
- **Verify links** - Language-specific paths

---

## 📷 Image Guidelines

### Formats
- **Gemstones:** PNG (high quality, transparent or solid backgrounds)
- **UI Icons:** SVG (scalable, crisp at any size)
- **Photos:** JPG (if needed for photography)

### Naming Conventions
```
Lowercase with hyphens:
✓ blue-sapphire.png
✓ padparadscha-sapphire.png
✗ BlueSapphire.PNG
✗ padparadscha_sapphire.jpg
```

### Organization
```
assets/images/
├── gemstones/
│   ├── featured/         # Homepage featured gems
│   ├── birthstones/      # Monthly birthstones
│   ├── astrology/        # Zodiac stones
│   ├── planets/          # Planetary gems
│   ├── chinese-zodiac/   # Chinese zodiac
│   └── 4-gems/           # Additional variations
├── logo/                  # Brand assets
└── ui/                    # Interface icons
```

### Alt Text Standards
```html
<!-- Descriptive, not redundant -->
✓ <img src="..." alt="Blue Sapphire">
✗ <img src="..." alt="Image of blue sapphire gemstone">

<!-- Empty for decorative -->
<img src="icon.svg" alt="" aria-hidden="true">
```

---

## ✅ Quality Checklist

### Before Committing
- [ ] HTML validates (semantic structure)
- [ ] All images have alt text
- [ ] Links are functional
- [ ] Language switcher works
- [ ] Responsive on mobile/tablet/desktop
- [ ] Text is proofread (no typos)
- [ ] SEO meta tags present
- [ ] Code is formatted consistently

### Before Deployment
- [ ] Test on multiple browsers
- [ ] Verify all 4 language versions
- [ ] Check page load speed
- [ ] Broken link check
- [ ] Accessibility audit (ARIA, keyboard nav)
- [ ] Git commit message is descriptive

---

## 🚫 Anti-Patterns (Avoid)

### Design
- ❌ Flashy animations or transitions
- ❌ Garish colors or neon accents
- ❌ Cluttered layouts
- ❌ Tiny, unreadable text
- ❌ Poor contrast

### Content
- ❌ Exaggerated claims or hype
- ❌ Wall-of-text paragraphs
- ❌ Vague or generic descriptions
- ❌ Spelling/grammar errors
- ❌ Inconsistent terminology

### Code
- ❌ Inline styles (`style="..."`)
- ❌ Deprecated HTML tags
- ❌ Missing accessibility features
- ❌ Broken or dead links
- ❌ Duplicate IDs

---

## 📚 References

### Tools
- **HTML Validator:** [W3C Validator](https://validator.w3.org/)
- **WCAG Compliance:** [WAVE Tool](https://wave.webaim.org/)
- **Performance:** [PageSpeed Insights](https://pagespeed.web.dev/)

### Resources
- **Gemstone Info:** GEMSTONE-CONTENT-AUSTRALIAN-MARKET.md
- **Gemstone List:** GEMSTONE-LIST.md
- **Page Template:** GEMSTONE-PAGE-MASTER-TEMPLATE.md

---

**Last Updated:** February 14, 2026  
**Version:** 1.0  
**Purpose:** Maintain design consistency and code quality across Aurex Gem House website
