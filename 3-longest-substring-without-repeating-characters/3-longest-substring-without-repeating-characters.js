/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s){return 0}
    let sub = s[0], size = 1, i, j, max  = 1, index;
    for(i = 1; i < s.length; i++){
        index = sub.indexOf(s[i]);
        if(index == -1){
            sub = sub + s[i];
            size++;            
        } else {
            if(size > max){
                max = size; 
            }
            sub = sub.slice(index + 1);
            sub = sub + s[i];
            size = sub.length;
        }

    }
    if(size > max){
       return size; 
    }
    return max;
};