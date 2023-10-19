function findMissingNumber(arr) {
    //The +1 is needed because the array is missing one number
    const n = arr.length + 1;
    const targetSum = (n * (n + 1)) / 2;

    let sumWithNumMissing = 0;
    for (let i = 0; i < arr.length; i++) {
        sumWithNumMissing += arr[i];
    }

    return targetSum - sumWithNumMissing;
}

module.exports = findMissingNumber;
