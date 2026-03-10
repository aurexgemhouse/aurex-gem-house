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
  var suffixMap={'en':'','zh-CN':'.zh-cn','zh-TW':'.zh-tw','ja':'.ja'};
  var dirMap={'en':'en','zh-CN':'cn','zh-TW':'tw','ja':'jp'};
  var btns=document.querySelectorAll('.lang-switch button');
  var fullPath=window.location.pathname;

  /* Detect gem-pages: /gem-pages/{en|cn|tw|jp}/filename.html */
  var gemMatch=fullPath.match(/\/gem-pages\/(en|cn|tw|jp)\/([^/]+\.html)$/i);

  if(gemMatch){
    /* Directory-based switching for gem-pages */
    var curDir=gemMatch[1].toLowerCase();
    var filename=gemMatch[2];
    var dirToLang={'en':'en','cn':'zh-CN','tw':'zh-TW','jp':'ja'};
    var curLang=dirToLang[curDir]||'en';

    btns.forEach(function(b){
      b.addEventListener('click',function(){
        var targetDir=dirMap[b.dataset.lang]||'en';
        window.location.href='/gem-pages/'+targetDir+'/'+filename;
      });
      b.setAttribute('aria-pressed',b.dataset.lang===curLang?'true':'false');
    });
  } else {
    /* Suffix-based switching for root-level pages */
    var path=(fullPath.split('/').pop()||'index.html');
    var m=path.match(/^(.*?)(\.(zh-cn|zh-tw|ja))?\.html$/i);
    var base=m?m[1]:'index';
    var cur=(m&&m[3])?(m[3].toLowerCase()==='zh-cn'?'zh-CN':m[3].toLowerCase()==='zh-tw'?'zh-TW':m[3]):'en';

    btns.forEach(function(b){
      b.addEventListener('click',function(){
        var suf=suffixMap[b.dataset.lang]||'';
        var target=base+(base==='index'&&suf===''?'':suf)+'.html';
        window.location.href=target;
      });
      b.setAttribute('aria-pressed',b.dataset.lang===cur?'true':'false');
    });
  }
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
