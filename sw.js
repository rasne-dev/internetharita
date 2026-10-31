const CACHE = 'iharita-v101';
const ASSETS = [
  '/',
  '/index.html',
  '/logo.svg',
  '/manifest.json',
  '/speedtest.js',
  '/consent.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/h3-js@4.1.0/dist/h3-js.umd.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.110.0/dist/umd/supabase.js',
  'https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3.4.2/dist/fp.min.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Sadece GET istekleri önbelleklenebilir
  if (e.request.method !== 'GET') return;

  const url = e.request.url;
  if (!url.startsWith('http')) return;

  const isSameOrigin = url.startsWith(self.location.origin);
  const isStaticCdn = ['unpkg.com/leaflet', 'unpkg.com/h3-js', 'cdn.jsdelivr.net/npm/@supabase', 'cdn.jsdelivr.net/npm/@fingerprintjs', 'fonts.googleapis.com', 'fonts.gstatic.com'].some(d => url.includes(d));

  // Üçüncü taraf reklam (AdSense, DoubleClick, FundingChoices), veritabanı ve hız testi isteklerine hiç dokunma
  if (!isSameOrigin && !isStaticCdn) return;
  if (url.endsWith('/ads.txt') || url.endsWith('/robots.txt') || url.endsWith('/sitemap.xml')) return;

  // HTML sayfaları (navigate) için her zaman önce ağdan güncel sürümü çek ve önbelleği güncelle, çevrimdışıysa önbelleğe düş
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(new Request(e.request.url, { cache: 'reload' })).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('/index.html')).then(res => res || Response.error()))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res && res.status === 200 && (isSameOrigin || isStaticCdn)) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || Response.error())))
  );
});
