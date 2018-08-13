'use strict'

/* 
Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
The robot can move in two directions, right and down but certain cells are "off limits" such that the robot cannot step on them. 
Design an algorithm to find a path for the robot from the top left to the bottom right.
*/
const Point = require('../../lib/Point')

class RobotInGrid{
    
    /**
     * @param {boolean[][]} maze
     * @return {Point[]}
     */
    getPath(maze){
        if (maze === null || maze.length === 0) {
            return null
        }

        let cache = new Map(),
            path = [],
            row = maze.length - 1,
            col = maze[0].length - 1

        if (this.getPathHelper(maze, row, col, path, cache)){
            return path
        }
        return null
    }

    /**
     * @param {number[][]} maze 
     * @param {number} row 
     * @param {number} col 
     * @param {number[]} path 
     * @param {Map <Point, boolean>} cache 
     * @return {boolean} 
     */
    getPathHelper(maze, row, col, path, cache){
        
        /* if out of bounds or not available */
        if (row < 0 || col < 0 || !maze[row][col]){
            return false
        }

        const p = new Point(row, col)
        
        /* If we've already visited this cell, return */
        if (cache.has(p)){
            return cache.get(p)
        }

        const isAtOrigin = (row === 0 && col === 0)
        let success = false

        /* If, there's a path from the start to my current location, add my location*/
        if( isAtOrigin || this.getPathHelper(maze, row, col - 1, path, cache) || this.getPathHelper(maze, row - 1, col, path, cache)){
            path.push(p)
            success = true
        }

        cache.set(p, success) // Cache result
        return success
    }
}

module.exports = RobotInGrid