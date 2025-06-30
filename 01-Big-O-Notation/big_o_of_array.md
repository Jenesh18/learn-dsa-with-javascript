# 🔢 Big O of JavaScript Arrays

Arrays in JavaScript are ordered lists of elements. They provide flexible ways to access, insert, delete, and manipulate data. Let’s break down how efficient these operations are using **Big O Notation**.

---

## 🕒 Time Complexity of Array Operations

| Operation                | Big O Time | Explanation                                                          |
|--------------------------|-------------|----------------------------------------------------------------------|
| Access by index          | O(1)        | Direct lookup, like `arr[3]`                                        |
| Insert at end (`push`)   | O(1)        | Adds item at end, no shifting needed                                |
| Remove at end (`pop`)    | O(1)        | Removes last item, fast and direct                                  |
| Insert at start (`unshift`)| O(n)     | All elements must shift right                                       |
| Remove at start (`shift`)| O(n)       | All elements shift left                                             |
| Search by value (`includes`, `indexOf`) | O(n) | Checks each element till found                                  |
| Loop (for/forEach/map)   | O(n)        | Visits each element once                                            |
| Sort (`arr.sort()`)      | O(n log n)  | JavaScript uses optimized sorting algorithms under the hood         |
| Slice / Splice           | O(n)        | May copy or move parts of array depending on parameters             |

---

## 📦 Space Complexity of Arrays

| Situation                  | Space Complexity | Why                         |
|----------------------------|------------------|------------------------------|
| Storing `n` elements       | O(n)             | Each element uses memory     |
| Empty array                | O(1)             | No elements = minimal space  |
| Array of arrays (2D)      | O(n²)            | Rows × Columns               |

---

## 💡 Code Examples

### ✅ Access by Index – O(1)
```js
const nums = [10, 20, 30, 40];
console.log(nums[2]); // 30
```

### ✅ Insert at End – O(1)
```js
nums.push(50); // Fast add
```

### ❌ Insert at Start – O(n)
```js
nums.unshift(5); // All other elements shift right
```

### ❌ Search by Value – O(n)
```js
nums.includes(30); // May need to check each item
```

### ✅ Looping – O(n)
```js
nums.forEach(num => console.log(num));
```

### ❌ Splice – O(n)
```js
nums.splice(1, 2); // May reindex elements after removal
```

---

## 🧠 Best Practices

- Use `push` and `pop` for better performance
- Avoid frequent use of `shift` and `unshift` in large arrays
- Use `Set` or `Map` if you're searching by value often

---

## ✅ Summary Table

| Action                  | Time Complexity  |
|-------------------------|------------------|
| arr[i]                  | O(1)             |
| arr.push()              | O(1)             |
| arr.pop()               | O(1)             |
| arr.unshift()           | O(n)             |
| arr.shift()             | O(n)             |
| arr.includes(value)     | O(n)             |
| arr.sort()              | O(n log n)       |
| arr.splice() / arr.slice()| O(n)           |

---

Arrays are fast for **index-based access** and **end operations**, but slower for **start operations** and **searching**. Choose your methods wisely for optimal performance!

---

## ❓ Array Operations Quiz

### ✅ 1. What is the time complexity of accessing an element using its index?
A) O(n)  
B) O(1)  
C) O(log n)  
D) O(n²)

**Answer:** B) O(1)
> Accessing by index is constant time.

---

### ✅ 2. What is the time complexity of inserting an element at the start of an array?
A) O(1)  
B) O(n)  
C) O(log n)  
D) O(n log n)

**Answer:** B) O(n)
> All other elements must shift to the right.

---

### ✅ 3. What is the time complexity of using `push()` to add an element?
A) O(n)  
B) O(1)  
C) O(log n)  
D) O(n log n)

**Answer:** B) O(1)
> Adding at the end is fast and constant time.

---

### ✅ 4. What is the time complexity of `arr.includes()`?
A) O(1)  
B) O(n)  
C) O(log n)  
D) O(n²)

**Answer:** B) O(n)
> It checks each element until it finds a match.

---

### ✅ 5. What is the time complexity of sorting an array with `arr.sort()`?
A) O(n)  
B) O(n log n)  
C) O(n²)  
D) O(log n)

**Answer:** B) O(n log n)
> JavaScript uses efficient internal sorting algorithms.

---
