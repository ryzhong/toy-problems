// // /**
// //  * @param {string} s
// //  * @return {number}
// //  */
// var firstUniqChar = function(s) {
//     let char = '';
//     let found = false;
//     let counter = new Map();
//     for(let i = 0; i < s.length; i++) {
//         counter.set(s[i], counter.get(s[i]) > 0 ? counter.get(s[i]) + 1 : 1 );
//     }
//     console.log(counter)
//     counter.forEach((c , key) => {
//         if(c === 1 && !found) {
//             char = key;
//             found = true;
//         }
//     })
//     if(!found) return -1;
//     return s.indexOf(char);
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */

//a bit cleaner 53%
var firstUniqChar = function(s) {
    let counter = new Map();
    for(let i = 0; i < s.length; i++) {
        counter.set(s[i], counter.get(s[i]) > 0 ? counter.get(s[i]) + 1 : 1 );
    }
    for(const [key, val] of counter.entries()) {
        if(val === 1) {
            return s.indexOf(key)
        }
    }
    return -1;
};