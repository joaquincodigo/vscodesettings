/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

var mergeTwoLists = function (list1, list2) {
  let list = [];
  class ListNode {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }

  for (let i = 0; i < list1.length; i++) {
    list.push(new ListNode(list1[i], list1[i + 1]));
  }

  for (let i = 0; i < list2.length; i++) {
    list.push(new ListNode(list2[i], list2[i + 1]));
  }

  list.sort((a, b) => a.data - b.data);

  return list;
};

console.log(mergeTwoLists([1, 2, 3], [1, 3, 4]));
