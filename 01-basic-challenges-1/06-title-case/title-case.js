function titleCase(str) {
    let words = str.toLowerCase().split(' ')
    return words.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
}

module.exports = titleCase;
