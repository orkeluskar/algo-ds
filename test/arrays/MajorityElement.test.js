'use strict'

const expect = require('chai').expect
const MajorityElement = require('../../problems/arrays/MajorityElement')
const MajorityElementObj = new MajorityElement()

describe('MajorityElement', function(){
    it('Should return an element that makes up more than half of the array', function(){

        // 1. Arrange
        const list = [1, 2, 5, 9, 5, 9, 5, 5, 5],
            expectedResult = 5
        
        // 2. Act
        const actualResult = MajorityElementObj.getMajorityElement(list)

        // 3. Assert
        expect(expectedResult).to.be.equal(actualResult)

    })

    it('Should return an element that makes up more than half of the array', function(){

        // 1. Arrange
        const list = [],
            expectedResult = -1
        
        // 2. Act
        const actualResult = MajorityElementObj.getMajorityElement(list)

        // 3. Assert
        expect(expectedResult).to.be.equal(actualResult)

    })

    it('Should return an element that makes up more than half of the array', function(){

        // 1. Arrange
        const list = [3, 1, 7, 1, 3, 7, 3, 7, 1, 7, 7],
            expectedResult = -1
        
        // 2. Act
        const actualResult = MajorityElementObj.getMajorityElement(list)

        // 3. Assert
        expect(expectedResult).to.be.equal(actualResult)

    })
})