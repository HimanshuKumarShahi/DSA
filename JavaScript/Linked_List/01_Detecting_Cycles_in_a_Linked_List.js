// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val: number, next: ListNode | null = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
  hasCycle(head) {
    // head: ListNode - The head of the linked list
    // Your implementation here
    if (!head || !head.next) {
      return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }
}
