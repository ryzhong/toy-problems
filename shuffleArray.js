// // /**
// //  * @param {number[]} nums
// //  */
// var Solution = function(nums) {
//     this.o = nums.slice();
//     this.arr = nums;
//     // console.log(this.arr)
// };

// /**
//  * Resets the array to its original configuration and return it.
//  * @return {number[]}
//  */
// Solution.prototype.reset = function() {
//     // console.log('reseting')
//     // console.log(this.o)
//     return this.o;
// };

// /**
//  * Returns a random shuffling of the array.
//  * @return {number[]}
//  */
// Solution.prototype.shuffle = function() {
//     // console.log('shuffling')
//     let shuffling = this.arr;
//     shuffling.forEach((val, index) => {
//         let randomIndex = Math.floor(Math.random() * shuffling.length);
//         let randomIndexVal = shuffling[randomIndex];
//         // console.log( randomIndex)
//         //switch places
//         shuffling[index] = randomIndexVal;
//         shuffling[randomIndex] = val;
//     })
//     // console.log('shuffled', shuffling)
//     return shuffling;
// };

// /** 
//  * Your Solution object will be instantiated and called as such:
//  * var obj = new Solution(nums)
//  * var param_1 = obj.reset()
//  * var param_2 = obj.shuffle()
//  */

//91%
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shuffling = this.arr.slice();
    shuffling.forEach((val, index) => {
        let randomIndex = Math.floor(Math.random() * shuffling.length);
        let randomIndexVal = shuffling[randomIndex];
        shuffling[index] = randomIndexVal;
        shuffling[randomIndex] = val;
    })
    return shuffling;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */