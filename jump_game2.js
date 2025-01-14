var jump = function(nums) {
    let jumps = 0; // Number of jumps taken
    let current_end = 0; // Current range limit
    let farthest = 0; // Farthest point reachable so far

    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest point reachable
        farthest = Math.max(farthest, i + nums[i]);

        // If we've reached the end of the current range
        if (i === current_end) {
            jumps++; // Increment the jump count
            current_end = farthest; // Update the range limit
        }
    }

    return jumps;
};
