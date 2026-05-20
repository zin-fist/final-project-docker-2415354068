# Laporan Hasil Praktikum: Final Project Aplikasi Berbasis Container

## Identitas Mahasiswa

- **Nama:** Faisal Priambodo Putra
- **NIM:** 2415354068
- **Kelas/Rombel:** 4D TRPL
- **Tanggal Praktikum:** 20 Mei 2026

---

## Teknologi & Tools yang Digunakan

- **Sistem Operasi:** Mac OS Ventura
- **Containerization:** Docker & Docker Hub
- **Bahasa Pemrograman / Framework:** Node.js
- **Tools Lain:** VS Code, Git, Postman

---

## Deskripsi Singkat Project

Pada praktikum ini dilakukan proses containerization terhadap aplikasi berbasis Node.js menggunakan Docker. Docker digunakan untuk mengemas aplikasi beserta seluruh dependency ke dalam sebuah image sehingga aplikasi dapat berjalan secara konsisten di berbagai lingkungan tanpa perlu konfigurasi ulang di setiap sistem.

Dengan menggunakan Docker, proses deployment menjadi lebih mudah karena aplikasi tidak lagi bergantung pada kondisi sistem host, melainkan berjalan di dalam container yang sudah terisolasi.

## Langkah-Langkah Praktikum & Dokumentasi

### Langkah 1: [Tulis Nama Langkah 1, Contoh: Membuat Dockerfile]

Pada tahap pertama, dibuat file Dockerfile yang berisi instruksi untuk membangun image aplikasi Node.js. Dockerfile ini menentukan environment, dependency, serta perintah untuk menjalankan aplikasi.

Setelah Dockerfile siap, dilakukan proses build image menggunakan Docker CLI. Proses ini akan membaca seluruh konfigurasi aplikasi, menginstall dependency, dan mengemasnya menjadi sebuah Docker image.

```bash
# Contoh perintah terminal yang dijalankan
docker build -t app-good .
```

**Dokumentasi/Screenshot:**
![GET USER](image/build.png)

---

### Langkah 2: [Tulis Nama Langkah 2, Contoh: Tag dan Push ke Docker Hub]

Setelah image berhasil dibuat, langkah berikutnya adalah memberikan tag pada image agar siap diupload ke Docker Hub. Tag ini berfungsi sebagai versi dari image yang akan disimpan di repository Docker Hub.

Kemudian image tersebut di-push ke Docker Hub agar bisa diakses dan digunakan di berbagai mesin atau server lain.

```bash
docker tag app-good madedianpp/app-good:v1.0
docker push madedianpp/app-good:v1.0
```

**Dokumentasi/Screenshot:**
![Proses Push Berhasil](image/push.png.png)

---

### Langkah 3: [Tulis Nama Langkah 3, Contoh: Pengujian Pull dan Run Container]

Pada tahap ini dilakukan pengujian dengan menjalankan container dari image yang sudah tersedia di Docker Hub. Perintah docker run digunakan untuk menjalankan container dan melakukan port mapping agar aplikasi dapat diakses melalui browser.

```bash
docker run -d -p 8080:8080 madedianpp/app-good:v1.0
```

**Dokumentasi/Screenshot:**
<img src="image/web.png.png" alt="Aplikasi Berjalan di Browser" width="500">

---

## Kesimpulan

Build Docker adalah proses membuat Docker Image dari aplikasi menggunakan Dockerfile sebagai “resep”. Proses ini dilakukan dengan perintah docker build, yang akan mengemas seluruh aplikasi beserta dependensinya ke dalam sebuah image. Setelah image berhasil dibuat, aplikasi dapat dijalankan sebagai container menggunakan docker run, sehingga aplikasi bisa berjalan di lingkungan yang konsisten di mana pun tanpa perlu konfigurasi ulang di setiap perangkat.
