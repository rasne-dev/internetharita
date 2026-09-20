const CACHE = 'iharita-v12';
const ASSETS = [
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/h3-js@4.1.0/dist/h3-js.umd.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.110.0/dist/umd/supabase.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});

self.addEventListener('fetch', e => {
  // Sadece GET istekleri önbelleklenebilir
  if (e.request.method !== 'GET') return;

  const url = e.request.url;
  // Dinamik API'lar, hız testi veri akışları ve reklamları doğrudan ağa bırak
  if (!url.startsWith('http') ||
      url.includes('supabase.co') ||
      url.includes('nominatim') ||
      url.includes('speed.cloudflare.com') ||
      url.includes('openfpcdn.io') ||
      url.includes('googlesyndication') ||
      url.includes('doubleclick') ||
      url.includes('googleadservices') ||
      url.includes('turkiyeapi.dev')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res && res.status === 200 && ['unpkg.com', 'cdn.jsdelivr', 'basemaps.cartocdn', 'fonts.googleapis', 'fonts.gstatic'].some(d => res.url.includes(d))) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(e.request)))
  );
});
