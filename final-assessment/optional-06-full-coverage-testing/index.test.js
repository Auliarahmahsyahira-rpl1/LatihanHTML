// Mengimpor fungsi 'test' dan 'describe' dari modul 'node:test' untuk membuat skenario pengujian.
import { test, describe } from 'node:test';
// Mengimpor modul 'assert' dari 'node:assert' untuk melakukan pengecekan hasil pengujian.
import assert from 'node:assert';
// Mengimpor fungsi 'sum' yang akan diuji.
import sum from './index.js';

// Memulai blok pengujian dengan deskripsi 'Pengujian fungsi sum'.
describe('Pengujian fungsi sum', () => {

    // Pengujian pertama: memeriksa apakah fungsi menjumlahkan dua bilangan positif dengan benar.
    test('Menambahkan dua bilangan positif', () => {
        // Asersi: Memastikan bahwa sum(3, 4) menghasilkan 7.
        assert.strictEqual(sum(3, 4), 7);
    });

    // Pengujian kedua: memeriksa apakah fungsi menangani penjumlahan bilangan nol dengan bilangan positif.
    test('Menambahkan bilangan nol dengan bilangan positif', () => {
        // Asersi: Memastikan bahwa sum(0, 5) menghasilkan 5.
        assert.strictEqual(sum(0, 5), 5);
    });

    // Pengujian ketiga: memeriksa apakah fungsi menjumlahkan dua bilangan nol dengan benar.
    test('Menambahkan dua bilangan nol', () => {
        // Asersi: Memastikan bahwa sum(0, 0) menghasilkan 0.
        assert.strictEqual(sum(0, 0), 0);
    });

    // Pengujian keempat: memeriksa apakah fungsi mengembalikan 0 ketika salah satu bilangan negatif.
    test('Mengembalikan 0 jika salah satu bilangan negatif', () => {
        // Asersi: Memastikan bahwa sum(-3, 5) menghasilkan 0.
        assert.strictEqual(sum(-3, 5), 0);
    });

    // Pengujian kelima: memeriksa apakah fungsi mengembalikan 0 ketika kedua bilangan negatif.
    test('Mengembalikan 0 jika kedua bilangan negatif', () => {
        // Asersi: Memastikan bahwa sum(-3, -4) menghasilkan 0.
        assert.strictEqual(sum(-3, -4), 0);
    });

    // Pengujian keenam: memeriksa apakah fungsi mengembalikan 0 jika salah satu argumen adalah string.
    test('Mengembalikan 0 jika salah satu argumen bukan bilangan (string)', () => {
        // Asersi: Memastikan bahwa sum('3', 4) menghasilkan 0.
        assert.strictEqual(sum('3', 4), 0);
    });

    // Pengujian ketujuh: memeriksa apakah fungsi mengembalikan 0 jika kedua argumen adalah string.
    test('Mengembalikan 0 jika kedua argumen bukan bilangan (string)', () => {
        // Asersi: Memastikan bahwa sum('a', 'b') menghasilkan 0.
        assert.strictEqual(sum('a', 'b'), 0);
    });

    // Pengujian kedelapan: memeriksa apakah fungsi mengembalikan 0 jika salah satu argumen adalah objek.
    test('Mengembalikan 0 jika salah satu argumen bukan bilangan (object)', () => {
        // Asersi: Memastikan bahwa sum({}, 4) menghasilkan 0.
        assert.strictEqual(sum({}, 4), 0);
    });

    // Pengujian kesembilan: memeriksa apakah fungsi mengembalikan 0 jika salah satu argumen adalah array.
    test('Mengembalikan 0 jika salah satu argumen bukanz bilangan (array)', () => {
        // Asersi: Memastikan bahwa sum([], 4) menghasilkan 0.
        assert.strictEqual(sum([], 4), 0);
    });

    // Pengujian kesepuluh: memeriksa apakah fungsi mengembalikan 0 jika salah satu argumen undefined.
    test('Mengembalikan 0 jika salah satu argumen undefined', () => {
        // Asersi: Memastikan bahwa sum(undefined, 4) menghasilkan 0.
        assert.strictEqual(sum(undefined, 4), 0);
    });
});
