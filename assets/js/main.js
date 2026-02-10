(function(){
  const map={'en':'','zh-CN':'.zh-cn','zh-TW':'.zh-tw','ja':'.ja'};
  const btns=document.querySelectorAll('.lang-switch button');
  const path=(window.location.pathname.split('/').pop()||'index.html');
  const m=path.match(/^(.*?)(\.(zh-cn|zh-tw|ja))?\.html$/i); const base=m?m[1]:'index';
  btns.forEach(b=>b.addEventListener('click',()=>{const suf=map[b.dataset.lang]||''; const target=base+(base==='index'&&suf===''?'':suf)+'.html'; window.location.href=target;}));
  const cur=(m&&m[3])?(m[3].toLowerCase()==='zh-cn'?'zh-CN':m[3].toLowerCase()==='zh-tw'?'zh-TW':m[3]):'en';
  btns.forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===cur?'true':'false'));
})();
(function(){const f=document.querySelector('.contact-form'); if(!f) return; f.addEventListener('submit',e=>{e.preventDefault(); const n=name.value.trim(), eml=email.value.trim(), ph=phone.value.trim(), msg=message.value.trim(); if(!n||!eml||!msg){alert('Please complete the required fields.'); return;} const sub=encodeURIComponent('Aurex Gem House Enquiry'); const body=encodeURIComponent(`Name: ${n}\nEmail: ${eml}\nPhone: ${ph}\n\nMessage:\n${msg}`); window.location.href=`mailto:info@aurexgemhouse.example?subject=${sub}&body=${body}`;});})();
