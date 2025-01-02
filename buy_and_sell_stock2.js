var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 0; i <= prices.length; i++) {
//         xét các trường hợp: Có 3 trường hợp
// + stock luôn tăng (cộng dồn từng stock)

// + stock luôn giảm (Luôn giảm thì mua bán làm gì nữa, return 0 luôn)

// + stock lúc tăng lúc giảm: (xem thằng buy có nhỏ hơn thằng sell không )
// nếu có thì tính lãi rồi cộng dồn dô (profit). Tiếp tục tăng lên số ngày(i) kiểm tra lại lần nữa 
// đến khi nào hết vòng lặp
        if(prices[i] < prices[i + 1]) {
            maxProfit += prices[i + 1] - prices[i]
        }
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([1,2,3,4,5]))
// console.log(maxProfit([7,6,4,3,1]))