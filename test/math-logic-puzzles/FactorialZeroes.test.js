const expect = require('chai').expect
const FactorialZeroes = require('../../problems/math-logic-puzzles/FactorialZeroes')
const FactorialZeroesObj = new FactorialZeroes()

describe('FactorialZeroes', function(){
    it('Should Count the number of trailing zeroes in n factorial', function(){
        
        // 1.Arrange
        let number = 5

        // 2. Act
        const numberOfZeroes = FactorialZeroesObj.trailingZeroes(number)

        // 3. Assert
        expect(numberOfZeroes).to.be.equal(1);

    })

    it('Should Count the number of trailing zeroes in n factorial', function(){
        
        // 1.Arrange
        let number = 4

        // 2. Act
        const numberOfZeroes = FactorialZeroesObj.trailingZeroes(number)

        // 3. Assert
        expect(numberOfZeroes).to.be.equal(0);

    })

    it('Should Count the number of trailing zeroes in n factorial', function(){
        
        // 1.Arrange
        let number = 10

        // 2. Act
        const numberOfZeroes = FactorialZeroesObj.trailingZeroes(number)

        // 3. Assert
        expect(numberOfZeroes).to.be.equal(2);

    })
})