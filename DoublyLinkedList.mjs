class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 다시 확인해주세요.");
    }
    let newNode = new Node(data);

    if (index === 0) {
      // ✅ head에 삽입하는 경우
      newNode.next = this.head;
      if (this.head != null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      // ✅ 마지막 노드에 삽입하는 경우
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      // ✅ 그 외의 경우
      let currentNode = this.head; // 초기화

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next; // currentNode 이동
      }
      newData.next = currentNode.next; // 뒤를 먼저 연결
      newNode.prev = currentNode;
      currentNode.next = newData; //앞으로 삽입
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;
    if (index === 0) {
      // head node 제거
      let deletedNode = this.head;
      if (this.head.next === null) {
        // 데이터가 1개일 때
        this.head = null;
        this.tail = null;
      } else {
        // 데이터가 2개 이상일 떄
        this.head = this.head.next;
        this.head.prev = null; // 가비지컬렉터에 의해서
      }
      this.count--;
      return deletedNode;
    } else if (index === this.count - 1) {
      // 마지막 노드를 제거하는 경우
      let deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      // 이전노드 설정
      currentNode.next.prev = currentNode;

      this.count--;
      return deletedNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 확인해주세요.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, DoublyLinkedList };
