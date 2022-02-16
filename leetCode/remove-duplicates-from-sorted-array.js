/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 */
var removeDuplicates = function(nums) {   
    let count = 1
    let output = [nums[0]] //first value init
    let sliceEnd = 0
    
    //Get unique numbers from nums array
    while(count < nums.length){
        if(output[sliceEnd] !== nums[count]){
            output.push(nums[count])
            sliceEnd ++
        }else{
            nums[count] = '_'
        }     
        count++
    }
    
    //Insert output value to nums array
    for(let i=0; i<output.length; i++){
        nums[i] = output[i]
    }

    return sliceEnd+1
};