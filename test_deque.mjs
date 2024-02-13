import { Deque } from "./Deque.mjs";

console.log("=== addFirst 5번 출력 ===");

let deque = new Deque();

deque.addFirst(1);
deque.printAll();
deque.addFirst(2);
deque.printAll();
deque.addFirst(3);
deque.printAll();
deque.addFirst(4);
deque.printAll();
deque.addFirst(5);
deque.printAll();

console.log("=== removeFirst 출력 ===");
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.removeFirst();
deque.removeFirst();
deque.removeFirst();
deque.printAll();

console.log("=== addLast 출력 ===");
deque.addLast(1);
deque.printAll();
deque.addLast(2);
deque.printAll();
deque.addLast(3);
deque.printAll();
deque.addLast(4);
deque.printAll();
deque.addLast(5);
deque.printAll();

console.log("=== removeLast 출력 ===");
deque.removeLast();
deque.printAll();
