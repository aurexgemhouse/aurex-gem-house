// Language switcher: navigate to static language pages
(function(){
  const map = { 'en':'', 'zh-CN':'.zh-cn', 'zh-TW':'.zh-tw', 'ja':'.ja' };
  const btns = document.querySelectorAll('.lang-switch button');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const m = path.match(/^(.*?)(\.(zh-cn|zh-tw|ja))?\.html$/i);
  const base = m ? m[1] : 'index';
  btns.forEach(b=>{
    b.addEventListener('click',()=>{
      const suffix = map[b.dataset.lang] || '';
      const target = base + (base==='index'&&suffix===''? '': suffix) + '.html';
      window.location.href = target;
    });
  });
  // set pressed state
  const cur = (m && m[3]) ? (m[3].toLowerCase()==='zh-cn'?'zh-CN':m[3].toLowerCase()==='zh-tw'?'zh-TW':m[3]) : 'en';
  btns.forEach(b=> b.setAttribute('aria-pressed', b.dataset.lang===cur ? 'true':'false'));
})();

// Contact form -> mailto (no backend)
(function(){
  const form = document.querySelector('.contact-form'); if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){ alert('Please complete the required fields.'); return; }
    const subject = encodeURIComponent('Aurex Gem House Enquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:info@aurexgemhouse.example?subject=${subject}&body=${body}`;
  });
})();
