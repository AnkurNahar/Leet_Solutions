/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i, indexes0 = [];
    if (nums.length > 1) {
        for(i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                indexes0.push(i);
            } else {
                if(indexes0.length > 0 && i > indexes0[0]){
                    nums[indexes0[0]] = nums[i];
                    indexes0.shift();
                    nums[i] = 0;
                    indexes0.push(i);
                }
            }
        }
    }
    
};