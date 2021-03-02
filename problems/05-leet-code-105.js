// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');

function buildTree(preorder, inorder) {
    let tree = [preorder.shift()];
    let index = inorder.indexOf(3);

    let left = inorder.slice(0, index);
    let right = inorder.slice(index + 1);

    if(left.length){
        tree.push(left.slice());

    }
}
