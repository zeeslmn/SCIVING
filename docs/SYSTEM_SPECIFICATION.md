# System Specification & Architecture Document
## Project: SCIVING - Digital Wedding Invitation Platform

---

### 1. Arsitektur Sistem (System Architecture)

Sistem dibangun menggunakan arsitektur **Jamstack / Modern Full-stack React** dengan model *Server-Side Rendering (SSR)* dan *Static Site Generation (SSG)* yang dioptimalkan untuk performa tinggi pada perangkat seluler.

```mermaid
graph TD
    subgraph Client Tier [Klien / Pengguna]
        GuestMobile[Tamu Undangan - Browser Mobile]
        CoupleDesktop[Calon Pengantin - Browser Desktop]
    end

    subgraph CDN & Edge Tier [CDN / Edge Network]
        CloudflareEdge[Vercel Edge Network / Cloudflare CDN]
        OGImageScraper[WhatsApp / Social Media Bot Link Scraper]
    end

    subgraph Application Tier [Next.js App Router]
        LandingRoute["Route / (Landing Page)"]
        DashboardRoute["Route /dashboard (Studio Pengantin)"]
        InviteRoute["Route /invite/[slug] (Engine Undangan)"]
        APIRoute["Server Actions / API Handlers"]
    end

    subgraph Data & Storage Tier [Penyimpanan Data]
        PostgreSQL[(Database PostgreSQL / Supabase)]
        MediaBucket[(Object Storage: Cloudinary / Supabase Storage)]
    end

    subgraph External Integrations [Layanan Pihak Ketiga]
        WhatsAppAPI[WhatsApp Web URL Scheme]
        GoogleCalendar[Google Calendar Template URL]
        GoogleMaps[Google Maps Directions]
        PaymentGateway[Midtrans / Xendit Payment Gateway]
    end

    GuestMobile --> CloudflareEdge
    CoupleDesktop --> CloudflareEdge
    OGImageScraper --> CloudflareEdge

    CloudflareEdge --> LandingRoute
    CloudflareEdge --> DashboardRoute
    CloudflareEdge --> InviteRoute

    InviteRoute --> APIRoute
    DashboardRoute --> APIRoute

    APIRoute --> PostgreSQL
    InviteRoute -.-> MediaBucket
    DashboardRoute -.-> MediaBucket

    InviteRoute --> GoogleCalendar
    InviteRoute --> GoogleMaps
    DashboardRoute --> WhatsAppAPI
    APIRoute -.-> PaymentGateway
```

---

### 2. Diagram Entitas Data (Database Schema / ERD)

```mermaid
erDiagram
    USERS ||--o{ INVITATIONS : owns
    INVITATIONS ||--|{ EVENTS : contains
    INVITATIONS ||--o{ STORY_MILESTONES : has
    INVITATIONS ||--o{ GALLERY_PHOTOS : displays
    INVITATIONS ||--|{ BANK_ACCOUNTS : provides
    INVITATIONS ||--o{ GUESTS : targets
    INVITATIONS ||--o{ WISHES : receives

    USERS {
        string id PK
        string email
        string full_name
        string phone_number
        timestamp created_at
    }

    INVITATIONS {
        string id PK
        string user_id FK
        string slug UK "contoh: raditya-dan-sekar"
        string title
        string theme_code "editorial | sealed-luxury | sekar-floral"
        string groom_name
        string groom_full_name
        string groom_father
        string groom_mother
        string groom_photo_url
        string groom_instagram
        string bride_name
        string bride_full_name
        string bride_father
        string bride_mother
        string bride_photo_url
        string bride_instagram
        string music_url
        string music_title
        string quote_verse
        string quote_source
        boolean is_active
        timestamp expires_at
    }

    EVENTS {
        string id PK
        string invitation_id FK
        string title "Akad Nikah / Resepsi"
        date event_date
        string event_time
        string venue_name
        string venue_address
        string maps_url
        string calendar_title
    }

    STORY_MILESTONES {
        string id PK
        string invitation_id FK
        string year
        string title
        string description
        string image_url
        int sort_order
    }

    GALLERY_PHOTOS {
        string id PK
        string invitation_id FK
        string url
        string caption
        int sort_order
    }

    BANK_ACCOUNTS {
        string id PK
        string invitation_id FK
        string bank_name
        string account_number
        string account_holder
        string qris_image_url
    }

    GUESTS {
        string id PK
        string invitation_id FK
        string name
        string phone_number
        string category "VIP | Keluarga | Teman | Rekan Kerja"
        string status "Belum Dikirim | Terkirim | Terkonfirmasi"
        timestamp invited_at
    }

    WISHES {
        string id PK
        string invitation_id FK
        string name
        string relationship
        string attendance "hadir | tidak_hadir | ragu"
        int pax_count
        string message
        timestamp created_at
    }
```

