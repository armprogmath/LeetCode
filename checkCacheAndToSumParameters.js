// function memo(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args); // works well for primitive args
//     if (cache.has(key)) {
//       console.log('Fetching from cache for:', args);
//       return cache.get(key);
//     }
//     console.log('Calculating result for:', args);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// }

// // Simple sum function
// function sum(a, b) {
//   return a + b;
// }

// // Memoized version
// const memoizedSum = memo(sum);

// // Test calls
// console.log(memoizedSum(2, 3)); // Calculates and caches
// console.log(memoizedSum(3, 2)); // Returns from cache


//=================================================================================================
//=================================================================================================


// function memo(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args); // works well for primitive args
//     console.log("KEY: ", key)
//     if (cache.has(key)) {
//       console.log('Fetching from cache for:', args);
//       return cache.get(key);
//     }
//     console.log('Calculating result for:', args);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// }

// // Sum function supporting dynamic number of arguments
// function sum(...args) {
//   return args.reduce((acc, val) => acc + val, 0);
// }

// // Memoized version
// const memoizedSum = memo(sum);

// // Test calls
// console.log(memoizedSum(2, 3));         // Calculates
// console.log(memoizedSum(2, 3));         // From cache

// console.log(memoizedSum(1, 2, 3));      // Calculates
// console.log(memoizedSum(1, 2, 3));      // From cache

// console.log(memoizedSum(10, 20, 30, 5)); // Calculates
// console.log(memoizedSum(10, 20, 30, 5)); // From cache


//=================================================================================================
//=================================================================================================



import stringify from 'fast-json-stable-stringify';

function memo(fn) {
  const cache = new Map();
  return function (...args) {
    const key = stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const memoizedSum = memo(sum);
console.log(memoizedSum(2, 3));