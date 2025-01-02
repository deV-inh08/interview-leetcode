// var maxProfit = function(prices) {
//     let buy = prices[0];
//     let profit = 0;
//     for(let i = 1; i < prices.length; i++) {
//         let sell = prices[i];
//         if(sell - buy < 0) {
//             buy = sell
//         } else if(((sell - buy) > 0) && (profit < (sell - buy))) {
//             let newProfit = sell - buy;
//             profit = newProfit
//         }
//     }
//     return profit
// }


// optimize

var maxProfit = function(prices) {
    let buy = prices[0];
    let maxProfit = 0;
    // + Nếu thằng buy mà lớn hơn thằng sell, thì gắn thằng sell bằng thằng buy
    // + 7(buy) > 1(sell): Thì gắn buy = 1

    // + Sau 
   for(let i = 1; i < prices.length; i++) {
    if(buy > prices[i]) {
        buy = prices[i]
    }
    // Sau đó tính maxProfit
    // Sau khi gán buy = 1, thì prices[1] - buy = 0.
    //  Gán maxProfit = 0
    // For loop is continute
    maxProfit = Math.max(maxProfit, prices[i] - buy)
   }
   return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([1, 2]))
// console.log(maxProfit([7,6,4,3,1]))