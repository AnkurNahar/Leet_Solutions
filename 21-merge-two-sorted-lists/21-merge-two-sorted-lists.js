/**
 * Definition for singly-linked list.
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
    let nodeA = list1, nodeB = list2, merged, mergedHead, li_A = 0;
    
    if(nodeA && nodeB){
        if(nodeA.val < nodeB.val){
            mergedHead = nodeA;
            merged = nodeA;
            nodeA = nodeA.next;
            li_A= 1;
        } else {
            mergedHead = nodeB;
            merged = nodeB;
            nodeB = nodeB.next;
        }
    } else if(nodeA){
        return nodeA;
    } else if(nodeB){
        return nodeB;
    } else return null;
    
    while(nodeA && nodeB){
        if(nodeA.val < nodeB.val){
            if(li_A){
                merged = nodeA;
            } else {
                merged.next = nodeA;
                merged = nodeA;
                li_A = 1;
            }
            nodeA = nodeA.next;
        } else {
            if(li_A){
                merged.next = nodeB;
                merged = nodeB;
                li_A = 0;
            } else {
                merged = nodeB;
            }
            nodeB = nodeB.next;
        }
    }
    
    if(nodeA){
        merged.next = nodeA;
    } else {
        merged.next = nodeB;
    }
    return mergedHead;
};