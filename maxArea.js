function maxArea(height) {
    let left = 0;                   // Pointer starting from the leftmost line
    let right = height.length - 1;  // Pointer starting from the rightmost line
    let maxArea = 0;                // Variable to track the maximum area

    while (left < right) {
        // Calculate the area between the two lines
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;

        // Update the maximum area if the current one is greater
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++; // Move left pointer forward to find a potentially taller line
        } else {
            right--; // Move right pointer backward to find a potentially taller line
        }
    }

    return maxArea;
}

// Example usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1]));                      // Output: 1
console.log(maxArea([4, 3, 2, 1, 4]));             // Output: 16
console.log(maxArea([1, 2, 1]));                   // Output: 2
