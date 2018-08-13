'use strict'

/*
Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by one.

E.g:
1. Balanced Tree
       4
     /    \
    2      6
   / \    / \
  1   3  5   7  

2. Balanced Tree
        4
     /    \
    2      6
   / \  
  1   3  

2. Imbalanced Tree
       4
      / 
     2
    / \
   1   3 
*/


class CheckBalancedSlower{

    /*
    This alogrithm is O(N log N) since each node is "touched" once per node above it.
    */
    getHeight(root){
        if (root === null) return -1  // Base case
        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1
    }

    isBalanced(root){
        if (root === null) return true  // Base case

        let heightDiff = this.getHeight(root.left) - this.getHeight(root.right)
        if (Math.abs(heightDiff) > 1){
            return false
        }
        else{ // Recurse
            return this.isBalanced(root.left) && this.isBalanced(root.right)
        }
    }
}

class CheckBalanced{

    /*
    This code runs in O(N) time and O(H) space, where H is the height of the tree.
    */
    checkHeight(root){
        if (root === null) return -1

        let leftHeight = this.checkHeight(root.left)
        if (leftHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER // Pass error up

        let rightHeight = this.checkHeight(root.right)
        if (rightHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER // Pass error up

        let heightDiff = leftHeight - rightHeight
        if (Math.abs(heightDiff) > 1){
            return Number.MIN_SAFE_INTEGER // Found error -> pass it back
        }
        else{
            return Math.max(leftHeight, rightHeight) + 1
        }
    }

    isBalanced(root){
        return this.checkHeight(root) !== Number.MIN_SAFE_INTEGER
    }
}

module.exports = CheckBalanced