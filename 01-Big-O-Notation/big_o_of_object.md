# 🧱 Big O of JavaScript Objects

Objects (`{}`) in JavaScript are commonly used to store key–value pairs. They're incredibly fast for most operations when using **known keys**.

---

## 🕒 Time Complexity Summary

| Operation           | Big O      | Explanation                                             |
|---------------------|------------|---------------------------------------------------------|
| Insert              | O(1)       | Add key–value pair (e.g., `obj[key] = value`)           |
| Remove              | O(1)       | Delete a key (e.g., `delete obj[key]`)                  |
| Access (Read)       | O(1)       | Read value via key (e.g., `obj[key]`)                   |
| Search by Key       | O(1)       | Direct key access is always fast                       |
| Search by Value     | O(n)       | Must check every value (no direct access)              |
| Loop over Properties| O(n)       | Each key/value must be visited one by one              |

---

## 💻 Code Examples

### ✅ Insertion – O(1)
```js
const user = {};
user.name = "Jenesh"; // Insert key
```

### ✅ Access – O(1)
```js
console.log(user.name); // Fast key-based access
```

### ✅ Deletion – O(1)
```js
delete user.name; // Fast key-based delete
```

### ❌ Search by Value – O(n)
```js
Object.values(user).includes("Jenesh");
// Must check each value manually
```

### ❌ Looping – O(n)
```js
for (let key in user) {
  console.log(key, user[key]); // Visits each key once
}
```

---

## 📦 Space Complexity

| Case                        | Space Complexity | Explanation                            |
|-----------------------------|------------------|----------------------------------------|
| Empty Object                | O(1)             | No entries stored                      |
| `n` key–value pairs         | O(n)             | Takes space proportional to entries    |
| Nested Objects              | O(n + depth)     | More nested layers = more memory       |

---

## 🧠 Use Cases for Objects

- Storing data by key (user info, settings)
- Hash maps / lookup tables
- Counting frequency of items (e.g., words)

```js
const freq = {};
for (let char of "apple") {
  freq[char] = (freq[char] || 0) + 1;
}
// { a: 1, p: 2, l: 1, e: 1 }
```

---

## ✅ Summary

| Operation     | Time     | Space |
|---------------|----------|--------|
| Insert        | O(1)     | O(n)   |
| Remove        | O(1)     | O(n)   |
| Access Key    | O(1)     | O(n)   |
| Search Value  | O(n)     | O(n)   |
| Iterate All   | O(n)     | O(n)   |

Objects are **highly efficient** for storing and retrieving values **by key**, but slower if you need to search by value or iterate over everything.

---

# ❓ Object Operations Quiz

Test your understanding of object-related operations and their Big O time complexity.

---

### ✅ 1. What is the time complexity of accessing a property in a JavaScript object?
A) O(n)  
B) O(1)  
C) O(log n)  
D) O(n²)

**Answer:** B) O(1)
> Access by key is constant time.

---

### ✅ 2. What is the time complexity of searching for a value in an object?
A) O(1)  
B) O(log n)  
C) O(n)  
D) O(n log n)

**Answer:** C) O(n)
> You need to scan through all values manually.

---

### ✅ 3. What is the time complexity of deleting a key from an object?
A) O(1)  
B) O(n)  
C) O(n log n)  
D) O(n²)

**Answer:** A) O(1)
> Deleting a known key is constant time.

---

### ✅ 4. Which operation is slowest on large objects?
A) Inserting a key–value pair  
B) Accessing a property  
C) Looping over all keys  
D) Deleting a property

**Answer:** C) Looping over all keys
> Looping is O(n), while others are O(1).

---

### ✅ 5. What is the space complexity of storing `n` key–value pairs in an object?
A) O(1)  
B) O(n)  
C) O(log n)  
D) O(n²)

**Answer:** B) O(n)
> Each entry takes memory, so space grows with `n`.

---