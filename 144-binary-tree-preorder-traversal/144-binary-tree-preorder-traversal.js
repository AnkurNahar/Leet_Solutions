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
var preorderTraversal = function(root) {
    let stack = [], vals = [], current;
    if(root){
        stack.push(root);
        vals.push(root.val);
    }

    while(stack.length){
        current = stack[stack.length - 1];
        if(current.left && current.left.val != 101){
            vals.push(current.left.val);
            current.left.val = 101;
            stack.push(current.left);
        } else if(current.right && current.right.val != 101){
            vals.push(current.right.val);
            current.right.val = 101;
            stack.push(current.right);
        } else {
            stack.pop();
        }
    }
    return vals;
};