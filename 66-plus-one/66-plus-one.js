/**
 * @param {number[]} digits
 * @return {number[]}

var plusOne = function(digits) {
    let num = Number(digits.join(''));
    num++;
    return String(num).split('');
};
 */

var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] != 9){
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    let arr = new Array(digits.length).fill(0);
    arr.unshift(1);
    return arr;
};