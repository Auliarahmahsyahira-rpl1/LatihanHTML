import factorial from './factorial.js';
import fibonacci from './fibonacci.js';

// Mendefinisikan angka yang akan digunakan untuk menghitung faktorial
const numberForFactorial = 5;
// Mencetak hasil faktorial dari numberForFactorial menggunakan fungsi factorial
console.log(`Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`);
/**
 * Output yang diharapkan:
 * Faktorial dari 5 adalah 120
 */

// Mendefinisikan angka yang akan digunakan untuk menghitung deret Fibonacci
const numberForFibonacci = 10;
// Mencetak pesan untuk deret Fibonacci hingga elemen ke-10
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);

// Mendeklarasikan array untuk menyimpan hasil deret Fibonacci
let fibonacciSeries = [];
// Menggunakan loop for untuk menghitung Fibonacci dari 0 hingga numberForFibonacci
for (let i = 0; i <= numberForFibonacci; i++) {
  // Menambahkan hasil fungsi fibonacci(i) ke dalam array fibonacciSeries
  fibonacciSeries.push(fibonacci(i));
  // Mencetak array fibonacciSeries setiap kali elemen baru ditambahkan
  console.log(fibonacciSeries);
}

/**
 * Output yang diharapkan:
 * Deret Fibonacci hingga elemen  10 adalah:
 * [ 0 ]
 * [ 0, 1 ]
 * [ 0, 1, 1 ]
 * [ 0, 1, 1, 2 ]
 * [ 0, 1, 1, 2, 3 ]
 * [ 0, 1, 1, 2, 3, 5 ]
 * [ 0, 1, 1, 2, 3, 5, 8 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */