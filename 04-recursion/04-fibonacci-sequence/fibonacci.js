function fibonacci(num) {
  //base case
  //if the number is either 0 or 1
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
