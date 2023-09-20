function reverseArray(a) {
    var reversed = [];
    var size = a.length;

    for (let i = size - 1; i >= 0; i--){
        reversed.push(a[i]);
    }

    return reversed; 
}