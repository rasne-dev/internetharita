/* İnternetHarita — Reklam çerezi onayı (temkinli / açık rıza modeli)
   - Reklam yalnızca kullanıcı "Kabul Et" derse gösterilir. Reddeden veya seçim yapmayan kullanıcıya reklam isteği gönderilmez
     (adsbygoogle.pauseAdRequests=1). AdSense etiketi ise sayfa kaynağında durur (Google'ın site doğrulaması için).
   - Seçim localStorage'da saklanır; ayarlar menüsü ve gizlilik sayfasından değiştirilebilir.
   - "Reddet" ve "Kabul Et" eşit görünürlükte; seçim localStorage'da saklanır ve istenildiğinde değiştirilebilir.
   - Harita, hız testi ve diğer tüm özellikler seçimden bağımsız çalışır. */
(function () {
  'use strict';
  var KEY = 'ih_consent_ads', TS = 'ih_consent_ts';
  var ADS_SRC = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9484247825024770';

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); localStorage.setItem(TS, String(Date.now())); } catch (e) {} }

  function ads() { return (window.adsbygoogle = window.adsbygoogle || []); }

  // Seçim yapılana kadar reklam istekleri duraklatılır ve (olası bir erken istekte bile) kişiselleştirme kapalı tutulur.
  function pauseAds() { var a = ads(); a.requestNonPersonalizedAds = 1; a.pauseAdRequests = 1; }

  function startAds() {
    // Statik etiket yoksa (yedek) scripti ekle
    if (!document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]') && !window.__ihAdsInjected) {
      window.__ihAdsInjected = true;
      var s = document.createElement('script');
      s.async = true; s.src = ADS_SRC; s.crossOrigin = 'anonymous';
      document.head.appendChild(s);
    }
    var a = ads();
    a.requestNonPersonalizedAds = 0;
    a.pauseAdRequests = 0;
    window.__ihAdsLoaded = true;
  }

  function injectStyle() {
    if (document.getElementById('ihConsentStyle')) return;
    var st = document.createElement('style'); st.id = 'ihConsentStyle';
    st.textContent =
      '#ihConsent{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:9500;max-width:560px;margin:0 auto;' +
      'background:var(--bg2,#0d1318);color:var(--text,#e6edf3);border:1px solid var(--border2,var(--border,#2a3a4a));border-radius:12px;padding:14px 16px;' +
      'box-shadow:0 10px 40px rgba(0,0,0,.45);font:13px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}' +
      '#ihConsent p{margin:0 0 10px}#ihConsent a{color:var(--accent,#00d4ff)}' +
      '#ihConsent .ihc-row{display:flex;gap:8px;flex-wrap:wrap}' +
      '#ihConsent button{flex:1 1 140px;min-height:40px;padding:9px 14px;border-radius:8px;font:600 13px system-ui,sans-serif;cursor:pointer;' +
      'background:transparent;color:var(--text,#e6edf3);border:1px solid var(--accent,#00d4ff)}' +
      '#ihConsent button:hover{background:var(--accent,#00d4ff);color:var(--bg,#070b0f)}' +
      '#ihConsent button:focus-visible{outline:2px solid var(--accent,#00d4ff);outline-offset:2px}';
    document.head.appendChild(st);
  }

  function closeBanner() { var b = document.getElementById('ihConsent'); if (b) b.remove(); }

  function choose(v) {
    var prev = get();
    set(v); closeBanner();
    if (v === 'granted') { startAds(); return; }
    // Onay geri çekildi: yüklü reklamı durdurmak için sayfayı yenile (yenilenince reklam istekleri duraklı başlar)
    pauseAds();
    if (prev === 'granted' && window.__ihAdsLoaded) location.reload();
  }

  function open() {
    if (document.getElementById('ihConsent')) return;
    injectStyle();
    var b = document.createElement('div');
    b.id = 'ihConsent'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Çerez tercihleri');
    b.innerHTML =
      '<p>Siteyi ücretsiz tutmak için Google AdSense reklamları gösteriyoruz. Kabul ederseniz Google ve iş ortakları ' +
      'cihazınızda reklam çerezleri kullanabilir. Reddederseniz hiçbir reklam yüklenmez ve reklam çerezi bırakılmaz; ' +
      'harita ve tüm özellikler aynen çalışır. Tercihinizi istediğiniz zaman ayarlardan değiştirebilirsiniz. ' +
      '<a href="gizlilik-politikasi.html#cerezler">Ayrıntılar</a></p>' +
      '<div class="ihc-row"><button type="button" id="ihcDeny">Reddet</button><button type="button" id="ihcAllow">Kabul Et</button></div>';
    document.body.appendChild(b);
    document.getElementById('ihcDeny').onclick = function () { choose('denied'); };
    document.getElementById('ihcAllow').onclick = function () { choose('granted'); };
  }

  window.ihConsentOpen = open;
  window.ihConsentState = get;

  function init() {
    var c = get();
    if (c === 'granted') startAds();
    else { pauseAds(); if (c !== 'denied') open(); }
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-consent-open]');
      if (t) { e.preventDefault(); open(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
