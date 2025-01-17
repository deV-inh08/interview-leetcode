var isPalindrome = function(s) {
    // Step 1: Convert string to lowercase and remove non-alphanumeric characters
    const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Step 2: Check if the filtered string is the same as its reverse
    const reversedString = filteredString.split('').reverse().join('');
    
    return filteredString === reversedString;
};