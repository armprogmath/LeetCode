const stringify = require('fast-json-stable-stringify');

function memo(fn) {
  const cache = new Map();

  return function (...args) {
    const key = stringify(args);
    //console.log("KEY: ", key, "args: " + JSON.stringify(args));
    if (cache.has(key)) {
      console.log('Fetching from cache for:', args);
      return cache.get(key);
    }
    console.log('Calculating result for:', args);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

module.exports = { memo };