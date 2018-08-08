/* 
Given an array of integers (both positive and negative). Find the contiguouse sequence with the largest sum. Return the sum.

EXAMPLE
Input: 2, -8, 3, -2, 4, -10
Output: 5
*/

class ContiguousSequence{

    getMaxSum(list){
        let maxSum = 0,
            sum = 0
        list.forEach(element => {
            sum += element
            if (maxSum < sum){
                maxSum = sum
            }
            else if (sum < 0){
                sum = 0
            }
        })
        return maxSum
    }

}

module.exports = ContiguousSequence