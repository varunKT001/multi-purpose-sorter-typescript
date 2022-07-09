import { Sorter } from '../Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  get length(): number {
    if (this.head === null) return 0;

    let length = 1;

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
      length++;
    }

    return length;
  }

  add(data: number): LinkedList {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      return this;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }

    tail.next = node;

    return this;
  }

  at(data: number): Node {
    if (this.head === null) throw new Error('Index out of bound');

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === data) return node;
      node = node.next;
      counter++;
    }

    throw new Error('Index out of bound');
  }

  compare(i: number, j: number): boolean {
    if (this.head === null) throw new Error('List is empty');

    const nodeAtI = this.at(i);
    const nodeAtJ = this.at(j);

    return nodeAtI.data > nodeAtJ.data;
  }

  swap(i: number, j: number): void {
    if (this.head === null) throw new Error('List is empty');

    let nodeAtI = this.at(i);
    let nodeAtJ = this.at(j);

    const temp = nodeAtI.data;
    nodeAtI.data = nodeAtJ.data;
    nodeAtJ.data = temp;
  }

  print(): void {
    if (this.head === null) throw new Error('List is empty');

    let linkedList = '';

    let tail: Node | null = this.head;
    while (tail) {
      linkedList += `${tail.data} ${tail && '=> '}`;
      tail = tail.next;
    }

    console.log(linkedList);
  }
}
