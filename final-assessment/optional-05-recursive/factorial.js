// Fungsi untuk menghitung faktorial dari sebuah bilangan menggunakan rekursi.
// Faktorial dari n (n!) adalah hasil perkalian n dengan semua bilangan bulat positif lebih kecil dari n.
// Misalnya, faktorial 5 (5!) = 5 * 4 * 3 * 2 * 1 = 120.
function factorial(n) {
    // Jika nilai n adalah 0 atau 1, maka faktorialnya adalah 1 (basis rekursi).
    if (n === 0 || n === 1) {
        return 1;
    }
    // Jika n lebih besar dari 1, panggil fungsi secara rekursif dengan nilai n - 1.
    // Misalnya, factorial(5) = 5 * factorial(4) = 5 * 4 * 3 * 2 * 1 = 120.
    return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;