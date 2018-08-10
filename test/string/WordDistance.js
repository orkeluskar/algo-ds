const expect = require('chai').expect
const WordDistance = require('../../problems/string/WordDistance')
const WordDistanceObj = new WordDistance()

describe('WordDistance', function(){
    it('Should return shortest distance in terms of numbers of words in a Word Array', function(){

        // 1. Arrange
        const file = "Hi, I have to the Carribean in May. But, I would like to be there in December too." 
        const words = file.split(" "),
            word1 = "I",
            word2 = "to",
            expectedResult = {
                location1: 1, 
                location2: 3
            }
        
        // 2. Act    
        const actualResult = WordDistanceObj.findClosest(words, word1, word2)
    
        // 3. Assert
        expect(expectedResult).to.deep.equal(actualResult)
            
    })

    it('Should return shortest distance in terms of numbers of words in a Word Array', function(){

        // 1. Arrange
        const file = "Testing code with this ever-longing use of the words, which you might think are just for the test case of this code base. Yes, you're right in that, Kudos!"
        const words = file.split(" "),
            word1 = "code"
            word2 = "the"
            expectedResult = {
                location1: 21,
                location2: 16
            }
        
        // 2. Act
        const actualResult = WordDistanceObj.findClosest(words, word1, word2)
        // 3. Assert
        expect(expectedResult).to.deep.equal(actualResult)
    }) 
})