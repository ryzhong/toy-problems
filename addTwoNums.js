/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  let head;
  const addCur = (node1, node2, carryOver, tail) => {
      if(node1 === null && node2 === null) {
          return;
      }
      if(node2 === null) {
          tail.next = new ListNode(node1.val)
          addCur(node1.next, node2, 0, tail.next);
      }
      if(node1 === null) {
          tail.next = new ListNode(node2.val)
          addCur(node1, node2.next, 0, tail.next);
      }
      if(head === undefined) {
          let sum = node1.val + node2.val;
          if(sum > 9) {
              head = new ListNode(sum - 10);
              addCur(node1.next, node2.next, 1, head);
          } else {
              head = new ListNode(sum);
              addCur(node1.next, node2.next, 0, head);
          }
      } else {
          let sum = node1.val + node2.val + carryOver;
          if(sum > 9) {
              tail.next = new ListNode(sum - 10);
              addCur(node1.next, node2.next, 1, tail.next);
          } else {
              tail.next = new ListNode(sum);
              addCur(node1.next, node2.next, 0, tail.next);
          }
      }
      
  }
  addCur(l1, l2, 0);
  
  return head;
};