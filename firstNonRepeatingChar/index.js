

function firstNonRepeatingChar(str) {
    const freq = new Map();
    const list = []
    // 1) count characters
    for (const ch of str) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
        console.log(freq)
    }

    // 2) return the first char with count 1
    for (const ch of str) {
        if (freq.get(ch) === 1) return ch;
    }
    return null; // or '' if you prefer
}

console.log(firstNonRepeatingChar("swissllpp")); // "w"


// function firstNonRepeatingChar(nums) {
//
//     const freq = new Map();
//     const list = new Set();
//
//     for (const num of nums) {
//         freq.set(num, (freq.get(num) || 0) + 1);
//     }
//
//     for (const num of nums) {
//         if (freq.get(num) > 1) list.add(num);
//     }
//
//     return Array.from(list);
// }
//
// console.log(firstNonRepeatingChar("swissllpp")); // "w"


