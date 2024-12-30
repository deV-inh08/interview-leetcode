function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

let nums = [1, 1, 2];
let k2 = removeDuplicates(nums);
console.log(k2, nums.slice(0, k2));
