/* İnternetHarita — Reklam çerezi ve kişiselleştirme tercihi (NPA / Hibrit model)
   - Reklam akışı hiçbir zaman durdurulmaz (gelir kaybı önlenir).
   - Onay verilmediğinde veya reddedildiğinde Google'a requestNonPersonalizedAds = 1 bildirilir (yalnızca bağlamsal reklam çıkar, profil/hedefleme çerezi bırakılmaz).
   - Kullanıcı "Kabul Et" derse requestNonPersonalizedAds = 0 olur (kişiselleştirilmiş reklamlar devreye girer).
   - Seçim localStorage'da saklanır; ayarlar menüsü ve gizlilik sayfasından her an değiştirilebilir.
   - Harita, hız testi ve tüm servisler çerez tercihinden bağımsız eksiksiz çalışır. */
(function () {
  'use strict';
  var KEY = 'ih_consent_ads', TS = 'ih_consent_ts';
  var ADS_SRC = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9484247825024770';

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); localStorage.setItem(TS, String(Date.now())); } catch (e) {} }

  function ads() { return (window.adsbygoogle = window.adsbygoogle || []); }

  function applyConsent(v) {
    var a = ads();
    if (v === 'granted') {
      a.requestNonPersonalizedAds = 0;
    } else {
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
    // Önceden izinliydi ve şimdi reddedildiyse ya da tam tersiyse reklam durumunu güncellemek için sayfayı yenile
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
      '<p>Sitemizde Google reklamları gösterilir. Seçiminiz yalnızca reklamların <b>kişiselleştirilip kişiselleştirilmeyeceğini</b> belirler: ' +
      '<b>Kabul Et</b> ile ilgi alanlarınıza göre reklamlar, <b>Reddet</b> ile profil verisi kullanılmadan genel reklamlar gösterilir. ' +
      'Tercihinizi istediğiniz zaman değiştirebilirsiniz. ' +
      '<a href="gizlilik-politikasi.html#cerezler">Ayrıntılar</a></p>' +
      '<div class="ihc-row"><button type="button" id="ihcDeny">Reddet</button><button type="button" id="ihcAllow">Kabul Et</button></div>';
    document.body.appendChild(b);
    document.getElementById('ihcDeny').onclick = function () { choose('denied'); };
    document.getElementById('ihcAllow').onclick = function () { choose('granted'); };
  }

  window.ihConsentOpen = open;
  window.ihConsentState = get;

  // ===== Reklam engelleyici algılama (AdGuard, uBlock vb.) =====
  // Not: id/class adlarında "ad" geçmez; aksi halde engelleyici bu notu da gizler.
  var SN_KEY = 'ih_support_note_ts', SN_DAYS = 7;

  function snRecentlyClosed() {
    try { var t = +localStorage.getItem(SN_KEY) || 0; return (Date.now() - t) < SN_DAYS * 864e5; } catch (e) { return false; }
  }

  function detectBlocker(cb) {
    var blocked = false;
    // 1) Yem öğe: engelleyicilerin kozmetik filtreleri bu sınıfları gizler
    var bait = document.createElement('div');
    bait.className = 'adsbox ad-banner textads banner-ads';
    bait.setAttribute('aria-hidden', 'true');
    bait.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;';
    bait.innerHTML = '&nbsp;';
    document.body.appendChild(bait);
    setTimeout(function () {
      var cs = window.getComputedStyle ? getComputedStyle(bait) : null;
      if (!bait.offsetParent || bait.offsetHeight === 0 || (cs && (cs.display === 'none' || cs.visibility === 'hidden'))) blocked = true;
      bait.remove();
      cb(blocked);
    }, 2500);
  }

  function showSupportNote() {
    if (document.getElementById('ihSupportNote')) return;
    var st = document.createElement('style');
    st.textContent =
      '#ihSupportNote{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:9400;max-width:520px;margin:0 auto;' +
      'background:var(--surface,#0d1318);color:var(--text,#e2eaf4);border:1px solid var(--border2,#243444);border-left:4px solid var(--accent,#00d4ff);' +
      'border-radius:12px;padding:12px 40px 12px 14px;box-shadow:0 10px 40px rgba(0,0,0,.45);font:13px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}' +
      '#ihSupportNote p{margin:0;color:inherit}#ihSupportNote b{color:var(--accent,#00d4ff);font-weight:700}' +
      '#ihSupportNote .ihs-x{position:absolute;top:6px;right:8px;width:28px;height:28px;border:0;background:transparent;color:var(--text2,#8fa3b8);font-size:18px;cursor:pointer;border-radius:6px;display:flex;align-items:center;justify-content:center}' +
      '#ihSupportNote .ihs-x:hover{background:rgba(255,255,255,.08);color:var(--text,#e2eaf4)}' +
      'html.light #ihSupportNote{background:#ffffff !important;color:#1a2332 !important;border:1px solid #c8d3dc !important;border-left:4px solid #0077cc !important;box-shadow:0 12px 40px rgba(0,0,0,.18) !important}' +
      'html.light #ihSupportNote p{color:#1a2332 !important}' +
      'html.light #ihSupportNote b{color:#0077cc !important}' +
      'html.light #ihSupportNote .ihs-x{color:#51687d !important}' +
      'html.light #ihSupportNote .ihs-x:hover{background:rgba(0,0,0,.06) !important;color:#1a2332 !important}';
    document.head.appendChild(st);
    var n = document.createElement('div');
    n.id = 'ihSupportNote'; n.setAttribute('role', 'status');
    n.innerHTML =
      '<button type="button" class="ihs-x" aria-label="Kapat">×</button>' +
      '<p>👋 Reklam engelleyici kullandığınızı fark ettik. İnternetHarita tamamen ücretsiz ve bağımsız bir projedir; ' +
      'alan adı, sunucu ve harita masraflarını reklamlarla karşılıyoruz. ' +
      'Bu siteyi engelleyicinizin <b>izin listesine eklerseniz</b> projenin ayakta kalmasına destek olmuş olursunuz. Teşekkürler!</p>';
    document.body.appendChild(n);
    n.querySelector('.ihs-x').onclick = function () {
      try { localStorage.setItem(SN_KEY, String(Date.now())); } catch (e) {}
      n.remove();
    };
  }

  function maybeSupportNote() {
    // AdSense inceleme ve onay süresince ziyaretçilere ve botlara müdahaleci bildirim gösterme
    return;
  }

  function init() {
    var c = get();
    applyConsent(c);
    maybeSupportNote();
    // Google CMP (Avrupa GDPR/TCF) aktifse yerel onay banner'ını bastırarak çakışmayı önle
    if (typeof window.__tcfapi === 'function') return;
    if (!c) {
      open();
    }
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-consent-open]');
      if (t) { e.preventDefault(); open(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
