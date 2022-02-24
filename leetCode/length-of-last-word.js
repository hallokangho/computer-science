/**
 * @param {string} s
 * @return {number}
 *
 * https://leetcode.com/problems/length-of-last-word/
 *
 */
var lengthOfLastWord = function(s) {
  
    let wordArray = s.split(' ')    
    
    for(let i=wordArray.length-1; i>=0; i--){
        if(wordArray[i].length > 0){
            return wordArray[i].length
        }
    }
  
};