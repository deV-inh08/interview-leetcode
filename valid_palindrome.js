var isPalindrome = function(s) {
    // Step 1: Convert string to lowercase and remove non-alphanumeric characters
    const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Step 2: Check if the filtered string is the same as its reverse
    const reversedString = filteredString.split('').reverse().join('');
    
    return filteredString === reversedString;
};

// method 2:

class String2 {
    constructor(str) {
        this.str = str
    }

    // clean string
    cleanStr() {
        let char = '';
        // lower case
        let convertLowercase = this.str.toLowerCase();
        for(let i = 0; i < convertLowercase.length; i++) {
            if((convertLowercase[i] >= 'a' && convertLowercase[i] <= 'z') || (convertLowercase[i] >= '0' && convertLowercase[i] <= '9')) {
                char += convertLowercase[i]
            }
        }
       
        return char
    }

    // reverse
    isPalindrome() {
        let reverse = '';
        let string = this.cleanStr();
        for(let i = string.length -1; i >=0 ; i--) {
            reverse += string[i]
        }
        if(reverse === string) {
            return true
        } else {
            return false
        }
    }
}

const reverseStr = new String2("race a car")

console.log(reverseStr.isPalindrome()) // O(n)