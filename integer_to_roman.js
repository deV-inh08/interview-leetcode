function intToRoman(num) {
    // Mảng chứa các ký hiệu La Mã và giá trị tương ứng
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = ''; // Chuỗi kết quả La Mã

    // Duyệt qua từng cặp giá trị và ký hiệu
    for (const { value, symbol } of romanMap) {
        // Khi số nguyên >= giá trị, trừ dần và thêm ký hiệu vào kết quả
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result; // Trả về kết quả
}
