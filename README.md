# 🗺 İnternetHarita

**Türkiye'nin kullanıcı kaynaklı internet hız ve memnuniyet haritası.**

🔗 **Canlı Site:**[rasne-dev.github.io/internetharita](https://rasne-dev.github.io/internetharita)

---

## Ne işe yarar?

İnternetHarita, Türkiye genelinde gerçek kullanıcıların kendi internet bağlantılarını ölçüp paylaştığı açık kaynaklı bir topluluk haritasıdır. Taşınmadan önce yeni semtinizdeki internet kalitesini öğrenebilir, İSS'leri (İnternet Servis Sağlayıcıları) karşılaştırabilir ya da bulunduğunuz bölgedeki altyapı hızlarını şeffaf bir şekilde görebilirsiniz.

---

## Öne Çıkan Özellikler

*   🛡️ **Güvenilir Veri & Spam Koruması:** Veritabanı seviyesinde çalışan akıllı algoritmalar sayesinde spam saldırıları ve gerçek dışı hız testleri (örn. 10.000 Mbps) anında engellenir.
*   🔧 **Aktif Moderasyon Sistemi:** Hatalı girilen veriler topluluk tarafından bildirilebilir; yetkili moderatörler gelişmiş mod paneli üzerinden bu verileri düzenleyebilir, gizleyebilir veya toplu olarak silebilir.
*   📊 **Detaylı İstatistikler:** Türkiye'nin coğrafi bölgeleri arası karşılaştırmalar, İSS sıralamaları ve en hızlı ilçeler gibi veriler gerçek zamanlı derlenir.

---

## Nasıl kullanılır?

### 🗺 Harita
Hexagon (altıgen) bölgelere tıklayarak o bölgenin ortalama hız ve memnuniyet bilgisine, İSS dağılımına ulaşabilirsiniz. Renk skalası:

| Renk | Hız |
|------|-----|
| 🟣 Mor | 500+ Mbps |
| 🔵 Mavi | 200 – 500 Mbps |
| 🟢 Yeşil | 100 – 200 Mbps |
| 🟠 Turuncu | 25 – 100 Mbps |
| 🔴 Kırmızı | 25 Mbps altı |

**Hız / Memnuniyet** modunu sol panelden değiştirebilirsiniz.

### 📍 Veri Ekle
Kendi internet ölçümünüzü paylaşmak için sağ üstteki **+ Veri Ekle** butonuna tıklayın:
1. Konumunuzu haritadan seçin veya GPS ile otomatik bulun.
2. İSS, altyapı türü ve speedtest sonucunuzu girin.
3. 1–10 arası memnuniyet puanı verin ve gönderin. *(Spam koruması gereği kısa süre içinde çok fazla veri eklenmesi engellenmiştir.)*

### 🚩 Yanlış Veri Bildirme
Bir bölgede hatalı veya sahte veri olduğunu düşünüyorsanız hexagona tıklayıp **"Bu Bölgeyi Bildir"** butonunu kullanabilirsiniz. Moderatörler bildirimi inceleyip gerekli düzeltmeyi yapar.

---

## Gizlilik & Güvenlik

Sistem, kullanıcı gizliliğini en üst düzeyde tutacak şekilde tasarlanmıştır:
- 📍 **Konum Gizliliği:** Haritada işaretlediğiniz konum ~150 metre içinde rastgele kaydırılır. Bireysel ölçümler haritada doğrudan gösterilmez, sadece bölge ortalaması alınır.
- 🔒 **IP Koruması:** IP adresiniz hiçbir zaman veritabanına açık (raw) olarak kaydedilmez. Güvenlik ve rate-limit kontrolleri için anında geri döndürülemez kriptolojik bir değere (Hash) dönüştürülür.
- 👤 **Kişisel Veri:** İsim, e-posta veya tam ev adresi gibi kişisel veriler toplanmaz.

---

## Katkıda Bulunma

Kendi ölçümünüzü ekleyerek haritaya katkıda bulunabilirsiniz. Ne kadar çok kullanıcı veri eklerse, harita o kadar doğru ve kapsayıcı olur!

---

---

# 🗺 İnternetHarita — English

**A robust, community-sourced internet speed and satisfaction map of Turkey.**

🔗 **Live Site:** [rasne-dev.github.io/internetharita](https://rasne-dev.github.io/internetharita)

---

## What is it?

İnternetHarita is a community-driven map where real users across Turkey measure and share their internet connection capabilities. You can check internet quality before moving to a new neighborhood, compare ISPs, or view average speeds based on real user experiences.

---

## Key Features

*   🛡️ **Reliable Data & Anti-Spam:** Database-level security and smart algorithms prevent spam attacks and unrealistic speed entries (e.g., 10,000+ Mbps).
*   🔧 **Active Moderation System:** Community members can report inaccurate data. Authorized moderators use an advanced panel to verify, edit, hide, or bulk-delete malicious entries.
*   📊 **Comprehensive Statistics:** Real-time generation of ISP rankings, fastest districts, and connection type breakdowns.

---

## How to use

### 🗺 Map
Click on hexagon regions to see average speed, satisfaction score, and ISP breakdown for that area. Color scale:

| Color | Speed |
|-------|-------|
| 🟣 Purple | 500+ Mbps |
| 🔵 Blue | 200 – 500 Mbps |
| 🟢 Green | 100 – 200 Mbps |
| 🟠 Orange | 25 – 100 Mbps |
| 🔴 Red | Below 25 Mbps |

Toggle between **Speed / Satisfaction** modes in the left sidebar.

### 📍 Add Data
Click the **+ Veri Ekle (Add Data)** button in the top right to share your measurement:
1. Select your location on the map or use GPS.
2. Enter your ISP, connection type, and speedtest result.
3. Give a satisfaction score from 1–10 and submit. *(Rate limits apply to prevent spamming).*

### 🚩 Report Incorrect Data
If you think a region contains inaccurate or fake data, click the hexagon and use the **"Bu Bölgeyi Bildir" (Report)** button. Moderators will review the reported area and fix anomalies.

---

## Privacy & Security

The system is designed with a privacy-first approach:
- 📍 **Location Obfuscation:** Your chosen location is randomly offset by ~150 meters. Individual pins are never shown directly to users—only regional hexagon averages.
- 🔒 **IP Protection:** Your IP address is never stored in plain text. It is instantly transformed into an irreversible cryptographic hash used solely for rate-limiting and anti-spam measures.
- 👤 **No PII:** No Personal Identifiable Information (name, email, exact address) is collected.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML / CSS / JS |
| Map Engine | Leaflet.js + OpenStreetMap |
| Clustering | Uber H3 (Resolution 3–7, dynamic zoom-based) |
| Geocoding | Nominatim (OpenStreetMap) |
| Database | Supabase (PostgreSQL, RLS Policies, Triggers) |
| Auth | Supabase Authentication (For Moderators) |
| Hosting | GitHub Pages |