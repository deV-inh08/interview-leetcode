var getLucky = function(s, k) {
    // Bước 1: Chuyển đổi chuỗi s thành số theo vị trí chữ cái trong bảng chữ cái
    let numStr = s.split('').map(char => char.charCodeAt(0) - 96).join('');

    // Bước 2: Thực hiện phép biến đổi k lần
    for (let i = 0; i < k; i++) {
        numStr = numStr.split('').reduce((sum, digit) => sum + Number(digit), 0).toString();
    }

    // Trả về kết quả cuối cùng dưới dạng số nguyên
    return Number(numStr);
};


console.log(getLucky('leetcode', 2))
