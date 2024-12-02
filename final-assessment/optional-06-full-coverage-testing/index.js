// Jangan ubah kode di berkas ini.

// Fungsi `sum` untuk menjumlahkan dua angka, dengan pengecekan tipe data dan nilai negatif.
function sum(a, b) {
  // Memeriksa apakah kedua argumen adalah tipe data 'number'.
  // Jika salah satu bukan 'number', maka fungsi mengembalikan 0.
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  // Memeriksa apakah salah satu dari angka tersebut negatif.
  // Jika ada angka negatif, maka fungsi mengembalikan 0.
  if (a < 0 || b < 0) {
    return 0;
  }

  // Jika semua kondisi terpenuhi, fungsi mengembalikan hasil penjumlahan dari kedua angka.
  return a + b;
}

// Mengekspor fungsi `sum` sebagai default export.
export default sum;