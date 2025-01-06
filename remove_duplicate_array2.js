function removeDuplicates(nums) {
    let write = 0; // Vị trí cần ghi tiếp theo
    for (let read = 0; read < nums.length; read++) {
        // Nếu chưa có 2 phần tử giống nhau trước đó
        if (write < 2 || nums[read] !== nums[write - 2]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write; // Số lượng phần tử hợp lệ sau khi xử lý
}
