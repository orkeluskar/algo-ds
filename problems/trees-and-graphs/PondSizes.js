'use strict'

/* 
You have and interger matrix represting a plot of land, where the value at that location represents the height above sea level.
A value of zero indicates water. A pond is a regionn of water connected vertically, horizontally, or diagonally.
The size of the pond is the total number of connected water cells. Write a method to computer the sizes of all ponds in the matrix.

EXAMPLE
Input:
    0 2 1 0
    0 1 0 1
    1 1 0 1
    0 1 0 1
Output: 2, 4, 1
*/

class PondSizes{

    /***
     * @param {number[]} land
     * @return {number[]}
     */
    computePondSizes(land){
        let pondSizes = []
        for (let r = 0; r < land.length; r++){
            for (let c = 0; c < land[r].length; c++){
                if (land[r][c] === 0){
                    let size = this.computeSize(land, r, c)
                    pondSizes.push(size)
                }
            }
        }
        return pondSizes
    }

    /** 
     * @param {number[]} land
     * @param {number} row
     *  @param {number} col
     * @return {number}
     */
    computeSize(land, row, col){
        /* If array out of bounds or already visited or is not water */
        if (row < 0 || col < 0 || row >= land.length || col > land[row].length || land[row][col] !== 0){
            return 0;
        }

        let size = 1
        land[row][col] = - 1 // Mark visited
        for (let dr = -1; dr <= 1; dr += 1){
            for (let dc = -1; dc <= 1; dc += 1){
                size += this.computeSize(land, row + dr, col + dc)
            }
        }
        return size
    }

}

module.exports = PondSizes