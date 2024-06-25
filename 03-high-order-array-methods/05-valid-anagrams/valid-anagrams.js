function validAnagrams(str1, str2) {
    const letters1 = str1.split('');
    const letters2 = str2.split('');

    const letterCount1 = letters1.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }

        return acc;
    }, {});

    const letterCount2 = letters2.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }

        return acc;
    }, {});

    for (let letter in letterCount1) {
        if (letterCount1[letter] !== letterCount2[letter]) {
            return false;
        }
    }

    return true;
}

module.exports = validAnagrams;
