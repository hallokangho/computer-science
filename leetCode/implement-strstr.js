/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * https://leetcode.com/problems/implement-strstr
 */
var strStr = function(haystack, needle) {

    //Exception : needle is longer then haystack
    if(haystack.length < needle.length){
        return -1
    }
    
    //Exception : needle.length is 0
    if(needle.length == 0){
        return 0
    }    
    
    //Find first same letter and campare haystack and needle
    for(let i=0; i<haystack.length; i++){
        if(haystack[i] == needle[0]){
            if(haystack.substr(i, needle.length) == needle){
                return i
            }
        }
    }
    
    return -1
};