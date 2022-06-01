/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let divisor, count = 2;
    for(divisor = 2; divisor < n; divisor++){
        if(n % divisor === 0){
            count++;
        }
    }
    
    if (count === 3){
        return true;
    }
    return false;
};