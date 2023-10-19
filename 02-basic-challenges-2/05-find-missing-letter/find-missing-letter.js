function findMissingLetter(arr) {
    //unicode for the first letter
    let startingCode = arr[0].charCodeAt();
    for (let i = 1; i < arr.length; i++) {
        //if the difference between 2 letters is > 1, return the letter in between
        if (arr[i].charCodeAt() - startingCode !== 1) {
            return String.fromCharCode(arr[i].charCodeAt() - 1);
        }

        //move the starting code to the right
        startingCode = arr[i].charCodeAt();
    }
}

module.exports = findMissingLetter;
