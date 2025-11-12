// addTwoNumbers.js
const { memo } = require('./memo');

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

const memoizedSum = memo(sum);

// Test with primitives
console.log(memoizedSum(1, 3, 2)); // Calculates
console.log(memoizedSum(1, 2, 3)); // From cache

// Test with object arguments
function describe(user) {
  return `${user.name} is ${user.age} years old`;
}

const memoizedDescribe = memo(describe);

console.log(memoizedDescribe({ name: 'Alice', age: 30 })); // Calculates
console.log(memoizedDescribe({ age: 30, name: 'Alice' })); // From cache (thanks to stable stringify)
