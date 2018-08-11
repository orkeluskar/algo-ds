const expect = require('chai').expect
const RobotInGrid = require('../../problems/recursion-and-dynamic-programming/RobotInGrid')
const RobotInGridObj = new RobotInGrid()
const Point = require('../../lib/Point')

describe('Robot in A Grid', function(){
    it('Should return the path from the top left to the bottom right.', function(){
        
        // 1. Arrange
        const maze = [
            [true, true, true],
            [true, false, true],
            [true, true, true]
        ]
        const expectedResult = [
            new Point(0, 0),
            new Point(1, 0),
            new Point(2, 0),
            new Point(2, 1),
            new Point(2, 2)
        ]

        // 2. Act
        const actualResult = RobotInGridObj.getPath(maze)

        // 3. Assert
        expect(expectedResult).to.deep.equal(actualResult)
            
    })
})