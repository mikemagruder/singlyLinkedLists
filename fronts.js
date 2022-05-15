class Node {
    constructor(val) {
        this.value = val;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);

        if(!this.head) {
            this.head = new_node;
            return this;
        }

        new_node.next = this.head;

        this.head = new_node;
        return this;
    }
    removeFront() {
        if (this.head == null) {
            return this.head
        }
        let removedNode = this.head
        this.head = removedNode.next
        removedNode.next = null
        return this.head
    }
    front(){
        if (this.head == null){
            return null
        } else {
        return this.head.value
        }
    }
    length() {
        let runner = this.head
        if (runner == null){
            return 0
        }
        let count = 1
        while(runner.next){
            count++
            runner = runner.next
        }
        return count
    }
    contains(val){
        let runner = this.head
        while(runner){
            if (runner.value == val){
                return true;
            }
            runner = runner.next
        }
        return false
    }
    display() {
        let listStr = ""
        if (this.head == null){
            return "Empty List"
        }
        listStr += this.head.value
        let runner = this.head.next
        while ( runner != null ){
            listStr += ", " + runner.value;
            runner = runner.next
        }
        return listStr
    }
    max(){
        let maxVal = this.head.value;
        let runner = this.head;
        while(runner) {
            // console.log(maxVal);
            if (runner.value > maxVal ){
                maxVal = runner.value
            }
            runner = runner.next
        }
        return maxVal
    }
    min(){
        let minVal = this.head.value;
        let runner = this.head;
        while(runner) {
            if (runner.value < minVal ){
                minVal = runner.value
            }
            runner = runner.next
        }
        return minVal
    }
    average(){
        let sum = 0;
        let runner = this.head;
        while(runner) {
            sum += runner.value
            runner = runner.next
        }
        return sum / this.length()
    }
}

let sll = new LinkedList();

let node1 = new Node(4)
let node2 = new Node(5)
let node3 = new Node(6)
let node4 = new Node(7)
let node5 = new Node(3)
let node6 = new Node(2)
let node7 = new Node(1)
let node8 = new Node(-1)
sll.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8

console.log(sll);
console.log(sll.head);
console.log(sll.head.next);
// console.log(sll.head.next.next);
// console.log(sll.head.next.next.next);
console.log(sll.display());
console.log(sll.length());

sll.removeFront()
console.log(sll.length());
console.log(sll);
console.log(sll.front());
console.log(sll.contains(7));
console.log(sll.display());
console.log(sll.max());
console.log(sll.min());
console.log(sll.average());