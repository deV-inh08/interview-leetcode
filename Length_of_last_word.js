var lengthOfLastWord = function(s) {
    let string = s.trim();
    let arr = string.split(" ");
    let result = arr[arr.length - 1].length
    return result
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
