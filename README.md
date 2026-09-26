# Web Story — Underreporting Pencurian Indonesia

Paket ini siap dipublikasikan sebagai website statis melalui GitHub Pages.

## File
- `index.html` — isi dan teks web story. **Edit narasi di sini.**
- `style.css` — desain dan responsive layout.
- `script.js` — data, grafik, animasi, dan interaksi.
- `.nojekyll` — agar GitHub Pages menyajikan situs statis apa adanya.

## Edit teks
Buka `index.html` di Visual Studio Code, tekan `Ctrl + F`, cari kalimat yang ingin diubah, lalu edit teksnya. Jangan mengubah `class`, `id`, atau atribut `data-*` jika hanya mengganti narasi.

Untuk preview lokal, buka `index.html` di browser atau gunakan **Live Server** di VS Code.

## Publikasi GitHub Pages
1. Buat repository baru di GitHub, misalnya `web-story-pencurian`.
2. Upload seluruh isi folder ini ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch **main** dan folder **/(root)**, lalu **Save**.
6. Tunggu deployment selesai. URL project site biasanya berbentuk:
   `https://USERNAME.github.io/web-story-pencurian/`

Setelah website aktif, perubahan yang didorong/upload ke branch publikasi akan diterbitkan kembali pada URL yang sama.

> Catatan: website ini memuat resource peta dari internet, jadi koneksi internet tetap diperlukan untuk fungsi peta.
