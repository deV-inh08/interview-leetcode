var findNumbers = function(nums) {
    let count = 0
    let length = 0
    for(let i = 0; i < nums.length; i++) {
        length = (nums[i] + '').split('').length
        if(length % 2 === 0) {
            ++count
        }
    }
    return count
}

console.log(findNumbers([555,901,482,1771]))