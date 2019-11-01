// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let pointer = new ListNode(0);
  let head = pointer;
  let carry = 0;
  
  while(node1 !== null || node2 !== null) {
      let val1 = node1 === null ? 0 : node1.val;
      let val2 = node2 === null ? 0 : node2.val;
      let sum = val1 + val2 + carry;
      if(sum > 9) {
          carry = 1;
          sum -= 10;
      } else {
          carry = 0;
      }
      
      pointer.next = new ListNode(sum);
      pointer = pointer.next;
      
      node1 = node1 === null ? null : node1.next;
      node2 = node2 === null ? null : node2.next;
  }
  if(carry === 1) {
      pointer.next = new ListNode(1);
  }
  
  return head.next;
};