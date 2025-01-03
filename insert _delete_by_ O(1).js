var RandomizedSet = function() {
    this.data = []; // Mảng để lưu các phần tử
    this.indexMap = new Map(); // Map lưu chỉ số của từng phần tử
};

RandomizedSet.prototype.insert = function(val) {
    if (this.indexMap.has(val)) {
        return false; // Nếu đã tồn tại, không thêm
    }
    // Thêm vào mảng và cập nhật chỉ số trong Map
    this.data.push(val);
    this.indexMap.set(val, this.data.length - 1);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.indexMap.has(val)) {
        return false; // Nếu không tồn tại, không thể xóa
    }
    // Lấy chỉ số phần tử cần xóa
    const idxToRemove = this.indexMap.get(val);
    const lastElement = this.data[this.data.length - 1];

    // Hoán đổi phần tử cuối với phần tử cần xóa
    this.data[idxToRemove] = lastElement;
    this.indexMap.set(lastElement, idxToRemove);

    // Xóa phần tử cuối và cập nhật Map
    this.data.pop();
    this.indexMap.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    // Chọn chỉ số ngẫu nhiên từ mảng
    const randomIndex = Math.floor(Math.random() * this.data.length);
    return this.data[randomIndex];
};