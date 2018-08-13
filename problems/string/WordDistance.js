'use strict'

/* 
You have a large text file containing words. 
Given any two words, find the shortest distance(in terms of number of words) between them in the file. 

If the operation will be rpeated many rimes for the same file (but different pair of words), can you optimize your solution?

*/

class LocationPair{
    constructor(first, second){
        this.setLocations(first, second)
    }

    setLocations(first, second){
        this.location1 = first
        this.location2 = second
    }

    distance(){
        return Math.abs(this.location1 - this.location2)
    }

    isValid(){
        return this.location1 >= 0 && this.location2 >= 0
    }

    updateWithMin(loc){
        if (!this.isValid() || loc.distance() < this.distance()){
            this.setLocations(loc.location1, loc.location2)
        }
    }
}

class WordDistance{

    findClosest(words, word1, word2){
        let best = new LocationPair(-1, -1)
        let current = new LocationPair(-1, -1)
        for (let i = 0; i < words.length; i++){
            let word = words[i]
            if (word === word1){
                current.location1 = i
                best.updateWithMin(current)
            }
            else if (word === word2){
                current.location2 = i
                best.updateWithMin(current)
            }
        }
        return best
    }
}

    
module.exports = WordDistance