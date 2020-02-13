/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

 // time - O(n*k)
 // space O(1)
var kthSmallest = function(matrix, k) {
    for(let i = 0; i < k; i++) {
        var smallestRow = undefined;
        var smallest = undefined;
        for(let row = 0; row < matrix.length; row++) {
            if(matrix[row].length !== 0) {
                if(smallest !== undefined) {
                    if(matrix[row][0] < smallest) {
                        smallest = matrix[row][0];
                        smallestRow = row;
                    }
                } else {
                    smallest = matrix[row][0];
                    smallestRow = row;
                }
            }
        }
        if( i === k-1 ) {
            return matrix[smallestRow][0]
        }
        matrix[smallestRow] = matrix[smallestRow].slice(1);
    }
}

//45%

var kthSmallest = function(matrix, k) {
    return [].concat(...matrix).sort((a,b) => a-b)[k-1];
}