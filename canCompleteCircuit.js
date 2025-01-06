var canCompleteCircuit = function() {
    const n = gas.length;
    let totalGas = 0; // Tổng lượng gas
    let totalCost = 0; // Tổng chi phí
    let tank = 0; // Lượng gas hiện tại
    let start = 0; // Điểm xuất phát

    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        // Nếu không đủ xăng để đi tiếp
        if (tank < 0) {
            start = i + 1; // Đặt điểm xuất phát tại trạm tiếp theo
            tank = 0; // Làm mới bình xăng
        }
    }

    // Nếu tổng gas đủ để đi hết đường, trả về điểm xuất phát
    return totalGas >= totalCost ? start : -1;
}