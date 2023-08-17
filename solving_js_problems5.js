//  create a function that checks if a number (n) is divisible by two numbers (x) and (y). All inputs are positive, non-zero numbers.

function isDivisible(n, x, y){
    const result1 = n/x;
    const result2 = n/y;
    if(result1 % 1 === 0 && result2 % 1 === 0){
        return true;
    } else {
        return false;
    }
}
