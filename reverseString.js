/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};

//also 5% and using a for loop

var reverseString = function(s) {
    let start = 0;
    let end = s.length-1;
    for(let i = 0; i < s.length/2; i++, start++, end--) {
        let char = s[start];
        s[start] = s[end];
        s[end] = char;
    }
    return s;
};