# 🗺 İnternetHarita

**Türkiye'nin kullanıcı kaynaklı internet hız ve memnuniyet haritası.**

🔗 **Canlı Site:** [rasne-dev.github.io/internetharita](https://rasne-dev.github.io/internetharita)

---

## Ne işe yarar?

İnternetHarita, Türkiye genelinde gerçek kullanıcıların kendi internet bağlantılarını ölçüp paylaştığı bir topluluk haritasıdır. Taşınmadan önce yeni semtinizdeki internet kalitesini öğrenebilir, ISS'leri karşılaştırabilir ya da bulunduğunuz bölgedeki hızları görebilirsiniz.

---

## Nasıl kullanılır?

### 🗺 Harita
Hexagon bölgelere tıklayarak o bölgenin ortalama hız ve memnuniyet bilgisine, ISS dağılımına ulaşabilirsiniz. Renk skalası:

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
1. Konumunuzu haritadan seçin veya GPS ile otomatik bulun
2. ISS, bağlantı türü ve speedtest sonucunuzu girin
3. 1–10 arası memnuniyet puanı verin, gönderin

> ⚠️ Konumunuz ~150 metre içinde gizlenir, tam adresiniz hiçbir zaman görünmez.

### 🚩 Yanlış Veri Bildirme
Bir bölgede hatalı veya sahte veri olduğunu düşünüyorsanız hexagona tıklayıp **"Bu Bölgeyi Bildir"** butonunu kullanabilirsiniz. Moderatörler bildirimi inceleyip gerekli düzeltmeyi yapar.

### 🌍 Bölgeler
Türkiye'nin 7 coğrafi bölgesinin ortalama hız ve memnuniyet karşılaştırması.

### 📊 İstatistikler
ISS memnuniyet sıralaması, en hızlı ilçeler ve bağlantı türü dağılımı.

---

## Gizlilik

- Konum bilginiz ~150m içinde rastgele kaydırılır
- Bireysel pinler haritada görünmez, sadece bölge ortalaması gösterilir
- Hiçbir kişisel bilgi toplanmaz

---

## Katkı

Veri ekleyerek katkıda bulunabilirsiniz. Ne kadar çok kullanıcı veri eklerse harita o kadar doğru olur.

---

---

# 🗺 İnternetHarita — English

**A community-sourced internet speed and satisfaction map of Turkey.**

🔗 **Live Site:** [rasne-dev.github.io/internetharita](https://rasne-dev.github.io/internetharita)

---

## What is it?

İnternetHarita is a community map where real users across Turkey measure and share their internet connection data. You can check internet quality before moving to a new neighborhood, compare ISPs, or view average speeds in your area.

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

Toggle between **Speed / Satisfaction** modes in the left panel.

### 📍 Add Data
Click the **+ Veri Ekle** button in the top right to share your measurement:
1. Select your location on the map or use GPS
2. Enter your ISP, connection type and speedtest result
3. Give a satisfaction score from 1–10 and submit

> ⚠️ Your location is offset within ~150m. Your exact address is never shown.

### 🚩 Report Incorrect Data
If you think a region contains inaccurate or fake data, click the hexagon and use the **"Bu Bölgeyi Bildir"** (Report this region) button. Moderators will review and fix it.

### 🌍 Regions
Compare average speed and satisfaction across Turkey's 7 geographical regions.

### 📊 Statistics
ISP satisfaction ranking, fastest districts, and connection type breakdown.

---

## Privacy

- Your location is randomly offset within ~150m
- Individual pins are never shown on the map — only regional averages
- No personal data is collected

---

## Contributing

You can contribute simply by adding your own data. The more users share, the more accurate the map becomes.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JS |
| Map | Leaflet.js + OpenStreetMap |
| Hexagon | Uber H3 (Resolution 3–7, zoom-based) |
| Geocoding | Nominatim (OpenStreetMap) |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Authentication |
| Hosting | GitHub Pages |
