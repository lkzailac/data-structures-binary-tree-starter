// Implement a function that takes in the root of a
// binary tree, traverses it in breadth-first-search
// order, and returns an array containing the values
// in the order you visited them.
const { TreeNode } = require('../problems/01-tree-node.js');


let array = [];
function bfs(root){
    if(!root) return [];
    // if(array.length === 0) {
    //     array.push(root.val);
    // }
    //log root
    //get rid of root
    array.push(root.val)
    //left child becomes root (recurse)
    bfs(root.left);
    //right child becomes root
    bfs(root.right);

    return array;
}


let root = new TreeNode('a');
        let b = new TreeNode('b');
        let c = new TreeNode('c');
        let d = new TreeNode('d');
        let e = new TreeNode('e');
        let f = new TreeNode('f');

        root.left = b;
        root.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

console.log(bfs(root));


module.exports = { bfs };
