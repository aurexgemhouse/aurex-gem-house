/* Header loader — fetches the correct language header template */
(function(){
  var header=document.getElementById('site-header');
  if(!header) return;
  var lang=document.documentElement.lang||'en';
  var langMap={'en':'en','zh-CN':'zh-cn','zh-TW':'zh-tw','ja':'ja','zh-cn':'zh-cn','zh-tw':'zh-tw'};
  var suffix=langMap[lang]||'en';
  fetch('/assets/includes/header-'+suffix+'.html')
    .then(function(r){if(!r.ok) throw new Error(r.status); return r.text();})
    .then(function(html){
      header.innerHTML=html;
      initLangSwitcher();
      initContactForm();
    })
    .catch(function(){
      fetch('/assets/includes/header-en.html').then(function(r){return r.text();}).then(function(html){
        header.innerHTML=html;
        initLangSwitcher();
        initContactForm();
      }).catch(function(){});
    });
})();

/* Footer loader — fetches the correct language footer template */
(function(){
  var footer=document.getElementById('site-footer');
  if(!footer) return;
  var lang=document.documentElement.lang||'en';
  var langMap={'en':'en','zh-CN':'zh-cn','zh-TW':'zh-tw','ja':'ja','zh-cn':'zh-cn','zh-tw':'zh-tw'};
  var suffix=langMap[lang]||'en';
  fetch('/assets/includes/footer-'+suffix+'.html')
    .then(function(r){if(!r.ok) throw new Error(r.status); return r.text();})
    .then(function(html){footer.innerHTML=html;})
    .catch(function(){
      fetch('/assets/includes/footer-en.html').then(function(r){return r.text();}).then(function(html){footer.innerHTML=html;}).catch(function(){});
    });
})();

/* Language switcher — initialized after header loads */
function initLangSwitcher(){
  var map={'en':'','zh-CN':'.zh-cn','zh-TW':'.zh-tw','ja':'.ja'};
  var btns=document.querySelectorAll('.lang-switch button');
  var path=(window.location.pathname.split('/').pop()||'index.html');
  var m=path.match(/^(.*?)(\.(zh-cn|zh-tw|ja))?\.html$/i);
  var base=m?m[1]:'index';
  btns.forEach(function(b){b.addEventListener('click',function(){var suf=map[b.dataset.lang]||''; var target=base+(base==='index'&&suf===''?'':suf)+'.html'; window.location.href=target;});});
  var cur=(m&&m[3])?(m[3].toLowerCase()==='zh-cn'?'zh-CN':m[3].toLowerCase()==='zh-tw'?'zh-TW':m[3]):'en';
  btns.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===cur?'true':'false');});
}

/* Contact form handler */
function initContactForm(){
  var f=document.querySelector('.contact-form');
  if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var n=name.value.trim(), eml=email.value.trim(), ph=phone.value.trim(), msg=message.value.trim();
    if(!n||!eml||!msg){alert('Please complete the required fields.'); return;}
    var sub=encodeURIComponent('Aurex Gem House Enquiry');
    var body=encodeURIComponent('Name: '+n+'\nEmail: '+eml+'\nPhone: '+ph+'\n\nMessage:\n'+msg);
    window.location.href='mailto:info@aurexgemhouse.example?subject='+sub+'&body='+body;
  });
}

/* Run lang switcher and contact form immediately for pages that still have inline headers */
initLangSwitcher();
initContactForm();
