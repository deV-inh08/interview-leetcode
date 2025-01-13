var reverseWords = function(s) {
    let result = [];
    let arrString = s.trim().split(" ");

    for(let i = 0; i < arrString.length; i++) {
        if(Boolean(arrString[i] )=== true) {
            result.push(arrString[i])
        }
    }
    return result.reverse().toString(" ").replaceAll(",", " ")

}


console.log(reverseWords('   the    sky   is blue    '));

console.log(reverseWords("  hello world  "))

console.log(reverseWords("a good   example"))