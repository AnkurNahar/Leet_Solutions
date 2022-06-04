/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let j, prefix = '', str = strs[0], current;
    for(let i = 0; i < str.length; i++){
        current = str[i];
        for(j = 1; j < strs.length; j++){
            if(!strs[j][i] || (strs[j][i] && strs[j][i] != current)){
                return prefix;
            }
        }        
        prefix += current;
    }        
    return prefix;
};