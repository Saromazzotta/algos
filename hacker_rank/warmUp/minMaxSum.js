function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 5) {
            minSum += arr[i]
        } else if(arr[i] > 1){
            maxSum =+ arr[i]
        }
    }

    console.log(minSum, maxSum);
    // return 
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));

// Unfinished 