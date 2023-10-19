function formatPhoneNumber(nums) {
    let phoneNumber = '('
    for(let i =0; i < nums.length; i++){
        if( i === 2 ){
            phoneNumber += `${nums[i]}) `
        } else if(i === 5) {
            phoneNumber += `${nums[i]}-`
        } else {
            phoneNumber += nums[i]
        }
    }

    return phoneNumber
}

module.exports = formatPhoneNumber;
