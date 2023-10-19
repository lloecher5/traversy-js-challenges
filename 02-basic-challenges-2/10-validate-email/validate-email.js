function validateEmail(str) {
    return (
        str.includes('@') && str.includes('.') && str.split('@')[0].length > 0
    );
}

module.exports = validateEmail;
