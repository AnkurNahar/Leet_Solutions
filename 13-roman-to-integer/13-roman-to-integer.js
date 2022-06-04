/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    
    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case 'I':
                if(i != s.length - 1 && (s[i+1] == 'V' || s[i+1] == 'X')){
                    num--;
                    break;
                }
                num++;
                break;
            case 'X':
                if(i != s.length - 1 && (s[i+1] == 'L' || s[i+1] == 'C')){
                    num-=10;
                    break;
                }
                num+=10;
                break;
            case 'C':
                if(i != s.length - 1 && (s[i+1] == 'D' || s[i+1] == 'M')){
                    num-=100;
                    break;
                }
                num+=100;;
                break;
            case 'V':
                num += 5;
                break;
            case 'L':
                num += 50;
                break;
            case 'D':
                num += 500;
                break;
            case 'M':
                num += 1000;
                break;
            
        }
    }
    return num;

};