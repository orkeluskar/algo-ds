const expect = require('chai').expect
const Node = require('../../lib/TreeNode')
const CheckBalanced = require('../../problems/trees-and-graphs/CheckBalanced')
const CheckBalancedObj = new CheckBalanced()

describe('CheckBalanced', function(){
    it('Should check if the tree is Balanced', function(){

        //1. Arrange
        //        4
        //     /     \
        //    2       6
        //   / \     / \
        //  1   3   5   7  
        let root = new Node(4),
            n1 = new Node(2),
            n2 = new Node(6),
            n3 = new Node(1),
            n4 = new Node(3),
            n5 = new Node(5),
            n6 = new Node(7)
        root.right = n2
        root.left = n1
        n1.left = n3
        n1.right = n4
        n2.left = n5
        n2.right = n6

        const expectedResult = true

        // 2. ACT
        const actualResult = CheckBalancedObj.isBalanced(root)
        
        // 3. ASSERT
        expect(actualResult).to.be.equal(expectedResult);
    })

    it('Should check if the tree is Balanced', function(){

        //1. Arrange
        /*      4
               / 
              2
             / \
            1   3
        */
        let root = new Node(4),
            n1 = new Node(2),
            n3 = new Node(1),
            n4 = new Node(3)
        root.left = n1
        n1.left = n3
        n1.right = n4

        const expectedResult = false

        // 2. ACT
        const actualResult = CheckBalancedObj.isBalanced(root)
        
        // 3. ASSERT
        expect(actualResult).to.be.equal(expectedResult);
    })
})