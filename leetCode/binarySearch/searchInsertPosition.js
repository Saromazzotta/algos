
// var searchInsert = function (nums, target) {
//     let lo = 0, hi = nums.length - 1;
//     while (lo < hi) {
//         let mid = lo + Math.floor((hi - lo + 1) / 2);
//         if (target < nums[mid]) {
//             hi = mid -1
//         } else {
//             lo = mid;
//         }
//     }
//     return nums[lo] == target ? lo : -1;
// };


// searchInsert([1, 3, 5, 6], 5);

// Solution Article
//https://leetcode.com/problems/search-insert-position/solutions/423166/binary-search-101/


var searchInsert = function (nums, target) {
    var start = 0;
    var end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
};


/*
Solution
https://leetcode.com/problems/search-insert-position/solutions/2551777/my-45ms-javascript-solution/
*/