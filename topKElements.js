/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let result = [];
    nums.forEach( e => {
        if(map.get(e)) {
            map.set(e, map.get(e) + 1);
        } else {
            map.set(e, 1);
        }
    })
    while(result.length < k) {
        // console.log(map)
        let max = 0;
        let num = 0;
        map.forEach( (counter, ele) => {
            // console.log(counter, ele);
            if(max < counter) {
                max = counter;
                num = ele;
            }
        })
        // console.log('result', num)
        result.push(num);
        map.delete(num);
    }
    return result
    
};