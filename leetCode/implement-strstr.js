/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if(haystack.length == 0){
        if(haystack[0] == needle[0]){
            return 0
        }else{
            return -1
        }        
    }

    if(haystack.length < needle.length){
        return -1
    }
    
    if(haystack.length == 1){
        if(haystack[0] == needle[0]){
            return 0
        }
        
        if(needle.length == 0){
            return 0
        }else{
            return -1
        }
    }

    // Have to progress

};