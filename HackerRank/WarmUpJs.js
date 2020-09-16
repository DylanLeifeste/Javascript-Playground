
// Sock Merchant Solution WORKING

function sockMerchant(n, ar) {
    let sorted = ar.sort( (a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let count = 0;
    let i = 0;

    while (true) {
        if (i + 2 < c.length && c[i + 2] == 0) {
            i += 2;
        } else if (i + 1 < c.length) {
            i++;
        } else {
            break;
        }
        count++;
    }
    return count;

}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let x = Math.floor(n / s.length);
    let count = (s.split("a").length - 1) * x;
    let rem = n % s.length;

    for (var i = 0; i < rem; i++) {
        if (s.charAt(i) === "a") {
            count++;
        }
    }
    return count;

}



