// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) {
    let substring = '';
    let length = 0;
    for (let i = 0; i < s.length; i++) {
        if (substring.indexOf(s[i]) >= 0) {
            substring = substring.substring(substring.indexOf(s[i]) + 1) + s[i];
            if(substring.length === 0) {
                substring = s[i];
            }
        } else {
            substring += s[i];
            length = substring.length > length ? substring.length : length;
        }
    }
    if(s.length > 0 && length === 0) {
        return 1;
    }
    return length;
};