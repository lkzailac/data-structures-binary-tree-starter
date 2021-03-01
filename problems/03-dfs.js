// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function dfs(root, array=[]){
    if(!root)
        return [];
    array.push(root.val)
    dfs(root.left, array);
    dfs(root.right, array);
    return array;
}

module.exports = { dfs };
