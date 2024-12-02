// Objek kosong untuk menyimpan data buku
const books = {};

// Fungsi untuk mendapatkan semua buku yang tersimpan
function getBooks() {
  return books; // Mengembalikan objek 'books' yang berisi semua buku
}

// Fungsi untuk mendapatkan buku berdasarkan ID
function getBookById(id) {
  const book = books[id]; // Mencari buku berdasarkan ID yang diberikan

  // Jika buku dengan ID tersebut tidak ditemukan, kembalikan null
  if (!book) {
    return null;
  }

  return book.id; // Mengembalikan ID buku yang ditemukan
}

// Fungsi untuk menyimpan buku ke dalam objek 'books'
function saveBook(book) {
  books[book.id] = book; // Menambahkan buku baru atau memperbarui buku berdasarkan ID
}

// Menyimpan sebuah buku dengan ID 'book-1' dan nama 'Book 1'
saveBook({ id: 'book-1', name: 'Book 1' });

// Mendapatkan semua buku yang tersimpan dalam objek 'books'
const myBooks = getBooks();

// Mendapatkan buku dengan ID 'book-1'
const myBook = getBookById('book-1');

// Menampilkan semua buku yang tersimpan
console.log(myBooks); // Output: { 'book-1': { id: 'book-1', name: 'Book 1' } }

// Menampilkan ID buku dengan ID 'book-1'
console.log(myBook); // Output: 'book-1'