---

### 3. Spesifikasi Tumpukan Teknologi (Technology Stack Specification)

| Lapisan (*Layer*) | Teknologi yang Digunakan | Justifikasi & Alasan Pemilihan |
| :--- | :--- | :--- |
| **Framework Web** | **Next.js 14 (App Router)** | Mendukung *hybrid rendering* (SSG untuk kecepatan, SSR untuk dynamic Open Graph tag pratinjau link WA), performa optimasi gambar otomatis (*next/image*). |
| **Bahasa Pemrograman** | **TypeScript 5.7** | *Type safety* penuh pada seluruh model data undangan, mengurangi *runtime error*, dan memudahkan skalabilitas kode tim. |
| **Styling & CSS** | **Tailwind CSS 3.4** | Utility-first, ukuran bundle CSS sangat ringkas (*purged*), palet kustom tema kemewahan (*champagne*, *romantic*, *gold gradient*). |
| **Ikonografi** | **Lucide React** | Ikon SVG bersih, ukuran ringan, ramah pohon pangkas (*tree-shakeable*). |
| **Animasi & Interaktivitas** | **Canvas-Confetti + CSS Transitions** | Efek perayaan konfeti ringan saat tamu kirim RSVP, transisi mulus saat membuka amplop tanpa membebani memori browser mobile. |
| **Audio Engine** | **HTML5 Audio API** | Pemutaran musik latar stabil tanpa dependensi berat pihak ketiga, mendukung mekanisme perizinan interaksi pengguna. |
| **Optimasi Gambar** | **Next/Image Remote Patterns** | Mengonversi gambar secara otomatis ke format WebP/AVIF modern dengan kompresi ukuran berkas hingga 70%. |

---

### 4. Spesifikasi Kontrak API & Endpoint (API Contracts)

#### A. Ambil Data Undangan Publik
- **Endpoint:** `GET /api/invitations/:slug`
- **Tujuan:** Mengambil seluruh data konten untuk dirender pada halaman undangan tamu.
- **Header:** `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400`
- **Format Respons Sukses (200 OK):**
```json
{
  "status": "success",
  "data": {
    "id": "inv-001",
    "slug": "raditya-dan-sekar",
    "title": "The Wedding of Raditya & Sekar",
    "theme": "sealed-luxury",
    "music": {
      "url": "https://domain.com/audio.mp3",
      "title": "Romantic Piano Melody"
    },
    "groom": { "name": "Raditya", "fullName": "Raditya Pratama, S.T." },
    "bride": { "name": "Sekar", "fullName": "Sekar Ayu Larasati, S.Ds." },
    "events": [
      {
        "id": "event-1",
        "title": "Akad Nikah",
        "date": "2026-12-20",
        "time": "08.00 - 10.00 WIB",
        "venueName": "Masjid Raya Al-Insan"
      }
    ]
  }
}
```

#### B. Kirim Konfirmasi RSVP & Doa Restu
- **Endpoint:** `POST /api/invitations/:slug/rsvp`
- **Request Body:**
```json
{
  "name": "Budi Santoso",
  "relationship": "Sahabat Mempelai",
  "attendance": "hadir",
  "pax": 2,
  "message": "Selamat menempuh hidup baru Radit & Sekar!"
}
```
- **Respons (201 Created):**
```json
{
  "status": "success",
  "message": "RSVP berhasil dicatat",
  "data": {
    "id": "wish-1731238910",
    "createdAt": "Baru saja"
  }
}
```

---

### 5. Strategi Keamanan & Privasi (Security & Privacy)
1. **Pencegahan XSS (Cross-Site Scripting):** Seluruh input dari tamu (nama, pesan ucapan) disanitasi secara ketat dan dirender menggunakan React DOM string escaping bawaan, mencegah injeksi skrip HTML berbahaya pada buku tamu.
2. **Perlindungan Nomor Telepon Tamu:** Nomor WhatsApp tamu hanya diakses di sisi kreator (*dashboard*) dan tidak pernah diekspos secara publik di halaman undangan `/invite/[slug]`.
3. **Rate Limiting pada RSVP:** Menerapkan pembatasan laju (*rate limiting*) berbasis IP untuk mencegah spam pengiriman form ucapan menggunakan bot.
4. **Keamanan Pembayaran (PCI-DSS Compliance):** Transaksi keuangan tidak pernah menyentuh server internal; seluruh transaksi ditangani langsung oleh Payment Gateway berlisensi resmi Bank Indonesia (seperti Midtrans/Xendit).

