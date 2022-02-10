/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * https://leetcode.com/problems/two-sum/
 */
var twoSum = function(nums, target) {
    let output = new Array(2)
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let sumOfTarget = nums[i] + nums[j]
            
            if(target === sumOfTarget){
                output[0] = i
                output[1] = j
                
                return output
            }
        }
    }
    return -1
};