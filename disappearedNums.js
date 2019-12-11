// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var findDisappearedNumbers = function(nums) {
    let result = [];
    for(let i = 1; i < nums.length + 1; i++) {
        if(nums.indexOf(i) === -1 ) {
            result.push(i);
        }
    }
    // console.log(result);
    return result;
};

//42%
var findDisappearedNumbers = function(nums) {
    let arr = Array.from(Array(nums.length), (e, i) => i + 1)
    // console.log(arr);
    for(let num of nums) {
        arr[num - 1] = null;
    }
    return arr.filter((e) => e !== null);
};