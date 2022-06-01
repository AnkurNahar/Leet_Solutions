/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length == 2){
        return [0, 1];
    } else {
        let i;
        let evens = [];
        let odds = [];
        let targetIsEven = checksAsEven(target);
        let num0IsEven = checksAsEven(nums[0]);
        
        for(i = 1; i < nums.length; i++){ //seperates odd and even, checks all with index 0
            if(checksAsEven(nums[i])){
                if(targetIsEven && num0IsEven && matchesWithTarget(target, nums[0], nums[i])){
                    return [0, i];   
                } else if(!targetIsEven && !num0IsEven && matchesWithTarget(target, nums[0], nums[i])){
                    return [0, i]; 
                }
                evens.push(i);
            } else {
                if(targetIsEven && !num0IsEven && matchesWithTarget(target, nums[0], nums[i])){
                    return [0, i];   
                } else if(!targetIsEven && num0IsEven && matchesWithTarget(target, nums[0], nums[i])){
                    return [0, i]; 
                }
                odds.push(i);
            }
        } 
        
        let j;
        for(i = 1; i < nums.length; i++){
            if((checksAsEven(nums[i]) && targetIsEven) || (!checksAsEven(nums[i]) && !targetIsEven)){ // num and target both odd or both even
                for(j = 0; j < evens.length; j++){
                    if(i != evens[j] && matchesWithTarget(target, nums[i], nums[evens[j]])){
                        return [i, evens[j]];
                    }
                }
            } else if((checksAsEven(nums[i]) && !targetIsEven) || (!checksAsEven(nums[i]) && targetIsEven)){ //num even, target odd or vice versa
                for(j = 0; j < odds.length; j++){
                    if(i != odds[j] && matchesWithTarget(target, nums[i], nums[odds[j]])){
                        return [i, odds[j]];
                    }
                }
            }
        }
    }

};

var checksAsEven = (num) => {
    return (num % 2 === 0);
}

var matchesWithTarget = (target, num1, num2)  => {
    return (target === num1 + num2);
}