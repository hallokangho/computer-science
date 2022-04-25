class Queue {
    constructor() {
        this.items = new Array(0);
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }
}

let q = new Queue;
q.enqueue('a')
q.enqueue('b')

console.log(q)

q.dequeue()

console.log(q)