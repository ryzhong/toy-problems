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

// 98%

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
    // while(result.length < k) {
    //     // console.log(map)
    //     let max = 0;
    //     let num = 0;
    //     map.forEach( (counter, ele) => {
    //         // console.log(counter, ele);
    //         if(max < counter) {
    //             max = counter;
    //             num = ele;
    //         }
    //     })
    //     // console.log('result', num)
    //     result.push(num);
    //     map.delete(num);
    // }
    let x = new Map([...map].sort((a,b) => {
        return b[1] - a[1];
    }));
   // Some sort function comparing keys with a[0] b[0] or values with a[1] b[1]
   // Be sure to return -1 if lower and, if comparing values, return 0 if equal
        // (a[0] < b[0] && 1) || a[0] === b[0] ? 0 : -1)
    
    // console.log(result);
    // return result;
    // for(let i = 0; i < k; i++) {
    //     result.push(map.get)
    // }
    x = [...x]
    // console.log(x)
    for(let i = 0; i < k; i++) {
        result.push(x[i][0]);
    }
    return result;
    
};