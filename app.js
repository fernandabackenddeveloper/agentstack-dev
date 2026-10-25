const W=document.getElementById('wallet').textContent.trim();
document.getElementById('copy').onclick=async e=>{try{await navigator.clipboard.writeText(W);e.target.textContent='Copied ✓'}catch{e.target.textContent='Select & copy'}setTimeout(()=>e.target.textContent='Copy',2000)};
const MAIL='agentstackdev@mail.grokbot.com';
document.getElementById('quote').addEventListener('submit',e=>{const f=e.target;if(f.getAttribute('action'))return; // Formspree endpoint set -> normal POST
e.preventDefault();const d=new FormData(f);
location.href=`mailto:${MAIL}?subject=${encodeURIComponent('Quote request: '+d.get('service'))}&body=${encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`)}`});
