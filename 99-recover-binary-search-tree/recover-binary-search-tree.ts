/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = null;
    let curr: TreeNode | null = root;
    let stack: TreeNode[] = [];
    
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        
        curr = stack.pop()!;
        
        if (prev && prev.val > curr.val) {
            if (!first) {
                first = prev;
            }
            second = curr;
        }
        
        prev = curr;
        curr = curr.right;
    }
    
    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
};