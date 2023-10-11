function isPalindrome(str) {
    let editedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reversedStr = '';
    for(let i =editedStr.length-1; i >= 0 ; i--){
        reversedStr += editedStr[i]
    }

    return reversedStr === editedStr;
}

module.exports = isPalindrome;
