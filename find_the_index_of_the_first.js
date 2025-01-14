var strStr = function(hayStack, needle) {
    let result = [];
    let strArr = [];
    let j = 0;
    if(hayStack.includes(needle)) {
        for(let i = 0; i < hayStack.length; i++) {
            if(hayStack[i] === needle[j]) {
                result.push(i)
                strArr.push(hayStack[i])
                j++
            }
        }
    } else {
        return -1
    }

    return result[0]
}


console.log(strStr("leetcode", "leeto"));