// Fungsi untuk menghitung bilangan Fibonacci ke-n menggunakan rekursi.
// Deret Fibonacci adalah deret angka di mana setiap angka adalah jumlah dari dua angka sebelumnya.
// Deret dimulai dari 0 dan 1, lalu angka berikutnya adalah hasil penjumlahan dua angka sebelumnya.
// Misalnya, deret Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

function fibonacci(n) {
    // Jika n adalah 0, maka nilai Fibonacci ke-0 adalah 0 (basis rekursi pertama).
    if (n === 0) {
        return 0;
    }
    // Jika n adalah 1, maka nilai Fibonacci ke-1 adalah 1 (basis rekursi kedua).
    if (n === 1) {
        return 1;
    }
    // Untuk nilai n > 1, panggil fungsi secara rekursif untuk menghitung dua bilangan Fibonacci sebelumnya.
    // Misalnya, fibonacci(5) = fibonacci(4) + fibonacci(3).
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;