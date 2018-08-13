'use strict'

/*
Write an algorithm which computes the number of trailing zeroes in n factorial
*/

class FactorialZeroesSlower{

    factorOfFive(num){
        let count = 0
        while (num % 5 === 0){
            count += 1
            num /= 5
        }
        return count
    }

    trailingZeroes(n){
        let count = 0
        for (let i = 2; i <= n; i++){
            count += this.factorOfFive(i)
        }
        return count
    }

}


class FactorialZeroes{

    trailingZeroes(num){
        let count = 0
        for(let i = 5; num / i > 0; i *= 5){
            count += Math.floor(num / i)
        }
        return count
    }
}

module.exports = FactorialZeroes