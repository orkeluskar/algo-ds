/* 
Given two arrays of integers, compute the pair of values (one value in each array) with the smallest(non-negative) difference. Return the difference.

EXAMPLE
Input: [1, 3, 15, 11, 2], [23, 127, 235, 19, 8]
Output: 3. That is, the pair(11, 8)
*/

class SmallestDifferenceSlower{

    /* 
    Time complexity: O(m*n)
    */

    findSmallestDifference(list1, list2){
        if (list1.length === 0 || list2.length === 0) return -1

        let min = Number.MAX_SAFE_INTEGER
        list1.forEach(element1 => {
            list2.forEach(element2 => {
                if(Math.abs(element1 - element2) < min){
                    min = Math.abs(element1 - element2)
                }
            })
        });
        return min
    }
}

class SmallestDifference{
    
    /*
    Time complexity = O(m*logm + n*logn)
    */

    findSmallestDifference(list1, list2){
        list1.sort((a, b) => a - b)
        list2.sort((a, b) => a - b)
        let a = 0,
            b = 0
        
        let difference = Number.MAX_SAFE_INTEGER
        while(a < list1.length && b < list2.length){
            if (Math.abs(list1[a] - list2[b]) < difference){
                difference = Math.abs(list1[a] - list2[b])
            }
            
            if (list1[a] < list2[b]){
                a += 1
            }
            else{
                b += 1
            }

        }
        return difference
    }
}

module.exports = SmallestDifference