const validatePassword = require('./password-validator');

const result1 = validatePassword('ABCD1appppp');
const result2 = validatePassword('password1');

console.log(result1, result2);
