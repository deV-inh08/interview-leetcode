var convert = function(s, numRows) {
    // Xử lý các trường hợp đặc biệt
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    
    // Tạo mảng để lưu các ký tự cho mỗi hàng
    const rows = Array(numRows).fill('');
    
    // Biến để theo dõi vị trí hiện tại
    let currentRow = 0;
    let goingDown = true;
    
    // Duyệt qua từng ký tự trong chuỗi input
    for (const char of s) {
        // Thêm ký tự vào hàng hiện tại
        rows[currentRow] += char;
        
        // Kiểm tra và thay đổi hướng nếu đến hàng đầu hoặc cuối
        if (currentRow === 0) {
            goingDown = true;
        } else if (currentRow === numRows - 1) {
            goingDown = false;
        }
        
        // Di chuyển đến hàng tiếp theo dựa vào hướng
        currentRow += goingDown ? 1 : -1;
    }
    
    // Kết hợp tất cả các hàng thành chuỗi kết quả
    return rows.join('');
};