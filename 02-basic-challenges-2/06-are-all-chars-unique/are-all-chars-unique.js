function areAllCharactersUnique(str) {
    const charCounts = {};
    for (let i = 0; i < str.length; i++) {
        if (!charCounts[str[i]]) {
            charCounts[str[i]] = true
        } else {
            return false;
        }
    }

    return true;
}

module.exports = areAllCharactersUnique;
