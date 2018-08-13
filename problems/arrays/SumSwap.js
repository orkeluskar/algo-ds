'use strict'

/* 
Given two arrays of integeres, find a pair of values (one value from each array) that you can swap to give the arrays the same sum.

EXAMPLE
Input: [4, 1, 2, 1, 1, 2], [3, 6, 3, 3]
Output: [1, 3]
*/

class SumSwaps{

    /**
     * @param {number[]} list
     * @return {number}
      */
    getSum(list){
        return list.reduce((a, b) => a + b, 0)
    }


    /**
     * @param {number[]} list1
     * @param {number[]} list2
     * @return {number[]}
      */
    findSwapValues(list1, list2){
        let sum1 = this.getSum(list1),
            sum2 = this.getSum(list2)
        
        if (sum1 === sum2) return []
        
        let diff = Math.abs(sum1 - sum2) / 2
        if (sum1 < sum2){
            return this.findswapValuesHelper(list1, list2, diff)
        }
        else{
            return this.findswapValuesHelper(list2, list1, diff)
        }
    }


    /**
     * @param {number[]} list1
     * @param {number[]} list2
     * @param {number} diff
     * @return {number[]} 
     */
    findswapValuesHelper(list1, list2, diff){
        let set2 = new Set(list2)
        let res = []
        list1.some(num => {
            let target = num + diff
            if (set2.has(target)){
                res = [num, target]
                return true
            }
        })
        return res
    }
}

module.exports = SumSwaps