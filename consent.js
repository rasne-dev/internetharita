/* İnternetHarita — Reklam Çerezi ve Kişiselleştirme Tercihi
   - Kullanıcı seçimine saygı duyar.
   - Google AdSense resmi CMP (TCF v2.2) aktifse otomatik olarak Google CMP'ye devreder.
   - Sitede hiçbir gizli yem (bait) veya reklam engelleyici karşıtı kod barındırmaz (AdSense politikalarına tam uyum). */
(function () {
  'use strict';
  var KEY = 'ih_consent_ads', TS = 'ih_consent_ts';

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); localStorage.setItem(TS, String(Date.now())); } catch (e) {} }

  function ads() { return (window.adsbygoogle = window.adsbygoogle || []); }

  function applyConsent(v) {
    if (!v) return; // Henüz seçim yapılmadıysa varsayılan akışı bozma (inceleme botu uyumu)
    var a = ads();
    if (v === 'granted') {
      a.requestNonPersonalizedAds = 0;
    } else if (v === 'denied') {
      a.requestNonPersonalizedAds = 1;
    }
  }

  function injectStyle() {
    if (document.getElementById('ihConsentStyle')) return;
    var st = document.createElement('style'); st.id = 'ihConsentStyle';
    st.textContent =
      '#ihConsent{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:9500;max-width:560px;margin:0 auto;' +
      'background:var(--surface,#0d1318);color:var(--text,#e2eaf4);border:1px solid var(--border2,#243444);border-radius:12px;padding:14px 16px;' +
      'box-shadow:0 10px 40px rgba(0,0,0,.45);font:13px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}' +
      '#ihConsent p{margin:0 0 12px;color:inherit}' +
      '#ihConsent b{color:inherit;font-weight:700}' +
      '#ihConsent a{color:var(--accent,#00d4ff);font-weight:600;text-decoration:underline}' +
      '#ihConsent .ihc-row{display:flex;gap:8px;flex-wrap:wrap}' +
      '#ihConsent button{flex:1 1 140px;min-height:40px;padding:9px 14px;border-radius:8px;font:700 13px system-ui,-apple-system,sans-serif;cursor:pointer;transition:all .2s;text-align:center}' +
      '#ihcDeny{background:var(--surface2,#141c24);color:var(--text2,#8fa3b8);border:1px solid var(--border2,#243444)}' +
      '#ihcDeny:hover{background:var(--surface3,#1c2733);color:var(--text,#e2eaf4);border-color:var(--border,#3d5368)}' +
      '#ihcAllow{background:var(--accent,#00d4ff);color:#070b0f;border:1px solid var(--accent,#00d4ff);box-shadow:0 2px 10px rgba(0,212,255,.2)}' +
      '#ihcAllow:hover{filter:brightness(1.1);box-shadow:0 4px 16px rgba(0,212,255,.4)}' +
      '#ihConsent button:focus-visible{outline:2px solid var(--accent,#00d4ff);outline-offset:2px}' +
      'html.light #ihConsent{background:#ffffff !important;color:#1a2332 !important;border:1px solid #c8d3dc !important;box-shadow:0 12px 40px rgba(0,0,0,.18) !important}' +
      'html.light #ihConsent p{color:#1a2332 !important}' +
      'html.light #ihConsent b{color:#0f172a !important}' +
      'html.light #ihConsent a{color:#0077cc !important}' +
      'html.light #ihcDeny{background:#e8edf3 !important;color:#3d5368 !important;border:1px solid #c8d3dc !important}' +
      'html.light #ihcDeny:hover{background:#dde4ed !important;color:#1a2332 !important;border-color:#b5c2cc !important}' +
      'html.light #ihcAllow{background:#0077cc !important;color:#ffffff !important;border:1px solid #0077cc !important;box-shadow:0 2px 10px rgba(0,119,204,.25) !important}' +
      'html.light #ihcAllow:hover{background:#0066b3 !important;box-shadow:0 4px 16px rgba(0,119,204,.35) !important}';
    document.head.appendChild(st);
  }

  function closeBanner() { var b = document.getElementById('ihConsent'); if (b) b.remove(); }

  function choose(v) {
    var prev = get();
    set(v);
    closeBanner();
    applyConsent(v);
    if (prev && prev !== v) {
      location.reload();
    }
  }

  function open() {
    if (document.getElementById('ihConsent')) return;
    injectStyle();
    var b = document.createElement('div');
    b.id = 'ihConsent'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Çerez tercihleri');
    b.innerHTML =
      '<p>Sitemizde Google reklamları gösterilmektedir. Seçiminiz reklamların <b>kişiselleştirilip kişiselleştirilmeyeceğini</b> belirler: ' +
      '<b>Kabul Et</b> ile ilgi alanlarınıza göre reklamlar, <b>Reddet</b> ile profil verisi kullanılmadan genel reklamlar gösterilir. ' +
      'Tercihinizi dilediğiniz an değiştirebilirsiniz. ' +
      '<a href="gizlilik-politikasi.html#cerezler">Ayrıntılar</a></p>' +
      '<div class="ihc-row"><button type="button" id="ihcDeny">Reddet</button><button type="button" id="ihcAllow">Kabul Et</button></div>';
    document.body.appendChild(b);
    document.getElementById('ihcDeny').onclick = function () { choose('denied'); };
    document.getElementById('ihcAllow').onclick = function () { choose('granted'); };
    b.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeBanner(); }
    });
  }

  window.ihConsentOpen = open;
  window.ihConsentState = get;

  function init() {
    // Google resmi CMP (Avrupa GDPR/TCF v2.2) aktifse yerel onay banner'ını bastırarak çakışmayı önle
    if (typeof window.__tcfapi === 'function') return;

    var c = get();
    if (c) {
      applyConsent(c);
    } else {
      open();
    }

    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-consent-open]');
      if (t) { e.preventDefault(); open(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
