function ListNode(val, next){
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2){

}

function printList(node){
    const nums = []

    while (node){
        nums.push(node.val)
        node = node.next
    }
    console.log( nums.join("->"))

}

function buildList(arr) {
    let temp = new ListNode(0);
    let current = temp;
    for(let num of arr){
        current.next = new ListNode(num)
        current = current.next
    }
    return temp.next
}

const l1 = buildList([2, 4, 3, 5, 7]);

//const l2 = buildList([5, 6, 4, 8]);

console.log("l1: ", l1)
//console.log("l2:", l2)



