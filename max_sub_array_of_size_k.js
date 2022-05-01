/**
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * Example 1:
 * Input: [2, 1, 5, 1, 3, 2], k=3 
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */

function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0.0
    let windowSum = 0

    for( let i = 0; i < arr.length - k + 1; i++ ) {

        for ( let j = i; j < i + k; j++ ) {
            windowSum += arr[j]
        }

        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum

}

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]))
