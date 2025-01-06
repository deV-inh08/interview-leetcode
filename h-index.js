var hIndex = function(citations) {
    // Bước 1: Sắp xếp mảng theo thứ tự giảm dần
    citations.sort((a, b) => b - a);

    // Bước 2: Tìm giá trị h-index
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break
        }
    }
    return h;
};

