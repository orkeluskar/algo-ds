'use-strict'

const expect = require('chai').expect
const LRUCache = require('../../problems/design/LRUCache')
const size = 2
const cache = new LRUCache(size)

describe('LRU Cache', function(){
    it('Adding Key, value to the Cache', function(){

        // 1. Arrange
        let key = 13,
            value = "KeyChain",
            expectedResult = "KeyChain"
        
        
        // 2. Act
        cache.setKeyValue(key, value)
        const actualResult = cache.getValue(key)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult)

    })

    it('Adding 2nd Value', function(){

        // 1. Arrange
        let key = 14,
            value = "SomeValue",
            expectedResult = "SomeValue"
        
        
        // 2. Act
        cache.setKeyValue(key, value)
        const actualResult = cache.getValue(key)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult)

    })

    it('Adding 3nd Value', function(){

        // 1. Arrange
        let key = 15,
            value = "15",
            expectedResult = "15"
        
        
        // 2. Act
        cache.setKeyValue(key, value)
        const actualResult = cache.getValue(key)

        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult)

    })

    it(`Checking the first value in cache of size ${size}`, function(){

        // 1. Arrange
        let key = 13,
            value = "KeyChain",
            expectedResult = null
        
        // 2. Act
        const actualResult = cache.getValue(key)
        
        // 3. Assert
        expect(actualResult).to.be.equal(expectedResult)

    })


})