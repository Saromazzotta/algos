// function insertionSort1(n, arr) {
//     arr[4] = 3
//     for (let i = 0; i > arr[0]; i--){
//         if (arr[4] < arr[i]) {
//             arr[4] = arr[i]
//             console.log(arr)
//         }
//     }
    

// }
// console.log(insertionSort1(5, [1,2,4,5,3]));

// console.log(insertionSort1(5, [2,4,6,8,8]));

//unfinished 

function insertionSort1(n, arr) {
    // Write your code here
    for (let i = 0; i > n - 1; i--){
            if (arr[i] < arr[i] - 1) {
                arr[i] = arr[i]
            } else {
                arr[i] = arr[i] - 1;
            }
    }
    console.log(arr)

}

insertionSort1(5, [1, 2, 4, 5, 3]);