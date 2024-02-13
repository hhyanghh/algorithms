import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.arr = [];

    // 0~9 index에 빈 연결리스트
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }
  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    // 리스트에 데이터가 있는 경우, 데이터를 계속 순회
    while (currentNode != null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    // 끝까지 갔는데, 찾는 값이 없다면
    return null;
  }

  remove(key) {
    // 해당 배열의 리스트 가져오기
    let list = this.arr[this.hashFunction(key)];

    let currentNode = list.head;
    let deletedIndex = 0;

    while (currentNode != null) {
      if (currentNode.data.key === key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex++;
    }
    return null;
  }
}

export { HashTable };
