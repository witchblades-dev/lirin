/* Shared helpers for the LIRIN calculators. Load it BEFORE the page script: <script src="/common.js"></script>
   Fix a bug here once and every calculator gets it. */

/* run f once, `ms` milliseconds after the last call */
const deb=(f,ms)=>{let t;return()=>{clearTimeout(t);t=setTimeout(f,ms)}};

/* money input: 1450, 1.45k, 2.3kk, 3.12kkk (k=thousand, kk=million, kkk=billion)
   "1,450" / "1.450" (groups of 3, no suffix) = thousands separator; otherwise a comma is a decimal point.
   Returns a number, or null when the text is not a valid amount. */
const parseMoney=s=>{
  s=String(s).trim().toLowerCase().replace(/\s/g,'');
  if(/^\d{1,3}([.,]\d{3})+$/.test(s))s=s.replace(/[.,]/g,'');
  s=s.replace(/,/g,'.');
  const m=s.match(/^(\d*\.?\d+|\d+\.)(k{0,3})$/);
  return m?+(parseFloat(m[1])*Math.pow(1000,m[2].length)).toFixed(4):null};

/* short form: 1450000 -> 1.45kk (d = decimals kept; use 6 when filling an input so nothing is lost) */
const fmt=(n,d=3)=>{const a=Math.abs(n),u=a>=1e9?[1e9,'kkk']:a>=1e6?[1e6,'kk']:a>=1e3?[1e3,'k']:[1,''];return +(n/u[0]).toFixed(d)+u[1]};
const full=n=>Math.round(n).toLocaleString('de-DE');
const money=n=>full(n)+' ('+fmt(n)+')';
