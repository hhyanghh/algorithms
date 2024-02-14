// 지수한수 구하기
// 밑은 x, 지수는 n

function power(x, n) {
  if (n === 0) return 1;
  return power(x, n - 1) * x;
}

// 기저조건은?
// 지수가 0이면 1이다

console.log(power(2, 5));
