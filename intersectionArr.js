// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
var intersect = function(nums1, nums2) {
    let result = [];
    let shortest = nums1.length <= nums2.length ? nums1 : nums2;
    let longest = nums1.length <= nums2.length ? nums2 : nums1;
    console.log( shortest, longest)
    shortest.forEach( (ele, index) => {
        for(let i = 0; i < longest.length; i++) {
            if(ele === longest[i]) {
                result.push(shortest[index]);
                longest[i] = null;
                break;
            }
        }
    })
    return result;
};