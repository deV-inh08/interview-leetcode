// Cach 1 (sai)
// var merge = function(nums1, m, nums2, n) {
//     let result1 = [];
//     let result2 = [];
//     for(let i = 0; i < m; i++) {
//         result1.push(nums1[i])
//     }
//     for(let i = 0; i < n; i++) {
//         result2.push(nums2[i])
//     }
//     return [...result1, ...result2].sort();
// }



// Cach 2
var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (m >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

// [1, 2, 2, 3, 5, 6]
