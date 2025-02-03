// Method 1
var kidsWithCandies = function(candies, extraCandies) {
    // get 'max' value of candies
    // loop candies  => get 'value'
    // value + extraCandies = 'total' compare 'max'
    // total > max return 'TRUE' ortherwise 'FALSE'

    let result = [];
    let max = Math.max(...candies);
    console.log(max)
    for(let i = 0; i < candies.length; i++) {
        let total = candies[i] + extraCandies;
        if(total >= max) {
            result.push(true)
        } else {
            result.push(false)
        }
    };
    return result;
};

// Method 2
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(c => c + extraCandies >= Math.max(...candies));
};


console.log(kidsWithCandies([12, 1, 12], 1));


