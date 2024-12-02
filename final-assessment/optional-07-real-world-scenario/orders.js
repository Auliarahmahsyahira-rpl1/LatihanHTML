// Fungsi untuk menghasilkan ID yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data pesanan
let orders = [];

// Fungsi untuk menambahkan pesanan baru
function addOrder(customerName, items) {
  if (!customerName || !Array.isArray(items) || items.length === 0) {
    throw new Error('Nama pelanggan dan daftar item harus valid.');
  }

  // Membuat objek order baru dengan ID unik, nama pelanggan, daftar item, dan total harga
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: items.reduce((total, item) => total + (item.price || 0), 0),
    status: 'Menunggu', // Status default saat pesanan dibuat
  };

  // Menambahkan order baru ke dalam array orders
  orders.push(newOrder);
  return newOrder;
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const validStatuses = ['Menunggu', 'Diproses', 'Selesai'];
  if (!orderId || !validStatuses.includes(status)) {
    throw new Error('ID pesanan dan status harus valid.');
  }

  // Mencari pesanan berdasarkan ID
  const order = orders.find((order) => order.id === orderId);
  if (!order) {
    throw new Error(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
  }

  // Mengubah status pesanan menjadi status baru
  order.status = status;
  return order;
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang statusnya 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((totalRevenue, order) => totalRevenue + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(orderId) {
  // Mencari index pesanan yang ingin dihapus
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) {
    throw new Error(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
  }

  // Menghapus order dari array dan mengembalikan order yang dihapus
  const [deletedOrder] = orders.splice(index, 1);
  return deletedOrder;
}

// Ekspor semua fungsi dan variabel orders
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };