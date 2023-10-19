function findFirstNonRepeatingCharacter(str) {
    const charCounts = {};
    for(let i =0; i < str.length; i++){
        if(charCounts[str[i]]){
            charCounts[str[i]]++;
        } else{
            charCounts[str[i]] = 1;
        }
    }

    for(let i =0; i < str.length; i++){
        if(charCounts[str[i]]  < 2){
            return str[i]
        }
    }

    return null;
}

module.exports = findFirstNonRepeatingCharacter;
 