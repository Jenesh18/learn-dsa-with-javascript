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
