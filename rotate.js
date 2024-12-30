// Cach 1
function rotateArray(nums, k) {
    const n = nums.length;
    k = k % n; // Nếu k lớn hơn độ dài mảng
    const rotated = new Array(n); // Tạo mảng phụ

    // Đặt các phần tử vào vị trí mới
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    // Sao chép mảng phụ vào nums
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotateArray(nums1, 3);
console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]


// Cach 2
function rotateArray(nums, k) {
    const n = nums.length;
    k = k % n; // Nếu k lớn hơn độ dài mảng

    for (let i = 0; i < k; i++) {
        // Lấy phần tử cuối cùng và thêm vào đầu
        nums.unshift(nums.pop());
    }
}


const nums2 = [1, 2, 3, 4, 5, 6, 7];
rotateArray(nums2, 3);
console.log(nums2); // Output: [5, 6, 7, 1, 2, 3, 4]


// Cach 3
function rotateArray(nums, k) {
    const n = nums.length;
    k = k % n; 

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; 
            start++;
            end--;
        }
    }
    reverse(0, n - 1);

    reverse(0, k - 1);

    reverse(k, n - 1);
}

const nums3 = [1, 2, 3, 4, 5, 6, 7];
rotateArray(nums3, 3);
console.log(nums3); // Output: [5, 6, 7, 1, 2, 3, 4]
