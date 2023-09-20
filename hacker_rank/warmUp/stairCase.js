// function staircase(n) {
//     for (var i = 0; i < n; i++){
//         for (var j = 0; j < i; j++){
//             console.log(" #")
//         }
//     }

// }

// staircase(4);

// function staircase(n) {
//     for (let i = 0; i < n; i++){
//         let string = ""; 
//         for
//     }
// }

function staircase(n) {
    var height = n;

    for (var i = 0; i < height; i++){
        var row = "";
        for (var j = 0; j < height; j++) {
            if (i + j > height - 2) {
                row += "#";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

staircase(6);

// you're printing a square that consist of # or spaces, not a staircase