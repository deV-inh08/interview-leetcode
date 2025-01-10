const romanToInt = function (s) {
    let result = 0;
    let romanNumbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for(let i = 0; i < s.length; i++) {
        if(romanNumbers[s[i]] < romanNumbers[s[i + 1]]) {
            result -= romanNumbers[s[i]]
        } else {
            result += romanNumbers[s[i]]
        }
    }

    return result
}

console.log(romanToInt("MCMXCIV"))