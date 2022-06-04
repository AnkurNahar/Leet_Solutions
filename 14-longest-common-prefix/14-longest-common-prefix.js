/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
    let i, prefix;
    for (i = strs[0].length; i > 0; i--) {
        prefix = strs[0].substring(0,i);
        if (strs.every(item => {
            return item.substring(0,i) === prefix;
        })) {
            return prefix;  
        }
    }

    return "";
};