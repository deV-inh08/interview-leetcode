var twosum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let comp = target - num;
        let index = map.get(comp)
        if(index !== undefined) {
            return [index, i]
        } else {
            map.set(num, i)
        }
    }
}

console.log(twosum([5, 2, 7, 11], 9));
