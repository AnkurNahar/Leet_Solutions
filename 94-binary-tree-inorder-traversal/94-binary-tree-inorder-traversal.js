/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let vals = [], stack = [], current;
    if(root){
        stack.push(root);
    }
    while(stack.length){
        current = stack[stack.length -1];
        if(current.left && current.left.val != 101){
            stack.push(current.left)
        } else {
            vals.push(current.val);
            current.val = 101;
            stack.pop();
            if(current.right){
                stack.push(current.right);
            }
            
        }
    }
    return vals;
};