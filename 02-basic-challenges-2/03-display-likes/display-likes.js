function displayLikes(arr) {
    const numOfLikes = arr.length;
    if (numOfLikes > 3) {
        return `${arr[0]}, ${arr[1]} and ${numOfLikes - 2} others like this`;
    } else if (numOfLikes === 3) {
        return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    } else if (numOfLikes === 2) {
        return `${arr[0]} and ${arr[1]} like this`;
    } else if (numOfLikes === 1) {
        return `${arr[0]} likes this`;
    } else {
        return 'no one likes this';
    }
}

module.exports = displayLikes;
