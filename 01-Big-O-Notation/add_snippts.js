function sumWithLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumWithFormula(n) {
  return (n * (n + 1)) / 2;
}

const bigN = 100_000_000; // 100 million

// Benchmark Loop
console.time("Loop Method");
const resultLoop = sumWithLoop(bigN);
console.timeEnd("Loop Method");

// Benchmark Formula
console.time("Formula Method");
const resultFormula = sumWithFormula(bigN);
console.timeEnd("Formula Method");

// Optional: Check if both results are equal
console.log("Are results equal?", resultLoop === resultFormula);

const stringtest = "test"
