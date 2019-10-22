// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5


// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
var findMedianSortedArrays = function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length;
    let half = Math.ceil(totalLength/2);
    let odd = totalLength % 2 === 1;
    let preVal = 0;
    let curVal = 0;
    let index1 = 0;
    let index2 = 0;
    
    for (let i = 0; i < half + 1; i++) {
        if (!(index1 < nums1.length)){
            index2++;
            preVal = curVal;
            curVal = nums2[index2-1];
        }
        else if (!(index2 < nums2.length)){
            index1++;
            preVal = curVal;
            curVal = nums1[index1-1]
        } else {
            let val1 = nums1[index1];
            let val2 = nums2[index2];
 
            if(val1 !== undefined && val2 !== undefined) {
                if(val1 < val2) {                 
                    index1++;
                    preVal = curVal;
                    curVal = nums1[index1-1]
                } else {
                    index2++;
                    preVal = curVal;
                    curVal = nums2[index2-1];
                }
            }
        }
        
    }
    if(odd) {
        return preVal;
    } else {
        return (curVal + preVal) /2
    }

};