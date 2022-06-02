/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openBrackets = [];
    let closingBracket;
    for(let i = 0; i < s.length; i++){
        switch (s.charAt(i)){
            case '(':
                openBrackets.push(1);
                break;
            case '[':
                openBrackets.push(2);
                break;
            case '{':
                openBrackets.push(3);
                break;
            case ')':
                if(openBrackets.length > 0 && openBrackets.pop() == 1){
                    break;
                }
                return false;
            case ']':
                if(openBrackets.length > 0 && openBrackets.pop() == 2){
                    break;
                }
                return false;
            case '}':
                if(openBrackets.length > 0 && openBrackets.pop() == 3){
                    break;
                }
                return false;
        }

    }
    if(openBrackets.length > 0){
        return false;
    }
    return true;
};