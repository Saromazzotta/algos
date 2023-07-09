function birthdayCakeCandles(candles) {
    let max = 0; 
    let counter = 0;
    for (let i = 0; i < candles.length; i++){
        if (max < candles[i]) {
            max = candles[i];
        }
    }
    for (let i = 0; i < candles.length; i++) {
        if (max == candles[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(birthdayCakeCandles([4, 4, 1, 3]));