/**
 * @param {number[]} nums
 * @return {number}
 */

 //5%
 //time - n^2
 //Space - constant
var missingNumber = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(i) === -1) {
            return i;
        }
    }
    return nums.length;
};