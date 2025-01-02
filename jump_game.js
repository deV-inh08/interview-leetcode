var canJump = function(nums) {
    let farthest = 0;  // Vị trí xa nhất có thể đạt được
    for (let i = 0; i < nums.length; i++) {
        // Nếu không thể tiến xa hơn từ vị trí hiện tại, trả về false
        if (i > farthest) {
            return false;
        }
        // Cập nhật vị trí xa nhất có thể đạt được
        farthest = Math.max(farthest, i + nums[i]);
        // Nếu có thể nhảy đến cuối mảng, trả về true
        if (farthest >= nums.length - 1) {
            return true;
        }
    }
    return false;
};

console.log(canJump([2, 3, 1, 1, 4]))