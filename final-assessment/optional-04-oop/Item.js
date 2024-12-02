/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

/**
 * Kelas Item untuk merepresentasikan barang dengan berbagai properti dan metode
 */
class Item {
    /**
     * Konstruktor untuk membuat instance Item baru dengan properti id, name, quantity, dan price
     * @param {number} id - ID dari item
     * @param {string} name - Nama dari item
     * @param {number} quantity - Jumlah dari item
     * @param {number} price - Harga per unit item
     */
    constructor(id, name, quantity, price) {
        this.id = id; // ID item (unik)
        this.name = name; // Nama item
        this.quantity = quantity; // Jumlah item
        this.price = price; // Harga per unit item
    }

    /**
     * Method untuk memperbarui detail item, termasuk nama, jumlah, dan harga
     * @param {string} name - Nama baru untuk item
     * @param {number} quantity - Jumlah baru untuk item
     * @param {number} price - Harga baru untuk item
     */
    updateDetails(name, quantity, price) {
        this.name = name; // Memperbarui nama item
        this.quantity = quantity; // Memperbarui jumlah item
        this.price = price; // Memperbarui harga item
    }

    /**
     * Method untuk menampilkan detail informasi tentang item dalam format string
     * @returns {string} - String yang berisi detail item, seperti ID, nama, jumlah, dan harga
     */
    displayDetails() {
        // Mengembalikan detail item dalam format yang ditentukan
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
}

// Jangan hapus kode di bawah ini! 
// Mengekspor kelas Item agar bisa digunakan di file lain
export default Item;