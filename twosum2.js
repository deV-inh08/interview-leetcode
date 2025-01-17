function twoSum(numbers, target) {
    let left = 0;                  // Pointer starting from the beginning
    let right = numbers.length - 1; // Pointer starting from the end

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            // Return the indices as 1-based
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; // Move the left pointer forward to increase the sum
        } else {
            right--; // Move the right pointer backward to decrease the sum
        }
    }

    // Edge case: If no solution is found (though not possible as per the problem constraints)
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]
console.log(twoSum([2, 3, 4], 6));      // Output: [1, 3]
console.log(twoSum([-1, 0], -1));       // Output: [1, 2]
