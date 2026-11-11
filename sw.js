const C="cantina-v5";
const CDN=["https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js","https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js","https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js","https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(async c=>{await c.addAll(["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./logo.png"]).catch(()=>{});await Promise.all(CDN.map(u=>fetch(u,{mode:"no-cors"}).then(r=>c.put(u,r)).catch(()=>{})))}));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
 if(!(u.origin===location.origin||u.hostname==="www.gstatic.com"||u.hostname==="cdnjs.cloudflare.com"))return;
 const mesmo=u.origin===location.origin,doc=mesmo&&(r.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith(".html"));
 e.respondWith((mesmo?fetch(r.url,{cache:"no-store"}):fetch(r)).then(async res=>{
  if(res.type!=="opaque"){if(!res.ok)throw new Error("status");if(doc){const t=await res.clone().text();if(!t.includes('id="app"'))throw new Error("pagina")}}
  const cp=res.clone();caches.open(C).then(c=>c.put(r,cp)).catch(()=>{});return res}).catch(()=>caches.match(r).then(x=>x||caches.match("./index.html"))))});
