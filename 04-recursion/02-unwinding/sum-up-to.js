function sumUpTo(n) {
  // Base case - when n is 1, we return 1
  if (n === 1) {
    return 1;
  }


  console.log(n)

  // Recursive case - when n is greater than 1, we return the sum of n and sumUpTo(n - 1)
  return n + sumUpTo(n - 1);
}

module.exports = sumUpTo;
