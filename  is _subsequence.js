var isSubsequence = function(s, t) {
    let i = 0; // Pointer for string `s`
    let j = 0; // Pointer for string `t`
    
    // Traverse through string `t` while checking for characters in `s`
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++; // Move pointer `i` if characters match
        }
        j++; // Always move pointer `j` in `t`
    }
    
    // If `i` has reached the end of `s`, all characters in `s` were found in `t`
    return i === s.length;
};