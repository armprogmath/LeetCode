function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);

    let current = dummyHead;

    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        const sum = x + y + carry;
        carry = Math.floor(sum / 10);

        console.log("carry: ", carry)

        current.next = new ListNode(sum % 10);

        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    console.log("dummyHead.next:", dummyHead.next )
    return dummyHead.next;
}


function buildList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function printList(node) {
    const nums = [];
    while (node) {
        nums.push(node.val);
        node = node.next;
    }
    console.log(nums.join(' -> '));
}

const l1 = buildList([2, 4, 3]);
const l2 = buildList([5, 6, 4]);

const result = addTwoNumbers(l1, l2);
printList(result); // Output: 7 -> 0 -> 8


