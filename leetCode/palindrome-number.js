/**
 * @param {number} x
 * @return {boolean}
 * 
 * https://leetcode.com/problems/palindrome-number
 */
var isPalindrome = function(x) {

    let numberArr = x.toString()
    let numberArrLength = numberArr.length
    
    //When x is minus value
    if(x < 0){
        return false
    }
    
    //When numberArr's length is 1
    if(numberArrLength == 1){
        return true
    }
    
    //When numberArr's length is 2
    if(numberArrLength == 2){
        if(numberArr[0] === numberArr[1]){
            return true
        }else{
            return false
        }
    }
    
    let counter = 1
    
    //When numberArr's length is over 2
    for(let i=0; i<numberArrLength/2; i++){
        console.log(i, ' A : ', numberArr[i], ' B: ', numberArr[numberArrLength-counter])
       
        if( (numberArrLength % 2) == 0){ //When length is even         
            if(numberArr[i] != numberArr[numberArrLength-counter]){
                return false
            }       
        }else{ //When length is odd          
            if(numberArrLength-counter > numberArrLength/2){
                if(numberArr[i] !== numberArr[numberArrLength-counter]){
                    return false
                }     
            }        
        }

        counter++

    }

    return true
    
};