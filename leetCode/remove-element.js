/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * https://leetcode.com/problems/remove-element/submissions/
 */
var removeElement = function(nums, val) {
    let count = 0
    let output = []
    
    if(nums.length == 1){
        if(nums[0] == val){
            nums.pop()
        }
        return nums.length
    }
    
    while(count < nums.length){        
        if(nums[count] !== val){
            output.push(nums[count])
        }       
        count++
    }
    
    for(let i=0; i < nums.length; i++){
        if(output[i] !== undefined){
            nums[i] = output[i]
        }else{
            nums[i] = '_'
        }
    }
    
    return output.length
};