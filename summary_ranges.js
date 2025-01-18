const summaryRanges = function(nums) {
    const result = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        // Kiểm tra nếu số hiện tại không liên tiếp với số tiếp theo
        if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {
            // Nếu start và i trùng nhau, chỉ có 1 số trong khoảng
            if (start === i) {
                result.push(`${nums[start]}`);
            } else {
                // Nếu có nhiều số, ghi theo dạng "a->b"
                result.push(`${nums[start]}->${nums[i]}`);
            }
            // Cập nhật start cho khoảng tiếp theo
            start = i + 1;
        }
    }

    return result;
}