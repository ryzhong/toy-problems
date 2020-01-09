// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */

//test
var intersect = function(nums1, nums2) {
    let result = [];
    nums1.forEach( (ele) => {
        for(let i = 0; i < nums2.length; i++) {
            if(ele === nums2[i]) {
                result.push(ele);
            }
        }
    })
    return result;
};