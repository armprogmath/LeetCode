//5. Longest Palindromic Substring

//In this case the code checks string is palindrome or not

// function longestPalindromicSubstring(input) {
//     const str = input.toLowerCase().replace(/[^a-z0-9]/g, '');
//
//     let left = 0
//     let right = str.length - 1;
//
//     let map = new Map()
//
//     while (left < right) {
//         if (str[left] !== str[right]) return false
//
//         map = map.set(str[left]);
//
//         left++
//         right--
//     }
//     return true
//
// }
//
// console.log(longestPalindromicSubstring("abbaabba"))



//Version 2
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLen = 1;

    const expandFromCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLen = right - left + 1;
            if (currentLen > maxLen) {
                maxLen = currentLen;
                start = left;
            }
            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        // Odd length: center at i
        expandFromCenter(i, i);

        // Even length: center between i and i+1
        expandFromCenter(i, i + 1);
    }

    return s.slice(start, start + maxLen);
};

