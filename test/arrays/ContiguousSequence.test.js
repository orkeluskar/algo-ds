const expect = require('chai').expect
const ContiguousSequence = require('../../problems/arrays/ContiguousSequence')
const ContiguousSequenceObj = new ContiguousSequence()

describe('ContiguousSequence', function(){

    it('Should return the largest sum of continguous sequence', function(){

        // 1. Arrange
        const list = [2, -8, 3, -2, 4, -10]
        const expectedResult = 5

        // 2. Act
        const actualResult = ContiguousSequenceObj.getMaxSum(list)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult);

    })

    it('Should return the largest sum of continguous sequence', function(){

        // 1. Arrange
        const list = [5, -100, 50, 20, 56, -200, 99]
        const expectedResult = 126

        // 2. Act
        const actualResult = ContiguousSequenceObj.getMaxSum(list)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult);

    })

})