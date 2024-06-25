function highestScoringWord(str) {
    const letterScores = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };
    //split the words into an array
    const words = str.split(' ');
    //calculate the scores of each word and put into an array
    const scores = words.map((word) => {
        let count = 0;
        for (let char of word) {
            if (letterScores[char]) {
                count += letterScores[char];
            }
        }

        return count;
    });

    //find the highest score
    const highestScore = scores.reduce((prev, curr) => {
        if (prev >= curr) {
            return prev;
        } else {
            return curr;
        }
    }, scores[0]);

    console.log(scores)
    console.log(highestScore)

    //return the word with the highest score
    return words[scores.indexOf(highestScore)];
}

module.exports = highestScoringWord;
