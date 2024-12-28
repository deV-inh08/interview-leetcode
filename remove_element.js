
// Cach 1 (sai)
// var removeElement = function(nums, val) {
//     let k = 0;
//     nums = nums.filter((item) => item !== val)
//     k = nums.length
//     return nums
// }


var removeElement = function(nums, val) {
    let k = 0; // Số lượng phần tử không bằng `val`
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Di chuyển phần tử khác `val` về phía trước
            k++;
        }
    }
    return k;
};

console.log(removeElement([3,2,2,3], 3))


