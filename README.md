# Chatat AI

Selamat datang di Chatat AI! Aplikasi ini memungkinkan Anda untuk berkomunikasi dengan cara baru, mengintegrasikan obrolan langsung di aplikasi dengan akun WhatsApp Anda.

## Fitur

- **Integrasi WhatsApp**: Menerima dan membalas pesan WhatsApp langsung dari antarmuka ChatatApp.
- **Real-time Chat**: Obrolan berjalan secara *real-time* untuk komunikasi yang lancar.
- **Antarmuka Modern**: Dibuat dengan Next.js dan Shadcn/UI untuk pengalaman pengguna yang bersih dan responsif.
- **Aman**: Menggunakan autentikasi untuk menjaga keamanan percakapan Anda.

## Arsitektur

Aplikasi ini terdiri dari dua bagian utama:

1.  **Frontend (chatatapp)**: Aplikasi web Next.js yang menjadi antarmuka utama bagi pengguna. Dibuat dengan React, TypeScript, dan Next.js.
2.  **Backend (wa-server)**: Server Node.js yang menangani koneksi dengan WhatsApp menggunakan Baileys. Server ini bertugas menerima pesan masuk dari WhatsApp dan meneruskannya ke frontend, serta mengirim balasan dari frontend ke WhatsApp.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut:

- [Node.js](https://nodejs.org/) (v20.x atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di lingkungan lokal Anda.

### 1. Backend Setup (`wa-server`)

Server ini akan menghubungkan aplikasi dengan WhatsApp.

1.  **Masuk ke direktori `wa-server`**:
    ```bash
    cd wa-server
    ```

2.  **Install dependensi**:
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variables**:
    Buat file `.env` di dalam direktori `wa-server` dan salin konten dari `.env.example` (jika ada) atau isi dengan variabel berikut:

    ```env
    APP_PORT=4000
    API_URL_CHATATID=http://localhost:3000
    ```

4.  **Jalankan server backend**:
    ```bash
    npm run dev
    ```

5.  **Hubungkan dengan WhatsApp**:
    Setelah server berjalan, QR code akan muncul di terminal. Pindai QR code ini menggunakan aplikasi WhatsApp di ponsel Anda (Pengaturan > Perangkat Tertaut > Tautkan Perangkat).

### 2. Frontend Setup (`chatatapp`)

Ini adalah aplikasi web utama yang akan Anda gunakan.

1.  **Buka terminal baru dan masuk ke direktori `chatatapp`**:
    ```bash
    cd chatatapp
    ```

2.  **Install dependensi**:
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variables**:
    Buat file `.env.local` di dalam direktori `chatatapp`. Anda perlu mengisi beberapa variabel penting. Contohnya:

    ```env
    # URL untuk koneksi database Prisma
    DATABASE_URL="postgres://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

    # URL publik dari aplikasi frontend Anda
    NEXT_PUBLIC_API_URL="http://localhost:3000"

    # URL dari wa-server yang sudah berjalan (jika diubah dari default)
    NEXT_PUBLIC_API_WA_SERVER="http://localhost:4000"

    # Secret untuk autentikasi (gunakan string acak yang kuat)
    BETTER_AUTH_SECRET="<your-strong-random-secret>"
    BETTER_AUTH_URL="http://localhost:3000/"

    # API Key lain jika diperlukan (contoh: KOLOSAL_API_KEY)
    KOLOSAL_API_KEY="<your-kolosal-api-key>"
    ```

4.  **Migrasi Database Prisma**:
    Pastikan database Anda berjalan dan `DATABASE_URL` sudah benar. Jalankan migrasi:
    ```bash
    npx prisma migrate dev
    ```

5.  **Jalankan server frontend**:
    ```bash
    npm run dev
    ```

    **Akun Admin (Default)**:
    - Email: `admin@chatat.com`
    - Password: `admin123`
    - Name: `Juragan Chatat`

6.  **Buka aplikasi**:
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Live Demo

Anda dapat mencoba bot WhatsApp Chatat AI kami di nomor: +62 895-1913-6369 atau langsung melalui tautan ini: [https://wa.me/6289519136369](https://wa.me/6289519136369)

## Cara Penggunaan

1.  Pastikan kedua server (`wa-server` dan `chatatapp`) berjalan.
2.  Login atau buat akun di aplikasi web.
3.  Setelah `wa-server` terhubung dengan WhatsApp Anda, setiap pesan yang masuk akan muncul di dasbor ChatatApp.
4.  Anda dapat membalas pesan langsung dari aplikasi, dan balasan akan dikirim melalui WhatsApp Anda.

## Screenshots

Berikut adalah beberapa tangkapan layar dari aplikasi:

![Screenshot 1](public/images/1.jpeg)
![Screenshot 2](public/images/2.jpeg)
![Screenshot 3](public/images/3.jpeg)
![Screenshot 4](public/images/4.jpeg)
![Screenshot 5](public/images/5.jpeg)
![Screenshot 6](public/images/6.jpeg)
![Screenshot 7](public/images/7.jpeg)
![Screenshot 8](public/images/8.jpeg)
![Screenshot 9](public/images/9.jpeg)
![Screenshot 10](public/images/10.jpeg)
![Screenshot 11](public/images/11.jpeg)