'use strict'

const expect = require('chai').expect
const SumSwap = require('../../problems/arrays/SumSwap')
const SumSwapObj = new SumSwap()

describe('SumSwap', function(){
    it('Should return a pair of values that when swapped gives two arrays equal sum', function(){

        // 1. Arrange
        const list1 = [4, 1, 2, 1, 1, 2],
            list2 = [3, 6, 3, 3]
        const expectResult = [4, 6]

        // 2. Act
        const actualResult = SumSwapObj.findSwapValues(list1, list2)

        // 3. Assert
        expect(actualResult).to.deep.equal(expectResult)

    })

    it('Should return a pair of values that when swapped gives two arrays equal sum', function(){

        // 1. Arrange
        const list1 = [4, 1, 2, 1, 1, 2, 3],
            list2 = [3, 6, 3, 3]
        const expectResult = []

        // 2. Act
        const actualResult = SumSwapObj.findSwapValues(list1, list2)

        // 3. Assert
        expect(actualResult).to.deep.equal(expectResult)

    })
})