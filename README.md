# 🗺 İnternetHarita

**Türkiye'nin bağımsız, kullanıcı kaynaklı internet hız ve altyapı memnuniyet haritası.**

🔗 **Canlı Site:** [https://internetharita.com.tr](https://internetharita.com.tr)  
📦 **Açık Kaynak Kod:** [github.com/rasne-dev/internetharita](https://github.com/rasne-dev/internetharita)

---

## Ne işe yarar?

İnternetHarita, Türkiye genelinde gerçek kullanıcıların ev veya iş yerlerindeki internet bağlantılarını test edip paylaştığı açık kaynaklı, bağımsız bir topluluk haritasıdır. 

Taşınmadan önce yeni mahallenizdeki gerçek internet hızlarını ve fiber oranını öğrenebilir, servis sağlayıcıları (Türk Telekom, Superonline, TurkNet, Vodafone, Türksat Kablonet vb.) tarafsızca karşılaştırabilir ya da altyapı sorunlarınızı harita üzerinde görünür kılabilirsiniz.

---

## 🚀 Öne Çıkan Özellikler

* ⚡ **Dahili Doğrulanmış Hız Testi:** Harita içerisinden tek tıkla indirme (download), yükleme (upload) ve gecikme (ping) testi yapabilirsiniz. Test sonuçları `⚡ Doğrulandı` rozetiyle kaydedilerek verilerin güvenilirliği artırılır.
* 📶 **Wi-Fi Odaklı Doğru Ölçüm:** Mobil verinin sabit internet ölçümlerini yanıltmasını önlemek için kullanıcılar ev/iş yeri Wi-Fi bağlantısıyla teste yönlendirilir.
* 📱 **PWA & Mobil Uyum (Ana Ekrana Ekle):** Progressive Web App (PWA) altyapısı sayesinde mobil tarayıcılardan tek tıkla ana ekrana uygulama gibi eklenebilir, tam ekran uygulama deneyimi sunar.
* 🏷️ **Hazır Deneyim Etiketleri:** Yalnızca hız rakamları değil; *"Akşam saatlerinde hız düşüyor"*, *"Oyunlarda ping yüksek"*, *"Kesinti çok sık"*, *"Fiyat/Performans iyi"*, *"Müşteri hizmetleri ilgisiz"* gibi hazır etiketlerle gerçek kullanıcı deneyiminizi aktarabilirsiniz.
* 🚫 **"Altyapı Yok" Bildirimi:** İnternet altyapısı bulunmayan bölgeler için bildirim bırakabilir, mahallenizdeki sayısal uçurumu ve altyapı talebini harita üzerinde belgeleyebilirsiniz.
* ✏️ **Ölçümlerinizi Yönetin (Düzenle & Sil):** Haritaya eklediğiniz ölçümler kendi tarayıcınızda özel olarak işaretlenir (`📍 Sizin Ölçümünüz`). İstediğiniz zaman etiketi güncelleyebilir veya ölçümünüzü haritadan tamamen silebilirsiniz (*Unutulma Hakkı*).
* 📊 **Detaylı İstatistikler & Analiz:** Türkiye geneli ortalama hızlar, bölge karşılaştırmaları (Marmara, Ege, İç Anadolu vb.), fiber altyapı oranları ve İSS hız/memnuniyet sıralamaları gerçek zamanlı derlenir.
* 🔍 **Dinamik H3 Altıgen Görünümü:** Haritada yakınlaştıkça bölgeler mahalle ve sokak seviyesine kadar detaylanan H3 altıgenleriyle gösterilir; hem genel özeti hem de mikro-lokal verileri inceleyebilirsiniz.
* 👁️ **Erişilebilirlik & Çevrimdışı Önbellek:** Renk körü modu desteği sayesinde veri haritaları herkes için erişilebilirdir. Ayrıca yerel önbellek desteğiyle internetiniz kopsa bile daha önce yüklenen haritayı inceleyebilirsiniz.

---

## 🗺 Nasıl Kullanılır?

### 1. Haritayı İnceleyin
Haritadaki altıgenlere veya pinlere tıklayarak o bölgenin ortalama hızını, altyapı türünü (Fiber, VDSL, ADSL), memnuniyet puanını ve kullanıcı etiketlerini inceleyin. Sol panelden harita modunu **Hız**, **Memnuniyet** veya **Altyapı** olarak değiştirebilirsiniz.

| Renk | Hız Aralığı |
|------|-------------|
| 🟣 Mor | 500+ Mbps |
| 🔵 Mavi | 200 – 500 Mbps |
| 🟢 Yeşil | 100 – 200 Mbps |
| 🟠 Turuncu | 25 – 100 Mbps |
| 🔴 Kırmızı | 25 Mbps ve altı / Altyapı Yok |

### 2. Kendi Ölçümünüzü Ekleyin
1. Ev veya iş yeri **Wi-Fi** ağınıza bağlı olduğunuzdan emin olun.
2. Sağ üstteki **+ Veri Ekle** butonuna tıklayın.
3. Haritadan konumunuzu seçin veya GPS butonuna basarak konumunuzu otomatik belirleyin.
4. Dahili hız testini başlatın ya da harici hız testi sonucunuzu girin.
5. İSS'nizi, altyapı tipinizi ve 1–10 arası memnuniyet puanınızı seçin.
6. Varsa durumunuza uygun **hazır etiketleri** işaretleyip gönderin.

### 3. Şüpheli Veri Bildirimi (Moderasyon)
Haritada tutarsız veya sahte olduğunu düşündüğünüz bir kayıt görürseniz, bölge detayındaki **"Bu Bölgeyi Bildir"** seçeneğiyle gönüllü moderasyon ekibimize bildirebilirsiniz.

---

## 🔒 Gizlilik, KVKK ve Güvenlik İlkeleri

İnternetHarita, kullanıcı mahremiyetini ve şeffaflığı temel prensip olarak benimser:

1. 📍 **Konum Şaşırtma (~100m Fuzzing):** Haritada seçtiğiniz konum koordinatları veritabanına kaydedilmeden önce algoritmik olarak rastgele ~100 metre kaydırılır. Moderatörler dahil hiç kimse kesin ev adresinize veya kapı numaranıza ulaşamaz.
2. 👤 **Sıfır Kişisel Veri:** İsim, soyisim, telefon numarası, e-posta adresi veya T.C. kimlik numarası gibi hiçbir kişisel kimlik verisi (PII) istenmez, toplanmaz ve saklanmaz.
3. 🛡️ **Anti-Spam, Hız Sınırlaması ve Yerel Hafıza (LocalStorage):** Kendi eklediğiniz ölçümleri tanıma, düzenleme ve silme işlemleri doğrudan tarayıcınızın yerel hafızasında (`localStorage`) saklanan pin kimlikleriyle gerçekleştirilir. Sahte veri girişini ve otomatik bot saldırılarını engellemek için ise formda görünmez tuzak alanları (honeypot), IP karması ve arka planda çalışan anonim bir teknik güvenlik belirteci (biyometrik/fiziksel veri içermez, sadece spam hız sınırını denetler) kullanılır. Bu teknik güvenlik verileri **asla açık API üzerinden sunulmaz veya üçüncü taraflarla paylaşılmaz**.
4. 🗑️ **Unutulma Hakkı:** Kendi eklediğiniz ölçümleri dilediğiniz an haritadan tek tıkla silebilirsiniz.
5. 🍪 **Çerezler ve Reklam İlkeleri:** Platformun alan adı ve sunucu işletim masraflarını karşılamak amacıyla standart üçüncü taraf reklam ortakları (Google AdSense) çerezlerinden faydalanılabilir. Kişisel kimlik verileriniz asla reklam verenlerle paylaşılmaz.

---

## ⚠️ Sorumluluk Reddi & Üçüncü Taraf Servisler (Disclaimer)

İnternetHarita tamamen bağımsız ve açık kaynaklı bir topluluk projesidir.
* **Üçüncü Taraf Altyapı Sağlayıcıları ve Sorumluluk Sınırı:** Platformumuz; veritabanı barındırma için **Supabase Inc.**, hız testi sinyalleri için **Cloudflare Inc.** ve harita görselleştirmesi için **OpenStreetMap Foundation** küresel bulut altyapılarından faydalanmaktadır. Bahsi geçen üçüncü taraf servislerin teknik bakım, kesinti, siber saldırı veya altyapı aksaklıklarından kaynaklanabilecek veri kayıplarından, erişim problemlerinden veya dolaylı zararlardan platform geliştiricileri hukuken ve cezai olarak sorumlu tutulamaz.
* Haritada sunulan tüm veriler kullanıcıların sağladığı beyan ve testlere dayanmaktadır; verilerin mutlak doğruluğu hukuken garanti edilemez.
* Sitedeki hız ve altyapı verileri resmi veya bağlayıcı nitelik taşımaz; ticari veya yasal uyuşmazlıklarda delil teşkil etmez.
* İletişim & Geri Bildirim: `rasne.app@gmail.com`

---
---

# 🗺 İnternetHarita — English

**A community-driven, crowdsourced internet speed and infrastructure satisfaction map of Turkey.**

🔗 **Live Site:** [https://internetharita.com.tr](https://internetharita.com.tr)  
📦 **Source Code:** [github.com/rasne-dev/internetharita](https://github.com/rasne-dev/internetharita)

---

## What is it?

İnternetHarita is an open-source, community-driven platform where users across Turkey test and map their real-world internet connection speeds, latency, and provider experiences.

Before moving to a new neighborhood, you can verify genuine connection speeds, check fiber optic coverage, compare internet service providers (ISPs), or highlight lack of broadband infrastructure in your area.

---

## 🚀 Key Features

* ⚡ **Integrated Speed Test:** Perform download, upload, and ping tests directly on the map. Results measured on-site earn a `⚡ Verified` badge.
* 📶 **Wi-Fi Focused Accurate Measurements:** Directs users to run tests via home/office Wi-Fi networks to prevent cellular data from skewing broadband statistics.
* 📱 **PWA & Mobile Install Ready:** Progressive Web App support allows instant "Add to Home Screen" installation on mobile devices for an app-like experience.
* 🏷️ **Experience Tags:** Share qualitative feedback with single-click preset tags (e.g., *"Speed drops during evenings"*, *"High ping in games"*, *"Frequent disconnections"*, *"Good value for price"*).
* 🚫 **"No Infrastructure" Reporting:** Users without broadband access can flag their location, highlighting digital divide zones and underserved neighborhoods.
* ✏️ **Manage Your Measurements:** Pins created on your device are labeled as `📍 Your Measurement`. You can update tags or delete your measurement at any time (*Right to be Forgotten*).
* 📊 **Live Analytics & Rankings:** National averages, regional speed differences, fiber penetration rates, and ISP leaderboards calculated dynamically.
* 🔍 **H3 Hexagonal Aggregation:** Zoom into street and district level resolution powered by dynamic Uber H3 spatial indexing.
* 👁️ **Accessibility & Offline Cache:** High-contrast colorblind mode support and local caching that keeps previously loaded map tiles and points accessible during network outages.

---

## 🔒 Privacy & Data Protection (GDPR & KVKK Compliant)

1. 📍 **Location Fuzzing (~100m):** Pinned coordinates are mathematically fuzzed by approximately 100 meters before being saved. Exact door/building addresses are never stored.
2. 👤 **Zero Personal Data:** No names, emails, phone numbers, or user accounts are required or collected.
3. 🛡️ **Anti-Spam, Rate Limiting & Local Storage:** Measurements you add are recognized and managed directly through anonymous pin IDs stored in your browser's local memory (`localStorage`), allowing you to edit or delete your pins without an account. To prevent automated bot attacks and malicious spam, form honeypots, rate limiting, and anonymous technical security tokens (strictly non-biometric) are utilized. These technical identifiers are **never exposed to public APIs or third parties**.
4. 🗑️ **Right to be Forgotten:** You can edit or permanently delete your submitted pins directly from the map interface.
5. 🍪 **Cookies & Advertising Transparency:** Standard advertising cookies (e.g., Google AdSense) may be used to help support server and infrastructure costs. Personal identification information is never shared with advertisers.
6. ⚠️ **Third-Party Infrastructure Disclaimer:** The platform utilizes Supabase Inc., Cloudflare Inc., and OpenStreetMap Foundation services. Developers shall not be held liable for third-party service outages or network failures. Contact: `rasne.app@gmail.com`.