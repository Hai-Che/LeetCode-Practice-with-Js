/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let temp = { next: head }
    let current = temp
    let del
    while (current.next !== null) {
        if (current.next.val === val) {
            del = current.next
            current.next = current.next.next
            delete del
        } else {
            current = current.next
        }
    }
    return temp.next
};