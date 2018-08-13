'use strict'

const expect = require('chai').expect
const HeavyPill = require('../../problems/math-logic-puzzles/HeavyPill')
const HeavyPillObj = new HeavyPill()

describe('HeavyPill', function(){
    it('Should return the bottle # which cotanis pills of 1.1 gram', function(){
        
        // 1. Arrange
        /* Using numbering from 1, in this problem */
        const bottles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1, 1, 1, 1, 1, 1, 1, 1],
            expectedResult = 13
        
        // 2. Act
        const actualResult = HeavyPillObj.findHeavy(bottles)

        // 3. Expect
        expect(expectedResult).to.be.equal(actualResult)
    })
})