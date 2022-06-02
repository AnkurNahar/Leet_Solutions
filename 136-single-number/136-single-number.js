/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let i, unique, index;
    let length = nums.length;
    for(i = 0; i < length - 1; i++){
        unique = nums.shift();
        index = nums.indexOf(unique);
        if(index === -1){
            return unique;
        }
        nums.splice(index, 1);
    }
    return nums[0];
};