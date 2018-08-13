'use strict'

/* 
A majority element is an element that makes up more than half of the items in an array.
Given a a positive integers arrays, find the marjority element. If there is no majority element, return -1. Do this in O(n) time and O(1) space.

EXAMPLE
Input: 1 2 5 9 5 9 5 5 5
Ouput: 5
*/


class MajorityElementSlower{
    /**
     * @param {number[]} list
     * @return {number}
     */
    getMajorityElement(list){
        for (let i = 0; i < list.length; i++){
            if (this.validate(list, list[i])){
                return list[i]
            }
        }
        return -1
    }

    /**
     * 
     * @param {number[]} list 
     * @param {number} n 
     * @return {boolean}
     */
    validate(list, n){
        let count = 0
        for (let i = 0; i < list.length; i++){
            if (list[i] === n){
                count += 1
            }
        }
        return count > list.length / 2
    }
}


class MajorityElement{

    /**
     * @param {number[]} list
     * @return {number} 
     */
    getMajorityElement(list){
        let candidate = this.getCandidate(list)
        return this.validate(list, candidate) ? candidate : -1
    }

    /**
     * @param {number} list
     * @return {number} 
     */
    getCandidate(list){
        let majority = 0;
        let count = 0;

        list.forEach(num => {
            if (count === 0){
                majority = num
            }
            if (majority === num){
                count += 1
            }
            else{
                count -= 1
            }
        })
        return majority
    }


    validate(list, n){
        let count = 0
        for (let i = 0; i < list.length; i++){
            if (list[i] === n){
                count += 1
            }
        }
        return count > list.length / 2
    }
}


module.exports = MajorityElement