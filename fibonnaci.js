// Function to generate Fibonacci series up to n using dynamic programming
function fibonacciDynamic(n) {
  // If n is less than or equal to 0, return an empty array
  if (n <= 0) {
    return [];
  }
  // If n is 1, return an array with a single element 0
  else if (n === 1) {
    return [0];
  }
  // If n is 2, return an array with the first two numbers in the Fibonacci series
  else if (n === 2) {
    return [0, 1];
  }
  else {
    // Initialize the array with the first two numbers in the Fibonacci series
    let fib = [0, 1];
    // Generate the rest of the series
    for (let i = 2; i < n; i++) {
      // The current number is the sum of the previous two numbers
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    // Return the Fibonacci series
    return fib;
  }
}

// Example usage:
// Define the length of the Fibonacci series
const n = 10;
// Generate the Fibonacci series
const fibonacciSeries = fibonacciDynamic(n);
// Log the Fibonacci series to the console
console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]