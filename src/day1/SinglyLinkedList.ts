class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  public length: number;

  public head: ListNode<T> | null;
  public tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(item: T): void {
    const node = new ListNode<T>(item);

    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = this.head;
    }

    this.length++;
  }

  insertAt(item: T, idx: number): void {
    let curr = this.head;

    for (let i = 1; i <= idx; i++) {
      if (curr && i === idx) {
        const node = new ListNode<T>(item);
        node.next = curr.next;
        curr.next = node;
      }
    }

    this.length++;
  }

  append(item: T): void {
    const node = new ListNode<T>(item);

    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.tail = node;
      this.head = node;
    }

    this.length++;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    let result: T | undefined;

    if (curr?.value === item) {
      result = curr.value;
      this.head = this.head?.next || null;
      this.length--;
      return result;
    }

    while (curr?.next) {
      if (curr.next.value === item) {
        result = curr.next.value;
        curr.next = curr.next.next;
        this.length--;
        break;
      }
      curr = curr.next || null;
    }

    return result;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    let result: T | undefined;

    for (let i = 0; i <= idx; i++) {
      if (curr && i === idx) {
        result = curr.value;
      }
      curr = curr?.next || null;
    }

    return result;
  }

  removeAt(idx: number): T | undefined {
    let curr = this.head;
    let result: T | undefined = undefined;

    if (idx === 0) {
      result = this.head?.value;
      this.head = this.head?.next || null;
      this.length--;
      return result;
    }

    for (let i = 1; i <= idx; i++) {
      if (curr && i === idx) {
        result = curr.next?.value;
        curr.next = curr.next ? curr.next.next : null;
        this.length--;
      }
    }

    return result;
  }
}
