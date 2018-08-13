'use strict'

/* 
You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. 
Given a scale that provides an exact measurement, how would you find the heavy bottle? 
You can only use the scale once.
*/

class HeavyPill{
    /**
     * @param {number[]} bottles 
     * @return {number}
     */
    findHeavy(bottles){ 
        let skewedSum = 0,
            actualSum = 0
        for (let i = 0; i < bottles.length; i++){
            skewedSum += bottles[i] * (i + 1)
            actualSum += (i + 1)
        }
        return Math.floor((skewedSum -actualSum) / 0.1)  // (211.3 - 210) / 0.1 = 13
    }
}

module.exports = HeavyPill