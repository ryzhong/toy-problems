// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var diameterOfBinaryTree = function(root) {
//     let max1 = 0;
//     let max2 = 0;
//     let findPath = (node, pathLength, branch, side) => {
//         console.log(node, side);
//         if(node === null) {
//             if(branch === 1) {
//                 max1 = pathLength - 1;
//                 return;
//             } else {
//                 max2 = pathLength - 1;
//                 return;
//             }
//         }
//         console.log(pathLength);
//         pathLength++;    
//         if(node.left === null && node.right === null) {
//             if(side === 'left') {
//                 max1 = max1 > pathLength ? max1 - 1 : pathLength - 1;
//             } else {
//                 max2 = max2 > pathLength ? max2 - 1 : pathLength - 1;
//             }
//         } else {
//             if(branch === 1) {
//                 if(node.left !== null) {
//                     findPath(node.left, pathLength, branch++, 'left');
//                     pathLength = 0;
//                 }
//                 if(node.right !== null) {
//                     findPath(node.right, pathLength, branch++, 'right');
//                 } 
//             } else{
//                 if(node.left !== null) {
//                 findPath(node.left, pathLength, branch++);
//                 }
//                 if(node.right !== null) {
//                     findPath(node.right, pathLength, branch++);
//                 }
//             }
            
//         }
        
//     }
//     findPath(root, 0, 1);
//     console.log(max1, max2);
//     return max1+max2;
// };

var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    findPathLength(root);

    return diameter;

    function findPathLength(node) {
        if(!node) return 0;

        const left = findPathLength(node.left);
        const right = findPathLength(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    }
};