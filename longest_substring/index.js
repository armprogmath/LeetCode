var lengthOfLongestSubstring = function(s) {
    let left = 0, best = 0;
    const last = new Map(); // char -> last index

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        if (last.has(ch) && last.get(ch) >= left) {
            left = last.get(ch) + 1;      // skip past previous same char
        }
        last.set(ch, right);

        best = Math.max(best, right - left + 1);
    }

    return best;
}

// Examples:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")