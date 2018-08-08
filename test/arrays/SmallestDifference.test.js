const expect = require('chai').expect
const SmallestDifference = require('../../problems/arrays/SmallestDifference')
const SmallestDifferenceObj = new SmallestDifference()

describe('SmallestDifference', function(){
    it('Should find the smallest distance between two arrays', function(){

        // 1. Arrange
        const list1 = [1, 3, 15, 11, 2], 
            list2 = [23, 127, 235, 19, 8]
        
        const expectedResult = 3

        // 2. Act
        const actualResult = SmallestDifferenceObj.findSmallestDifference(list1, list2)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult);

    })
})