function generateHashtag(str) {
    if (!str || str.length > 140) return false;

    const words = str.trim().split(/\s+/);

    console.log(words);
    const newStr = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    const hashtag = '#' + newStr.join('');

    return hashtag.length > 140 ? false : hashtag
}

module.exports = generateHashtag;
