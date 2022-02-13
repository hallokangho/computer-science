/**
 * @param {string[]} strs
 * @return {string}
 * 
 * https://leetcode.com/submissions/detail/640514081/
 */
var longestCommonPrefix = function(strs) {
    
    let firstString = strs[0]
    let prefixMap = new Map();
    
    //init firstString's map
    //On
    for(let i=0; i<firstString.length; i++){
        prefixMap.set(i, {key: firstString[i], count: 0})
    }
    
    //increase same character's count in strs array
    //On2
    for(let i=0; i<strs.length; i++){
        for(let j=0; j<strs[i].length; j++){

            if(prefixMap.has(j)){
                if(prefixMap.get(j).key == strs[i][j]){
                    prefixMap.get(j).count++
                }                
            }
            
        }
    }
    
    // console.log('prefixMap-counted : ', prefixMap)
    
    let result = ""
    
    //return same character's in prefixMap 
    for (let [key, value] of prefixMap) {
        if(value.count == strs.length){
            result += value.key
        }else{
            break
        }
    }
    
    // console.log('result : ', result)
    
    return result
};