'use strict'

/* 
A child is running up a staircase with n steps an can hop either 1 step, 2 steps, or 3 steps at a time. 
Implement a method to count how many possible ways the child can run up the stairs.
*/

class TripleStepSlower{
    /**
     * @param {number} n
     * @return {number} 
     */
    countWays(n){
        /* Runtime is exponential ~ O(n^3) */
        if (n < 0) {
            return 0
        }
        else if (n === 0) {
            return 1
        }
        else {
            return this.countWays(n - 1) + this.countWays(n - 2) + this.countWays(n - 3)
        }
    }
}

class TripleStep{
    /**
     * @param {number} n
     * @return {number} 
     */
    countWays(n){
        let memo = Array(n + 1).fill(-1)
        return this.countWaysDP(n, memo)
    }

    /**
     * @param {number} n
     * @param {number[]} memo
     * @return {number} 
     */
    countWaysDP(n, memo){
        if (n < 0){
            return 0
        }
        else if (n === 0){
            return 1
        }
        else if (memo[n] > -1){
            return memo[n]
        }
        else {
            memo[n] = this.countWaysDP(n - 1, memo) + this.countWaysDP(n - 2, memo) + this.countWaysDP(n - 3, memo)
            return memo[n]
        }
    }
}

module.exports = TripleStep