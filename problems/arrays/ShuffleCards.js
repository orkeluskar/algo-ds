'use strict'

/* 
Write a method to shuffle a deck of cards. 
It must be a perfect shuffle - in other words, each of the 52! permutations of the deck has to be equally likely. Assume that you are given a random number generator which is perfect.
*/

class ShuffleCards{

    /** 
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rand(low, high){
        return Math.round(Math.random() * (high - low + 1))
    }

    /**
     * @param {number[]} cards
     * @return {number[]}
     */
    shuffleCards(cards){

        for (let i = 0; i < cards.length; i++){
            let k = this.rand(0, i)
            let temp = cards[k]
            cards[k] = cards[i]
            cards[i] = temp
        }
        return cards
    }

}

module.exports = ShuffleCards