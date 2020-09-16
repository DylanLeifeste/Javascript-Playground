// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sum = -63; // max value of -9 * 7
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            let topRow = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
            let middleRow = arr[row + 1][col + 1];
            let bottomRow = arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
            if (topRow + middleRow + bottomRow > sum) {
                sum = topRow + middleRow + bottomRow;
            }
        }
    }
    return sum;

}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    a = a.concat(a.splice(0,d));
    return a;
}