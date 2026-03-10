# Gemini AI Assistant Context File

## 🎯 Project Purpose
This is the Aurex Gem House website - a luxury gemstone showcase targeting customers in Australia, China, Hong Kong, Taiwan, and Japan. The site emphasizes ethical sourcing, certification, and premium quality gemstones from Sri Lanka and Thailand.

---

## 📊 Current State (Mar 10, 2026)

### Status: ✅ Production-Ready
- **Total HTML Pages:** 224 (root pages × 4 languages + gem-pages × 4 languages + includes)
- **Gemstone Pages:** 42 per language × 4 languages = 168 detail pages
- **Header/Footer Includes:** 8 HTML templates (4 headers + 4 footers)
- **Deployment:** Live on GitHub Pages (aurexgemhouse.store)
- **Repository:** aurexgemhouse/aurex-gem-house

---

## 🗂️ Project Structure

### Core Files
- **index.html** - Homepage with featured gemstones
- **about.html** - Company information
- **guide.html** - Gemstone education
- **birthstones.html** - Monthly birthstone guide
- **astrology.html** - Western zodiac gemstones
- **planets.html** - Vedic planetary gems (Navaratna)
- **zodiac.html** - Chinese zodiac gemstones

### Language Variants
Each main page has 4 versions:
- `.html` - English
- `.zh-cn.html` - Simplified Chinese (简体)
- `.zh-tw.html` - Traditional Chinese (繁體)
- `.ja.html` - Japanese (日本語)

### Gemstone Detail Pages
42 pages per language in `gem-pages/en/`, `gem-pages/cn/`, `gem-pages/jp/`, `gem-pages/tw/` with:
- Origin and quality
- Color and clarity characteristics
- Cultural significance
- Investment potential
- Australian market appeal

### Assets
```
assets/
├── css/styles.css         # Main stylesheet
├── js/main.js             # Header/footer loader, language switcher, contact form
├── includes/              # JS-loaded header/footer templates (8 files)
│   ├── header-{en,ja,zh-cn,zh-tw}.html
│   └── footer-{en,ja,zh-cn,zh-tw}.html
└── images/
    ├── gemstones/        # 147 gemstone images (PNG)
    ├── favicon/          # Favicon files (multiple sizes)
    ├── logo/             # Brand logos
    └── ui/               # UI icons (SVG)
```

---

## 🎨 Design Philosophy

