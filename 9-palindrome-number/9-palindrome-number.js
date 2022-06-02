/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let i, j;
    const palindrome = x.toString();
    for(i = 0, j = palindrome.length -1; i < j; i++, j--){
        if(palindrome.charAt(i) != palindrome.charAt(j)){
            return false;
        }
    }
    return true;
};