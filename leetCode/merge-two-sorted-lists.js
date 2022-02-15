/**
 * Definition for singly-linked list.
 * 
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    
    let obj1 = JSON.parse(JSON.stringify(list1))
    let obj2 = JSON.parse(JSON.stringify(list2))
    
    let merged = []

    while(obj1.next !== null || obj2.next !== null){
        
        if(obj1.val < obj2.val){
            merged.push(obj1.val)
            obj1 = obj1.next
        }else{
            merged.push(obj2.val)
            obj2 = obj2.next
        }  
        
    }

    //Need to check javascript linked list

};