### Visual Style
- **Dark luxury aesthetic** - Deep background (#0b0b0d)
- **Premium typography** - Clean, professional sans-serif
- **Subtle gold accents** - Luxury without being flashy
- **Radiant gem cards** - Silver glow borders for visual appeal
- **High-quality images** - PNG format for gemstones

### Content Tone
- **Refined and confident** - No hype, calm authority
- **Educational** - Informative without overwhelming
- **Culturally aware** - Respects Chinese, Australian, and Asian markets
- **Trust-building** - Emphasizes certification and ethical sourcing

---

## 🔑 Key Features

### Multilingual Support
- Language switcher in header (EN / 简体 / 繁體 / 日本語)
- JS-loaded header/footer templates per language
- Directory-based switching for gem-pages (`/en/` → `/cn/` → `/tw/` → `/jp/`)
- Suffix-based switching for root pages (`.html` → `.zh-cn.html` → `.zh-tw.html` → `.ja.html`)
- Maintains consistent structure across languages

### SEO Optimization
- Semantic HTML5 markup
- Proper heading hierarchy (H1 > H2 > H3)
- Meta descriptions and titles
- Alt text for all images
- Language alternate links (hreflang)

### Accessibility
- ARIA labels and landmarks
- Skip-to-content link
- Keyboard navigation support
- High contrast text
- Semantic structure

### Featured Gems (Homepage)
14 prominently displayed gemstones:
1. Blue Sapphire
2. Padparadscha Sapphire
3. Pink Sapphire
4. White Sapphire
5. Ruby
6. Yellow Sapphire
7. Cat's Eye Chrysoberyl
8. Spinel
9. Alexandrite
10. Star Sapphire
11. Zircon
12. Moonstone
13. Hessonite Garnet
14. Tourmaline

---

## 📝 Content Guidelines

### Writing Style
- **Concise and elegant** - Short paragraphs, clear messaging
- **Australian English** - Spelling and terminology
- **Cultural sensitivity** - Respectful of Asian traditions
- **Factual accuracy** - Honest about treatments and origins

### Image Standards
- **Format:** PNG for gemstones, SVG for UI icons
- **Quality:** High resolution, professionally rendered
- **Alt text:** Descriptive and accurate
- **Naming:** Lowercase with hyphens (e.g., `blue-sapphire.png`)

---

## 🚀 Deployment Process

### GitHub Pages Setup
1. Repository: `aurexgemhouse/aurex-gem-house`
2. Branch: `main`
3. Custom domain: aurexgemhouse.com (via CNAME)
4. `.nojekyll` file ensures proper deployment
5. SSL enabled automatically

### Recent Major Updates
- ✅ Mar 10: Restored CJK text in 20 corrupted non-English pages
- ✅ Mar 10: Fixed language switcher for gem-pages (directory-based)
- ✅ Mar 10: Added 9 missing gemstone images to 4-gems/
- ✅ Mar 10: Translated legal pages to ZH-CN, ZH-TW, JA
- ✅ Mar 10: Created gem-pages in CN, JP, TW (42 pages each)
- ✅ Mar: JS-loaded header/footer with 4 language templates
- ✅ Feb 14: Updated gemstone image paths
- ✅ Feb 12: Created 5 new gemstone pages
- ✅ Feb 12: Linked all homepage gems to detail pages
- ✅ Feb 11: Mass image update (SVG → PNG)
- ✅ Feb 2: Contact form redirect fixes

---

## 🎯 Target Audience

### Primary Markets
1. **Australia** - Engagement rings, ethical luxury
2. **China** - Astrological stones, investment pieces
3. **Hong Kong** - High-end collectors
4. **Taiwan** - Cultural gemstones
5. **Japan** - Quality craftsmanship appreciation

### Customer Personas
- **Engagement Ring Shoppers** - Seeking unique alternatives to diamonds
- **Astrological Buyers** - Vedic and Chinese astrology followers
- **Collectors** - Investment-grade rare gemstones
- **Cultural Buyers** - Birthstones and traditional gem seekers

---

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design (mobile, tablet, desktop)
- Progressive enhancement approach

### Performance
- Minimal JavaScript (header/footer loader + language switcher)
- Optimized images
- Clean, efficient CSS
- Fast page load times

### Maintenance
- Regular content updates via Git
- Image optimization ongoing
- SEO monitoring
- Broken link checks

---

## 📚 Documentation Files

### For Developers
- `README.md` - Project overview and structure
- `gemini.md` - This file (AI context)
- `style-guide.md` - Design standards and code conventions

### For Content
- `GEMSTONE-CONTENT-AUSTRALIAN-MARKET.md` - Professional copywriting (1800+ lines)
- `GEMSTONE-LIST.md` - Complete gemstone inventory (42 items)
- `GEMSTONE-PAGE-MASTER-TEMPLATE.md` - Template for new pages

### For Setup
- `FAVICON-INSTRUCTIONS.md` - Favicon implementation guide

---

## 🎯 Future Considerations

### Potential Enhancements
- E-commerce integration (shopping cart, checkout)
- Live chat or contact form
- Blog/news section for gemstone education
- Customer testimonials
- Video integration (gemstone close-ups, sourcing stories)
- Instagram/social media feed integration

### Content Expansion
- More gemstone varieties
- Jewelry design inspiration gallery
- Gemstone care guides
- Certification guide
- Sourcing transparency pages

---

## 💡 Important Notes for AI Assistants

### When Making Changes
1. **Maintain consistency** across all 4 language versions
2. **Test language switcher** after structural changes
3. **Preserve SEO elements** (meta tags, alt text, headings)
4. **Keep design cohesive** with existing aesthetic
5. **Verify all links** work correctly
6. **Git commit messages** should be descriptive

### Gemstone Content Standards
- Always mention origin (Sri Lanka, Thailand, etc.)
- Include Mohs hardness when relevant
- Mention treatments honestly (heated, unheated)
- Reference certification availability
- Include cultural significance where appropriate
- Focus on Australian market appeal

### Code Standards
- Clean, semantic HTML5
- CSS organized by component
- Minimal JavaScript (vanilla, no frameworks)
- Accessible markup (ARIA, landmarks)
- Responsive design (mobile-first approach)

---

**Last Updated:** March 10, 2026  
**Maintained by:** Gemini AI Assistant  
**Purpose:** Provide context for future development and updates
