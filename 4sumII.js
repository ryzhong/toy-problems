// /**
//  * @param {number[]} A
//  * @param {number[]} B
//  * @param {number[]} C
//  * @param {number[]} D
//  * @return {number}
//  */

//tried doing this with objects instead of a
//hashmap and it became much slower 750+ms 
//compared to 150~ms

var fourSumCount = function(A, B, C, D) {
    let result = 0;
    
    const combineTwoSets = (set1, set2) => {
        let curMap = new Map();
        for(let i = 0; i < set1.length; i++) {
            for(let j = 0; j < set2.length; j++) {
                let sum = set1[i] + set2[j];
                curMap.set(sum, curMap.get(sum) + 1 || 1);
            }
        }
        return curMap;
    }
    
    let set1 = combineTwoSets(A,B);
    let set2 = combineTwoSets(C,D);
    
    set1.forEach((val, key) => {
        let offset = key * -1;
        if(set2.get(offset)) {
            result += set2.get(offset) * set1.get(key);
        }
    })
    return result;
};