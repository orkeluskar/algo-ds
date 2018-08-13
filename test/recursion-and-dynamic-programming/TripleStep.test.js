'use strict'

const expect = require('chai').expect
const TripleStep = require('../../problems/recursion-and-dynamic-programming/TripleStep')
const TripleStepObj = new TripleStep()

describe('Triple Step', function(){
    it('Should return possible ways to rup up staris in 1, 2 or 3 steps', function(){

        // 1. Arrange
        const stairs = 3,
            expectedResult = 4 /* [1, 1, 1], [1, 2], [2, 1], [3] */
        
        // 2. Act
        const actualResult = TripleStepObj.countWays(stairs)

        // 3. Assert
        expect(expectedResult).to.be.equal(actualResult)
    })

    it('Should return possible ways to rup up staris in 1, 2 or 3 steps', function(){

        // 1. Arrange
        const stairs = 4,
            expectedResult = 7 /* [1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [3, 1], [1, 3] */
        
        // 2. Act
        const actualResult = TripleStepObj.countWays(stairs)

        // 3. Assert
        expect(expectedResult).to.be.equal(actualResult)
    })
})