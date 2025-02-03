var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) {
        return ''
    }
    if(str1 === '' || str2 === '') {
        return str1 || str2
    }

    if(str1.length > str2.length) {
        return gcdOfStrings(str2, str1.slice(str2.length))
    } else {
        return gcdOfStrings(str1, str2.slice(str1.length))
    }
};

console.log(gcdOfStrings("ABCABC", "ABC"))