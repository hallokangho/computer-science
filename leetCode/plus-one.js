/**
 * @param {number[]} digits
 * @return {number[]}
 * https://leetcode.com/problems/plus-one/
 */
var plusOne = function(digits) {
    console.log('digits: ', digits)
    
    let output = digits

    if(digits[digits.length-1] < 9){
        output[digits.length-1] ++
        return output
    }    
    
    // Need to progress
};