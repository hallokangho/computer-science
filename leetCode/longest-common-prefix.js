/**
 * @param {string[]} strs
 * @return {string}
 * 
 * https://leetcode.com/submissions/detail/640514081/
 */
var longestCommonPrefix = function(strs) {
    
    let prefixMap = new Map();
    
    //increase same character's count in strs array
    //On2
    for(let i=0; i<strs.length; i++){
        for(let j=0; j<strs[i].length; j++){   
           
            if(i == 0){ //init prefix map
                prefixMap.set(j, {key: strs[0][j], count: 0})
            }

            if(prefixMap.has(j)){
                if(prefixMap.get(j).key == strs[i][j]){
                    prefixMap.get(j).count++
                }                
            }
            
        }
    }
    
    let result = ""
    
    //return same character's in prefixMap 
    for (let [key, value] of prefixMap) {
        if(value.count == strs.length){
            result += value.key
        }else{
            break
        }
    }
    
    return result
};