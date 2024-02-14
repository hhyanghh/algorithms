// string의 길이 구하기

// a b c d e
// 0~3번 index까지 구하고

function strLength(arr) {
  if (arr[0] == null) return 0;
  return strLength(arr.slice(0, -1)) + 1;
}

let str = "abcedf";
let len = strLength(str);
console.log(len);
