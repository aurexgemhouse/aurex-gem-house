/**
 * Replace inline headers and footers with placeholders, preserving UTF-8 encoding.
 */
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname);

const files = [
    'about.ja.html', 'about.zh-cn.html', 'about.zh-tw.html',
    'astrology.ja.html', 'astrology.zh-cn.html', 'astrology.zh-tw.html',
    'birthstones.ja.html', 'birthstones.zh-cn.html', 'birthstones.zh-tw.html',
    'guide.ja.html', 'guide.zh-cn.html', 'guide.zh-tw.html',
    'index.ja.html', 'index.zh-tw.html',
    'planets.ja.html', 'planets.zh-cn.html', 'planets.zh-tw.html',
    'zodiac.ja.html', 'zodiac.zh-cn.html', 'zodiac.zh-tw.html',
];

const headerPlaceholder = '  <header class="site-header" id="site-header" role="banner"></header>';
const footerPlaceholder = '  <footer class="site-footer" id="site-footer" role="contentinfo"></footer>';

for (const fname of files) {
    const fpath = path.join(base, fname);
    if (!fs.existsSync(fpath)) {
        console.log(`SKIP (not found): ${fname}`);
        continue;
    }
    
    let content = fs.readFileSync(fpath, 'utf-8');
    const original = content;
    
    // Remove BOM if present
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    
    // Replace header: match <header ...>...</header> (multiline, dotAll)
    content = content.replace(
        /<header[^>]*role="banner"[^>]*>[\s\S]*?<\/header>/,
        headerPlaceholder
    );
    
    // If header wasn't matched by role, try broader
    if (!content.includes('id="site-header"')) {
        content = content.replace(
            /<header[^>]*>[\s\S]*?<\/header>/,
            headerPlaceholder
        );
    }
    
    // Replace footer: match <footer ...>...</footer> (multiline, dotAll)
    content = content.replace(
        /<footer[^>]*role="contentinfo"[^>]*>[\s\S]*?<\/footer>/,
        footerPlaceholder
    );
    
    if (!content.includes('id="site-footer"')) {
        content = content.replace(
            /<footer[^>]*>[\s\S]*?<\/footer>/,
            footerPlaceholder
        );
    }
    
    // Write back as UTF-8 (no BOM)
    fs.writeFileSync(fpath, content, 'utf-8');
    
    const changed = content !== original;
    console.log(`${changed ? 'UPDATED' : 'NO CHANGE'}: ${fname}`);
}

console.log(`\nDone processing ${files.length} files`);
