const expect = require('chai').expect
const PondSizes = require('../../problems/trees-and-graphs/PondSizes')
const PondSizesObj = new PondSizes()

describe('PondSizes', function(){
    it('Should return sizes of all ponds in a land', function(){

        // 1. Arrange
        const land = [
            [0, 2, 1, 0],
            [0, 1, 0, 1],
            [1, 1, 0, 1],
            [0, 1, 0, 1]
        ]
        const expectedResult = [2, 4, 1]

        // 2. Act
        const actualResult = PondSizesObj.computePondSizes(land)

        // 3. Assert
        expect(actualResult).to.deep.equal(expectedResult)

    })
})