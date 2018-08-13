'use strict'

const expect = require('chai').expect
const FactorialZeroes = require('../../problems/math-logic-puzzles/FactorialZeroes')
const FactorialZeroesObj = new FactorialZeroes()

describe('FactorialZeroes', function(){
    it('Should Count the number of trailing zeroes in n factorial', function(){
        
        // 1.Arrange
        const number = 5,
            expectedResult = 1

        // 2. Act
        const actualResult = FactorialZeroesObj.trailingZeroes(number)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult);

    })

    it('Should Count the number of trailing zeroes in n factorial', function(){
        
        // 1.Arrange
        const number = 4,
            expectedResult = 0

        // 2. Act
        const actualResult = FactorialZeroesObj.trailingZeroes(number)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult);

    })

    it('Should Count the number of trailing zeroes in n factorial', function(){
        
        // 1.Arrange
        const number = 10,
            expectedResult = 2

        // 2. Act
        const actualResult = FactorialZeroesObj.trailingZeroes(number)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult);

    })
})