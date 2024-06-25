function factorial(num) {
  //solved recursively
  if (num < 2) {
    return 1;
  }

  return num * factorial(num - 1);

  //sovled with for loop
  // let sum = 1;
  // for(let i = num; i > 0; i-- ) {
  //     sum *= i
  // }
  // return sum
}

module.exports = factorial;
