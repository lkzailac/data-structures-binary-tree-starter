// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.

function preOrderArray(root, array = []) {
    if(!root)
        return [];
    array.push(root.val)
    preOrderArray(root.left, array);
    preOrderArray(root.right, array);
    return array;
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
let array = [];
function inOrderArray(root) {
    if(!root)
        return [];
    inOrderArray(root.left);
    array.push(root.val);
    inOrderArray(root.right);
    return array;
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
let arr = [];
function postOrderArray(root) {
    if(!root)
        return [];
    postOrderArray(root.left);
    postOrderArray(root.right);
    arr.push(root.val);
    return arr;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
