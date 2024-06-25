function findMissingLetter(arr) {
    const charCodes = arr.map(letter => letter.charCodeAt())

    console.log(charCodes)

    const missingLetter = charCodes.reduce((start, next)=>{
        console.log(start, next)
        if(next - start > 1) {
            charCodes.splice(1);
            return next - 1
        } else {
            return next
        }
    }, charCodes[0])

    return String.fromCharCode(missingLetter);
}

module.exports = findMissingLetter;
