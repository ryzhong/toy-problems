// /**
//  * @param {string} str
//  * @return {number}
//  */
var myAtoi = function(str) {
    str = str.trimLeft();
    
    if(!/[\d+-]/.test(str[0])) return 0; // returns 0 if first char is not a digit or - or +
    
    let number = Number(str.match( /[+-]?\d*/));
    if(Number.isNaN(number)) return 0;
    
    let resultMax = (2 ** 31) - 1;
    let resultMin = -(2 ** 31);
    if(number > resultMax) {
        return resultMax;
    }
    if(number < resultMin) {
        return resultMin;
    }
    
    return number;
};