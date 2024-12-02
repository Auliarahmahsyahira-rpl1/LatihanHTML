/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

/**
 * Kelas Inventory untuk mengelola daftar barang
 */
class Inventory {
    // Konstruktor untuk membuat instance baru Inventory dengan properti 'items' sebagai array kosong
    constructor() {
        this.items = [];
    }

    /**
     * Method untuk menambahkan item baru ke dalam daftar 'items'
     * @param {Object} item - Objek item yang akan ditambahkan
     */
    addItem(item) {
        this.items.push(item); // Menambahkan item ke dalam array 'items'
    }
    
    /**
     * Method untuk menghapus item berdasarkan 'id' dari daftar 'items'
     * @param {string} id - ID item yang akan dihapus
     */
    removeItem(id) {
        // Menggunakan filter untuk membuat array baru yang tidak mengandung item dengan 'id' yang sesuai
        this.items = this.items.filter(item => item.id !== id);
    }

    /**
     * Method untuk mengembalikan informasi detail dari semua item dalam bentuk string
     * Setiap item akan menampilkan detailnya melalui method 'displayDetails()'
     * @returns {string} - String yang berisi informasi detail item-item
     */
    listItems() {
        // Menggunakan map untuk menghasilkan array dari hasil displayDetails dan menggabungkannya menjadi satu string
        return this.items.map(item => item.displayDetails()).join('\n');
    }
}

// Jangan hapus kode di bawah ini! 
// Mengekspor kelas Inventory agar bisa digunakan di file lain
export default Inventory;