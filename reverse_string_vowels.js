const reverseVowels = (s) => {
    let vowels = new Set(['u', 'e', 'o', 'a', 'i', 'U', 'E', 'O', 'A', 'I'])
    // convert string to array
    let arr = s.split('');
    let reverseVowels = []
    for(let string of s) {
        if(vowels.has(string)) {
            reverseVowels.push(string)
        }
    };
    reverseVowels.reverse();
    let index = 0;
    for(let i = 0; i < arr.length; i++) {
        if(reverseVowels.includes(arr[i])) {
            arr[i] = reverseVowels[index]
            index++
        }
    }
    return arr.join('')
}

console.log(reverseVowels('IceCreAm'))
// console.log(reverseVowels('leetcode'))