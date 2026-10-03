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
      '<p>Sitemizi ücretsiz sunabilmek amacıyla reklamlar gösteriyoruz. ' +
      '<b>Kabul Et</b> seçeneğiyle ilgi alanlarınıza uygun kişiselleştirilmiş reklamları onaylayabilir, ' +
      '<b>Reddet</b> ile profil verileriniz işlenmeksizin yalnızca kişiselleştirilmemiş reklamları tercih edebilirsiniz. ' +
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
    applyConsent(c);
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
