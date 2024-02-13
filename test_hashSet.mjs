import { HashSet } from "./HashSet.mjs";

let hashSet = new HashSet();
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("=== 데이터 삽입 ===");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(567);
hashSet.printAll();

console.log("=== 데이터 체크 ===");
console.log(`isContain ${hashSet.isContain(1)}`);

console.log("=== 데이터 1 제거 ===");
hashSet.remove(1);
console.log(`isContain ${hashSet.isContain(1)}`);
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log("=== clear 함수 호출 ===");
hashSet.clear();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
