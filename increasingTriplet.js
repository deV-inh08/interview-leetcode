const increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity; // ✅ Không còn vấn đề so sánh
    
    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else if (num >= second){
            return true;
        }
    }
    
    return false;
}
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([2,1,5,0,4,6]))


console.log(increasingTriplet([20,100,10,12,5,13])) // => 10 12 13

// first: 20
// second: 100
// first: 10
// second: 12
// first: 5
// 

// [20,100,10,12,5,13]
