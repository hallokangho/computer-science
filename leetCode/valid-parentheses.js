/**
 * @param {string} s
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-parentheses
 * 
 */
var isValid = function(s) {
    let template = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    let direction = {
        '(' : 'left',
        '[' : 'left',
        '{' : 'left'
    }
    
    //check even
    if(s.length % 2 !== 0){
        return false
    }
    
    let stack = []
    let count = 0
    
    //use stack for valid parentheses
    while(count < s.length){
        if(direction[s[count]] == 'left'){
            stack.push(s[count])
        }else{
            if(template[stack[stack.length-1]] == s[count]){
                stack.pop()
            }else{
                return false
            }
        }
        count ++
    }

    if(stack.length == 0){
        return true
    }else{
        return false
    }
};