/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    let del
    while (current && current.next) {
        if (current.val === current.next.val) {
            del = current.next
            current.next = current.next.next
            delete(del)        
        } else {
            current = current.next
        }
    }
    return head
};