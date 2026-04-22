# 🗺 İnternetHarita

**Türkiye'nin kullanıcı kaynaklı internet altyapı ve memnuniyet haritası.**

> Hangi bölgede hangi ISS daha hızlı? Nerede fiber var, nerede VDSL? Gerçek kullanıcılar ne düşünüyor?

🔗 **Canlı Site:** [rasne-dev.github.io/internetharita](https://rasne-dev.github.io/internetharita)

---

## ✨ Özellikler

- 🗺 **H3 Hexagon Harita** — Bölge bazlı hız ve memnuniyet görselleştirmesi (bireysel pinler GÖRÜNMEZ)
- ⚡ **5 Kademeli Hız Renk Skalası** — <25, 25–100, 100–200, 200–500, 500+ Mbps (hexagonlar her zaman hıza göre renklendirilir)
- 😊 **Memnuniyet Modu** — Renk modunu hız / memnuniyet arasında geçiş yaparak haritayı görüntüle
- 📍 **Veri Ekleme** — Otomatik GPS konum, Nominatim reverse geocoding ile il/ilçe/mahalle otomatik doldurma
- 🔒 **Gizlilik** — Kullanıcı konumu ~150m alan içinde rastgele kaydırılır; bireysel veriler haritada görünmez
- 🚩 **Topluluk Moderasyonu** — Şüpheli veriler bildirilebilir; 3 şikayette otomatik gizleme
- 📊 **İstatistikler** — ISS sıralaması, en hızlı ilçeler, bağlantı türü dağılımı, bölgesel analiz

### 🔧 Moderatör Özellikleri (Yeni)

- **Pin Düzenleme** — Moderatörler pinlere tıklayarak tüm alanları (ISS, hız, puan, görünürlük) düzenleyebilir
- **Moderatör Notu** — Her pine özel not eklenebilir; bu notlar genel kullanıcılar tarafından da görülür
- **Kullanıcı Yorumları** — Kullanıcının girdiği yorumlar moderatör panelinde ve harita popup'larında ayrıca gösterilir
- **Detaylı Zaman** — Tüm pinlerin giriliş tarihi ve saati moderatör görünümünde gösterilir
- **Haritadan Düzenleme** — Zoom ≥10'da haritadaki mod pinlerine tıklayınca da düzenleme yapılabilir

---

## 🛠 Teknoloji

| Katman | Teknoloji |
|--------|-----------|
| Frontend | Vanilla HTML/CSS/JS |
| Harita | Leaflet.js + OpenStreetMap |
| Hexagon | Uber H3 (Resolution 3–7, zoom bazlı) |
| Geocoding | Nominatim (OpenStreetMap) |
| Veritabanı | Supabase (PostgreSQL) |
| Auth | Supabase Authentication |
| Hosting | GitHub Pages |

---

# 🗺 İnternetHarita — English

**A community-sourced internet infrastructure and satisfaction map of Turkey.**

> Which ISP is fastest in your area? Where is fiber available, where is VDSL? What do real users say?

🔗 **Live Site:** [rasne-dev.github.io/internetharita](https://rasne-dev.github.io/internetharita)

---

## ✨ Features

- 🗺 **H3 Hexagon Map** — Area-based speed and satisfaction visualization (individual pins are INVISIBLE to public)
- ⚡ **5-Tier Speed Color Scale** — <25, 25–100, 100–200, 200–500, 500+ Mbps (hexagons always colored by speed)
- 😊 **Satisfaction Mode** — Toggle between speed and satisfaction color modes on the map
- 📍 **Data Submission** — Auto GPS location with Nominatim reverse geocoding for province/district/neighborhood
- 🔒 **Privacy** — User location is randomly offset within ~150m; individual records never appear on the map
- 🚩 **Community Moderation** — Suspicious data can be reported; auto-hidden after 3 complaints
- 📊 **Statistics** — ISP satisfaction ranking, fastest districts, connection type breakdown, regional analysis

### 🔧 Moderator Features (New)

- **Pin Editing** — Moderators can click any pin to edit all fields (ISP, speed, score, visibility)
- **Moderator Notes** — Custom notes can be added to any pin; notes are visible to all users
- **User Comments** — User-submitted comments are displayed separately in the moderator panel and map popups
- **Detailed Timestamps** — Full date + time shown for all pins in moderator view
- **Map-based Editing** — At zoom ≥10, mod pins on the map also show an Edit button in the popup

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JS |
| Map | Leaflet.js + OpenStreetMap |
| Hexagon | Uber H3 (Resolution 3–7, zoom-based) |
| Geocoding | Nominatim (OpenStreetMap) |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Authentication |
| Hosting | GitHub Pages |