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

/**
 * @param {number[]} nums
 * @return {number}
 */
//82%
//time - O(n)
//space - O(1)
var missingNumber = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += i + 1;
        sum -= nums[i];
        
    }
    return sum;
};