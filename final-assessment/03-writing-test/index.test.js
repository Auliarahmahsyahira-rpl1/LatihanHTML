// Mengimpor modul test dari Node.js untuk menjalankan pengujian
import { test } from 'node:test';

// Mengimpor modul assert dari Node.js untuk melakukan pengecekan hasil
import assert from 'node:assert';

// Mengimpor fungsi sum dari file index.js untuk diuji
import { sum } from './index.js';

// Mendefinisikan tes dengan judul 'menjumlahkan dua angka'
test('menjumlahkan dua angka', () => {
    // Menggunakan assert untuk memastikan hasil penjumlahan adalah 3
    assert.strictEqual(sum(1, 2), 3);
    
    // Menggunakan assert untuk memastikan hasil penjumlahan -1 dan 1 adalah 0
    assert.strictEqual(sum(-1, 1), 0);
    
    // Menggunakan assert untuk memastikan hasil penjumlahan -2 dan -3 adalah -5
    assert.strictEqual(sum(-2, -3), -5);
    
    // Menggunakan assert untuk memastikan hasil penjumlahan 0 dan 0 adalah 0
    assert.strictEqual(sum(0, 0), 0);
});