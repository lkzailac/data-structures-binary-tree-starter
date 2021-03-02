// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');

function buildTree(preorder, inorder) {
    if(!preorder.length && !inorder.length)
        return null;

    let rootValue = preorder[0];
    let root = new TreeNode(rootValue);
    let index = inorder.indexOf(rootValue);

    let leftInorder = inorder.slice(0, index);
    let rightInorder = inorder.slice(index + 1);

    let leftPreorder = preorder.filter(val => leftInorder.includes(val));
    let rightPreorder = preorder.filter(val => rightInorder.includes(val));

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}
