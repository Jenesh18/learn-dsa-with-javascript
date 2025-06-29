# 📈 Big O Notation (Time & Space Complexity)

Big O notation is used to describe the **performance** of an algorithm as the input size grows. It helps us understand how our code **scales**.

---

## 🧠 Why Big O?

- To measure **efficiency** of code (independent of machine/hardware)
- To compare algorithms (e.g., sorting methods)
- To detect slow code in large-scale applications

---

## 🔍 What Does It Measure?

| Type                  | What it measures                           |
|-----------------------|--------------------------------------------|
| **Time Complexity**   | How fast your algorithm runs               |
| **Space Complexity**  | How much memory your algorithm uses        |

---

## 📏 Common Big O Time Complexities (with Examples)

| Big O     | Name         | Example Code                              | Visual Meaning               |
|-----------|--------------|-------------------------------------------|------------------------------|
| O(1)      | Constant     | Accessing array element (`arr[0]`)        | Same time, no matter size    |
| O(n)      | Linear       | Loop through array                        | Time grows with input        |
| O(n²)     | Quadratic    | Nested loops                              | Slow, grows rapidly          |
| O(log n)  | Logarithmic  | Binary Search                             | Fast even for large `n`      |
| O(n log n)| Linearithmic | Merge Sort, QuickSort                     | Efficient sorting            |
| O(2ⁿ)     | Exponential  | Recursive Fibonacci                       | Explodes with `n`            |

---

## 🧪 Practical Examples

### 🔹 Example 1: O(1) - Constant Time
```js
function getFirst(arr) {
  return arr[0];
}
```
✅ Only one operation, regardless of array length.

---

### 🔹 Example 2: O(n) - Linear Time
```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```
✅ Time grows with input size. 10 elements = 10 prints.

---

### 🔹 Example 3: O(n²) - Quadratic Time
```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
❌ Gets slow fast. 100 items = 10,000 pairs.

---

### 🔹 Example 4: O(log n) - Logarithmic Time
```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```
✅ Each step cuts search space in half.

---

### 🔹 Example 5: O(2ⁿ) - Exponential Time
```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
❌ Very slow for large `n`. Not efficient.

---

## 🧠 Space Complexity Basics

| Operation            | Space Complexity | Why                       |
|----------------------|------------------|----------------------------|
| Single variable      | O(1)             | Constant memory            |
| Array of size `n`    | O(n)             | Stores `n` items           |
| Nested arrays        | O(n²)            | 2D structures              |
| Recursive calls      | O(n)             | Each call on call stack    |

---

## 📌 Common Mistakes

- Mistaking time for space (e.g., loops don’t always add memory)
- Forgetting that recursion adds to **call stack**
- Thinking constants matter — Big O ignores constants

---

## 🎯 TL;DR Summary

- Big O = scalability checker
- Focus on **dominant terms** (e.g., O(n² + n) = O(n²))
- Know the top 5: O(1), O(n), O(n²), O(log n), O(n log n)

---