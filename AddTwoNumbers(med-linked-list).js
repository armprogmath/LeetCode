function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);

    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
}

// Helper to create linked list from array
function createList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper to print linked list as array
function printList(node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

// Example: (2 -> 4 -> 3) + (5 -> 6 -> 4) = (7 -> 0 -> 8)
const l1 = createList([2, 4, 3]);
const l2 = createList([5, 6, 4]);

const sum = addTwoNumbers(l1, l2);
console.log(printList(sum));  // Output:-> [7, 0, 8]
