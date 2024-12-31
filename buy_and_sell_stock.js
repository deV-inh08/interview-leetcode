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
    let profit = 0
    for(let i = 1; i < prices.length; i++) {
        if( prices[i] - prices[0] < 0) {
            prices[0] = prices[i]
        } else {
           profit = Math.max(profit, prices[i] - prices[0])
        }
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))

console.log(maxProfit([7,6,4,3,1]))