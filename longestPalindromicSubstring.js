/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let answer = '';
    
    const findPal = (string) => {
        if(string.length === 0) {
            return;
        }
        let curAnswer = '';
        for(let i = 0; i < string.length; i++) {
            curAnswer += string[i];
            let pal = checkPal(curAnswer);
            if(pal && curAnswer.length > answer.length) {
                answer = curAnswer;
            }
        }
        if(answer.length < string.length - 1) {
            findPal(string.substring(1));
        }
    }
    
    const checkPal = (substring) => {
        for (let i = 0, j = substring.length - 1; i < Math.ceil(substring.length/2); i++, j--) {
            if(substring[i] !== substring[j]) {
                return false;
            }
        }
        return true;
    }
    findPal(s);
    return answer;
};