// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//     let answer = '';
    
//     const findPal = (string) => {
//         if(string.length === 0) {
//             return;
//         }
//         let curAnswer = '';
//         for(let i = 0; i < string.length; i++) {
//             curAnswer += string[i];
//             let pal = checkPal(curAnswer);
//             if(pal && curAnswer.length > answer.length) {
//                 answer = curAnswer;
//             }
//         }
//         if(answer.length < string.length - 1) {
//             findPal(string.substring(1));
//         }
//     }
    
//     const checkPal = (substring) => {
//         for (let i = 0, j = substring.length - 1; i < Math.ceil(substring.length/2); i++, j--) {
//             if(substring[i] !== substring[j]) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     findPal(s);
//     return answer;
// };

var longestPalindrome = function(s) {
    let max = '';

    for (let i = 0; i < s.length; i++) {
        
        for (let j = 0; j < 2; j++) {
            left = i;
            right = i+j;
            while( s[left] && s[left] === s[right]) {
                left--;
                right++;
            }
            if ((right-left-1) > max.length) {
                max = s.substring(left+1, right);
            }
        }
    }

    return max;
}