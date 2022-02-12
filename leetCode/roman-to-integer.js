/**
 * @param {string} s
 * @return {number}
 * 
 * https://leetcode.com/problems/roman-to-integer/
 */
var romanToInt = function(s) {
    let valueObject = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0
    let counter = 0
    
    while (counter < s.length){
        
        let firstNumber = valueObject[s[counter]]
        let secondNumber = valueObject[s[counter+1]]
        
        //if secondNumber is undefined
        if(secondNumber == undefined){
            total += firstNumber
            counter ++
        }

        //if first is bigger or same number
        if(firstNumber >= secondNumber){
            total += firstNumber
            counter ++
        }  

        //if second is bigger
        if(secondNumber > firstNumber){
            total += (secondNumber-firstNumber)
            counter += 2
        }
        
    }
    
    return total
};