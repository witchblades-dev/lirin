/* Shared helpers for the LIRIN calculators. Load it BEFORE the page script: <script src="/common.js"></script>
   Fix a bug here once and every calculator gets it. */

/* run f once, `ms` milliseconds after the last call */
const deb=(f,ms)=>{let t;return()=>{clearTimeout(t);t=setTimeout(f,ms)}};

/* money input: 1450, 1.45k, 2.3kk, 3.12kkk (k=thousand, kk=million, kkk=billion)
   "1,450" / "1.450" (groups of 3, no suffix, not starting with 0) = thousands separator; otherwise a comma is a decimal point.
   Returns a number, or null when the text is not a valid amount. */
const parseMoney=s=>{
  s=String(s).trim().toLowerCase().replace(/\s/g,'');
  if(/^[1-9]\d{0,2}([.,]\d{3})+$/.test(s))s=s.replace(/[.,]/g,'');
  s=s.replace(/,/g,'.');
  const m=s.match(/^(\d*\.?\d+|\d+\.)(k{0,3})$/);
  return m?+(parseFloat(m[1])*Math.pow(1000,m[2].length)).toFixed(4):null};

/* short form: 1450000 -> 1.45kk (d = decimals kept; use 6 when filling an input so nothing is lost) */
const fmt=(n,d=3)=>{
  const a=Math.abs(n);let i=a>=1e9?3:a>=1e6?2:a>=1e3?1:0,v=+(n/Math.pow(1e3,i)).toFixed(d);
  if(i<3&&Math.abs(v)>=1e3){i++;v=+(n/Math.pow(1e3,i)).toFixed(d)}      // 999999.9996 -> 1kk, not 1000k
  return v+['','k','kk','kkk'][i]};
const full=n=>Math.round(n).toLocaleString('de-DE');
const money=n=>full(n)+' ('+fmt(n)+')';

/* ===== shared by every calculator page ===== */
const $=id=>document.getElementById(id);
const ini=n=>(String(n).match(/\b[A-Z]/g)||[]).join('').slice(0,2);      // initials, shown while a picture is missing
const okNum=v=>typeof v==='number'&&Number.isFinite(v)&&v>=0;

/* pictures: /images/<name>.webp, see lirinImg() in /nav.js (an empty address is used if nav.js did not load).
   Every picture is loaded once and kept in memory, so redrawing a table never flashes initials or blanks.
   A picture that failed is forgotten after 5 s, so a short network problem does not hide it for the whole visit. */
const imgUrl=n=>typeof lirinImg==='function'?lirinImg(n):'';
const IM=new Map();
const warm=n=>{let r=IM.get(n);if(!r){r={el:new Image()};r.el.onerror=()=>setTimeout(()=>{if(IM.get(n)===r)IM.delete(n)},5000);r.el.src=imgUrl(n);IM.set(n,r)}return r};
const imgState=n=>{const e=warm(n).el;return e.complete?(e.naturalWidth?1:-1):0};   // 1 ready, 0 still loading, -1 missing
const miss=n=>imgState(n)<0?' no':'';                                                  // ' no' = show the initials
/* <img> markup: already visible when the picture is in memory, fades in only if it is still loading, empty if missing */
const pic=(n,c='')=>{const s=imgState(n);return s<0?'':`<img class="${c}${s>0?' ok':''}" src="${warm(n).el.src}" alt="" decoding="async" onload="this.classList.add('ok');this.parentNode.classList.remove('no')" onerror="imgErr(this)">`};
/* a picture that fails while loading: initials show, it is retried once after 5 s, a second failure drops it */
function imgErr(i){
  i.parentNode.classList.add('no');
  if(i.dataset.r){i.remove();return}
  i.dataset.r=1;const u=i.src;setTimeout(()=>{i.src=u+(u.includes('?')?'&':'?')+'r=1'},5000);
}
const slot=n=>`<span class="slot${miss(n)}"><i>${ini(n)}</i>${pic(n)}</span>`;

/* wrong price/number typed: red frame, message shown, and screen readers are told (aria-invalid + aria-describedby) */
let _er=0;
const flagBad=(inp,bad)=>{
  const box=inp.closest('.pin'),er=box&&box.querySelector('.er');if(!box)return;
  box.classList.toggle('bad',bad);
  if(er){er.hidden=!bad;if(!er.id)er.id='er'+(++_er);bad?inp.setAttribute('aria-describedby',er.id):inp.removeAttribute('aria-describedby')}
  bad?inp.setAttribute('aria-invalid','true'):inp.removeAttribute('aria-invalid');
};
/* true after the first real action: screen readers are not told the result on page load */
let USED=false;
['pointerdown','keydown','input'].forEach(t=>addEventListener(t,()=>{USED=true},{capture:true,once:true}));

/* saving the page state in the browser: save() = after 250 ms of quiet, flush() = right now (also on leaving the page).
   get() returns what to store; after() runs after each store (the Metin page puts the share link in the address bar). */
function persist(key,get,after){
  let t;
  const flush=()=>{clearTimeout(t);try{localStorage.setItem(key,JSON.stringify(get()))}catch(e){}if(after)try{after()}catch(e){}};
  const save=()=>{clearTimeout(t);t=setTimeout(flush,250)};
  addEventListener('pagehide',flush);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)flush()});
  return{flush,save};
}
