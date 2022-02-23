/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * https://leetcode.com/problems/search-insert-position
 *
 */
var searchInsert = function(nums, target) {
    let position = 0
    
    for(let i=0; i<nums.length; i++){        
        if(nums[i] < target){
            position = i+1
        }    
    }
    
    return position
};