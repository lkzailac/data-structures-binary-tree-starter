// Implement a function that takes in the root of a
// binary tree, traverses it in breadth-first-search
// order, and returns an array containing the values
// in the order you visited them.
const { TreeNode } = require('../problems/01-tree-node.js');

// class LinkedList{
//     constructor()
// }
let array = [];
function bfs(root){
    if(!root) return [];

    let queue = [root];

    while(queue.length){
        let level = queue.length;
        let sub = [];
        for(let i = 0; i < level; i++){
            let top = queue.shift();

            sub.push(top.val);
            if(root.left){
                queue.push(root.left);
            }
            if(root.right){
                queue.push(root.right);
            }
        }
        array.push(...sub)
    }
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
