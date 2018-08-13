'use strict'

/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.
*/

class ValidateBST{

    checkBST(root){
        return this.isValid(root, null, null)
    }

    isValid(root, min, max){
        if (root === null) return true

        if ((min !== null && root.val <= min) || (max !== null && root.val > max)) return false

        if (!(this.isValid(root.left, min, root.val)) || !(this.isValid(root.right, root.val, max))) return false

        return true
    }
}

module.exports = ValidateBST