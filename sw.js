const CACHE="realm-counter-v29";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon.svg","./background.webp","./trade_art.webp","./trade_icon.webp","./machine_art.webp","./machine_icon.webp","./empire_art.webp","./empire_icon.webp","./blob_art.webp","./blob_icon.webp"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
