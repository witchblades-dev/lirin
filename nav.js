/* LIRIN — shared sidebar.
   Every page has <nav id="sidebar"></nav> followed by <script src="/nav.js"></script>.
   To add a page or change the order, edit only the NAV list below. */
(function(){
  const NAV=[
    {href:'/',                 icon:'home',    label:'Home'},
    {href:'/upgrade-cost/',    icon:'upgrade', label:'Upgrade Cost'},
    {soon:1,                    icon:'special', label:'Special Upgrade Cost'},
    {href:'/sash/',            icon:'sash',    label:'Sash Absorption'},
    {soon:1,                    icon:'metin',   label:'Metin Simulator'},
    {href:'/sample-todo/',     icon:'todo',    label:'Sample Todo'},
    {href:'/coin-calculator/', icon:'coin',    label:'Coin Calculator'},
    {href:'/gaya-calculator/', icon:'gaya',    label:'Gaya Calculator'}
  ];
  const ICONS={
    home:'<path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/>',
    upgrade:'<path d="M12 3v18M5 10l7-7 7 7M5 15h14"/>',
    special:'<path d="m12 3 2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3Z"/><path d="M19 16v5M16.5 18.5h5"/>',
    sash:'<path d="M4 7c4-3 12-3 16 0l-2 10c-4 3-8 3-12 0L4 7Z"/><path d="M7 9c3 2 7 2 10 0M8 14c2 1 6 1 8 0"/>',
    metin:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 7.8 7.5 4.4 7.5-4.4M12 12.2V21"/>',
    todo:'<path d="M8 5h12M8 12h12M8 19h12"/><path d="m3 5 1 1 2-2M3 12l1 1 2-2M3 19l1 1 2-2"/>',
    coin:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5c-.7-.8-1.8-1.2-3.2-1.2-1.6 0-2.7.8-2.7 2 0 3.2 6.1 1.2 6.1 4.5 0 1.4-1.3 2.4-3.2 2.4-1.5 0-2.8-.5-3.7-1.5M12 5.5v13"/>',
    gaya:'<path d="M6 4h12l4 6-10 11L2 10l4-6Z"/><path d="M2 10h20M9 4l3 6 3-6M12 10v11"/>'
  };
  let here=location.pathname.replace(/index\.html$/,'');
  if(!here.endsWith('/'))here+='/';
  const item=n=>{
    const svg='<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+ICONS[n.icon]+'</svg>';
    if(n.soon)return'<span class="nav-item is-soon" aria-disabled="true">'+svg+n.label+'<span class="badge">Soon</span></span>';
    const on=n.href===here;
    return'<a class="nav-item'+(on?' is-active':'')+'" href="'+n.href+'"'+(on?' aria-current="page"':'')+'>'+svg+n.label+'</a>';
  };
  const el=document.getElementById('sidebar');
  if(el)el.outerHTML='<nav class="sidebar" aria-label="Main navigation"><p class="nav-label">Lirin Tools</p>'+NAV.map(item).join('')+'</nav>';
})();
