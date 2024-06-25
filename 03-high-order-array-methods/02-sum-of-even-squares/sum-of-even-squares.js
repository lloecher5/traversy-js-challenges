function sumOfEvenSquares(arr) {
    return (
        arr
            //get just the even numbers
            .filter((num) => num % 2 === 0)
            //return the array of the squares
            .map((num) => num * num)
            //sum the values in the array up
            .reduce((sum, square) => sum + square, 0)
    );
}

module.exports = sumOfEvenSquares;
