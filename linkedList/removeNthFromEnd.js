function ListNode(val, next = null) { this.val = val; this.next = next; }

function fromArray(arr) {
    let dummy = new ListNode(0), cur = dummy;
    for (const v of arr) { cur.next = new ListNode(v); cur = cur.next; }
    return dummy.next;
}
function toArray(head) {
    const out = [];
    for (let p = head; p; p = p.next) out.push(p.val);
    return out;
}

// your function from before
function removeNthFromEnd(head, n) {
    let fast = head, slow = head;
    for (let i = 0; i < n; i++) fast = fast.next;
    if (!fast) return head.next;
    while (fast.next) { fast = fast.next; slow = slow.next; }
    slow.next = slow.next.next;
    return head;
}

// ---- call it ----
const head = fromArray([1,2,3,4,5]);
const n = 2;
const newHead = removeNthFromEnd(head, n);
console.log(toArray(newHead)); // [1,2,3,5]