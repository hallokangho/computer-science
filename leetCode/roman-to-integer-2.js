/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanPositive = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let sum = 0
    
    for(let i=0; i<s.length; i++){
        let first = romanPositive[s[i]]
        let second = romanPositive[s[i+1]]

        if(first >= second || second === undefined){
            sum += romanPositive[s[i]]
        }else{
            sum -= romanPositive[s[i]]
        }              
    }
    
    return sum   
};