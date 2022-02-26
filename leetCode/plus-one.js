/**
 * @param {number[]} digits
 * @return {number[]}
 * https://leetcode.com/problems/plus-one
 */
var plusOne = function(digits) {    
    let output = digits

    if(digits[digits.length-1] < 9){
        output[digits.length-1] ++
        return output
    }
    
    for(let i=digits.length-1; i>=0; i--){        
        if(digits[i] == 9){
            output[i] = 0
        }
        
        if(digits[i-1] == undefined){
            output.splice(i, 0, 1)
            break
        }else if(digits[i-1] < 9){
            digits[i-1] = digits[i-1]+1
            break
        }
    }
    
    return output
};