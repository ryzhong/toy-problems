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

// 86%

var intersect = function(nums1, nums2) {
    let result = [];
    let shortest = nums1.length <= nums2.length ? nums1 : nums2;
    let longest = nums1.length <= nums2.length ? nums2 : nums1;
    console.log( shortest, longest)
    shortest.forEach( (ele, index) => {
        let contains = longest.indexOf(ele);
        if( contains >= 0) {
            result.push(ele);
            longest[contains] = null;
        }
    })
    return result;
};

// 86% similar to other solution

var intersect = function(nums1, nums2) {
    let result = [];
    let map = new Map();
    nums1.forEach((num) => {
        if(map.get(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })
    
    nums2.forEach((num2) => {
        if(map.get(num2) > 0) {
            result.push(num2);
            map.set(num2, map.get(num2) - 1);
        }
    })
    
    return result;
};