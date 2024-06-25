function validatePassword(str) {
    const letters = str.split('');

    const containsLowerCase = letters.some((letter) => {
        return letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122;
    });

    const containsUpperCase = letters.some((letter) => {
        return letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90;
    });

    const containsDigit = letters.some((letter) => {
        return letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57;
    });

    console.log(containsLowerCase, containsUpperCase, containsDigit);

    return (
        containsLowerCase &&
        containsUpperCase &&
        containsDigit &&
        str.length >= 8
    );
}

module.exports = validatePassword;
