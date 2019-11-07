// /**
//  * @param {number} x
//  * @return {boolean}
//  */

var isPalindrome = function(x) {
    // x = '' + x;
    // let half = Math.ceil(x.length / 2)
    // for (let i = 0, end = x.length - 1; i < half; i++, end--) {
    //     if(x[i] !== x[end]) return false;
    // }
    // return true;
    for (let i = 0, end = x.length - 1; i < Math.ceil(x.toString().length / 2); i++, end--) {
        if(x[i] !== x[end]) return false;
    }
    return true;
};