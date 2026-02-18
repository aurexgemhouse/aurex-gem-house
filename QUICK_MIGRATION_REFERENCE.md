# 🚀 Quick Migration Reference Card

**Last Updated:** February 16, 2026

---

## ⚡ Super Quick Start (5 Minutes)

```bash
# 1. Clone repository
git clone https://github.com/aurexgemhouse/aurex-gem-house.git new-website-3

# 2. Navigate to project
cd new-website-3

# 3. Open in browser
# Double-click index.html or serve locally

# 4. Done! ✅
```

---

## 📁 What You Need

### Essential Software
- ✅ **Git** ([Download](https://git-scm.com/downloads))
- ✅ **Web Browser** (Chrome, Firefox, Edge)
- ✅ **Text Editor** (VS Code recommended)

### Essential Accounts
- ✅ **GitHub** - Access to `aurexgemhouse/aurex-gem-house`
- ⚠️ **Google Account** - Only if using backend forms

---

## 🎯 Key Facts

| Aspect | Detail |
|--------|--------|
| **Type** | Static HTML/CSS/JS website |
| **Dependencies** | ZERO npm packages |
| **Build Process** | NONE - just open in browser |
| **Total Size** | ~50-100 MB |
| **File Count** | 150+ files |
| **Languages** | 4 (EN, JA, ZH-CN, ZH-TW) |

---

## 📂 Critical Directories

```
new-website-3/
├── index.html              ← HOMEPAGE (START HERE)
├── assets/
│   ├── css/styles.css      ← ALL STYLING
│   ├── js/main.js          ← LANGUAGE SWITCHER
│   └── images/             ← 130+ IMAGES (IMPORTANT!)
└── gem-pages/en/           ← 42 GEMSTONE PAGES
```

---

## 🔄 Common Git Commands

```bash
# Check what's changed
git status

# Get latest changes
git pull origin main

# Save your changes
git add .
git commit -m "Your message"
git push origin main
```

---

## ✅ Verify Migration Success

After cloning, check:

- [ ] `index.html` opens in browser
- [ ] Images display correctly
- [ ] CSS styling works
- [ ] Language switcher works (top-right globe icon)
- [ ] `git status` shows clean
- [ ] All 42 gem pages exist in `gem-pages/en/`

---

## 🆘 Quick Troubleshooting

**Images not loading?**  
→ Check paths are relative (e.g., `assets/images/...`)

**Can't push to Git?**  
→ Run `git pull origin main` first

**GitHub Pages not updating?**  
→ Wait 3-5 minutes, then hard refresh (Ctrl+Shift+R)

**Backend not working?**  
→ Read `AUREX_MYGEM_BACKEND_SETUP.md`

---

## 📖 Full Documentation

For detailed instructions, see:

- **`MIGRATION_GUIDE.md`** - Complete migration guide
- **`FILE_SYSTEM_INVENTORY.md`** - All files and structure
- **`README.md`** - Project overview

---

## 💡 Pro Tips

1. **No installation needed** - It's static HTML!
2. **Works offline** - Open `index.html` directly
3. **Auto-deploys** - Push to `main` = live on aurexgemhouse.com
4. **Image heavy** - Ensure all 130+ images copied
5. **4 languages** - EN is primary, others have `.ja.html` etc.

---

## 🌐 Live Deployment

| Setting | Value |
|---------|-------|
| **Domain** | aurexgemhouse.com |
| **Hosting** | GitHub Pages (free) |
| **Branch** | `main` |
| **SSL** | Auto-enabled |
| **Deploy Time** | 1-3 minutes after push |

---

## 📞 Need Help?

Check these files in order:

1. `QUICK_MIGRATION_REFERENCE.md` ← You are here
2. `MIGRATION_GUIDE.md` ← Detailed guide
3. `FILE_SYSTEM_INVENTORY.md` ← Complete file list
4. `README.md` ← Project overview

---

**Total Migration Time:** 5-30 minutes  
**Difficulty:** Easy (no build tools!)  
**Cost:** $0 (GitHub Pages is free)

**Happy Migrating! 💎**
