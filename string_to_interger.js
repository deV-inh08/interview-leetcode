// const myAtoi = function(s) {
//     // Ignore any leading whitespace
//     let removeWhiteSpace = s.trim();
//     let arrString = removeWhiteSpace.split('')
//     let result = '';
//     let limitRange = [-(2**31), (2**31 -1)]
//     // can use: 0-9 , -, +(good)
    
//     // 0-2321 => 2321
//     // +0435 => 435

//     // bad: asd743 => return 0
//     // a0bac 
//     // 01abc => return 1 
//     // 0-23ba432 => 0-23 => -23

//     if (!((arrString[0] >= '0' && arrString[0] <= '9') || arrString[0] === '-' || arrString[0] === '+')) {
//         return 0;
//     }
//     else {
//         for(let i = 0; i < arrString.length; i++) {
//             if((arrString[i] >= '0' && arrString[i] <= '9') || arrString[i] === '-' || arrString[i] === '+') {
//                 result += arrString[i]
//             } else {
//                 break
//             }
//         }
//     }

//     console.log(result)

//     if(result[0] === '0' && (result[1] === '+' || result[1] === '-')) {
//         return 0
//     } else if((result[0] === '+' || result[0] === '-') && (result[1] === '+' || result[1] === '-')) {
//         return 0
//     } 
//     else {
//         if(Number(result) >= limitRange[0] && Number(result) <= limitRange[1]) {
//             return Number(result)
//         } else if(Number(result) > limitRange[1]) {
//             return limitRange[1]
//         } else if(Number(result) < limitRange[0]) {
//             return limitRange[0]
//         }
//     }
// }

// console.log(myAtoi("-+12"))


// 
const myAtoi = function(s) {
    let removeWhiteSpace = s.trim();
    let arrString = removeWhiteSpace.split('');
    let result = '';

    if (!((arrString[0] >= '0' && arrString[0] <= '9') || arrString[0] === '-' || arrString[0] === '+')) {
        return 0;
    }

    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] >= '0' && arrString[i] <= '9') {
            result += arrString[i];
        } else if ((arrString[i] === '-' || arrString[i] === '+') && i === 0) {
            result += arrString[i];
        } else {
            break;
        }
    }

    // Nếu result chỉ có '-' hoặc '+', trả về 0
    if (result === '-' || result === '+') return 0;

    // Loại bỏ số 0 ở đầu
    result = result.replace(/^(\+|-)?0+(\d+)/, "$1$2");

    let num = Number(result);
    let min = -(2 ** 31);
    let max = 2 ** 31 - 1;

    if (num < min) return min;
    if (num > max) return max;
    return num;
};

// Test cases
console.log(myAtoi("0-1")); // ✅ Kết quả phải là 0
console.log(myAtoi("-42")); // ✅ -42
console.log(myAtoi("42")); // ✅ 42
console.log(myAtoi("  00012abc")); // ✅ 12
console.log(myAtoi("  -00012abc")); // ✅ -12
console.log(myAtoi("+00123")); // ✅ 123
console.log(myAtoi("00000-42a1234")); // ✅ 0
console.log(myAtoi("   +0 123")); // ✅ 0
