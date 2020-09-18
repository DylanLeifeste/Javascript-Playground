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

// JAVA SOLUTION for New Years Chaos       """"JS was too hard"""""
// public class Solution {
//
//     // Complete the minimumBribes function below.
//     static void minimumBribes(int[] q) {
//     int swap = 0;
//     int bribes;
//     int pos = 0;
//     for(int i = q.length-1; i >= 0; i--) {
//     int j = 0;
//
//     bribes =  q[pos]-(pos+1);
//     if (bribes > 2) {
//     System.out.println("Too chaotic");
//     return;
// }
// if (q[i] - 2 > 0){
//     j = q[i] - 2;
// }
//
// while(j <= i) {
//     if (q[j] > q[i]){
//         swap++;
//     }
//     j++;
// }
// pos++;
// }
// System.out.println(swap);
//
// }

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let minSwaps = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== right) {
            const rightIdx = arr.indexOf(right, i);

            arr[rightIdx] = arr[i];

            arr[i] = right;
            ++minSwaps;
        }
    }

    return minSwaps;
}