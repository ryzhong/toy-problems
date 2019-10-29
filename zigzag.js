// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

var convert = function(s, numRows) {
    if (s.length < numRows || numRows === 1) {
        return s;
    }
    let result = '';
    let arrs = [];
    let reverse = false;
    let row = 0;
    for (let i = 0; i < numRows; i++) {
        arrs[i] = [];
    }
    for (let j = 0; j < s.length; j++) {
        arrs[row].push(s[j]);
        reverse ? row-- : row++;
        if (row === numRows - 1 || row === 0) {
            reverse = !reverse;
        }
    }
    return arrs.reduce((result, cur) => result + cur.join(''), '');
};