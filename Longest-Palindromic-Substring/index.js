//5. Longest Palindromic Substring
function longestPalindromicSubstring(input) {
    const str = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0
    let right = str.length - 1;

    let map = new Map()

    while (left < right) {
        if (str[left] !== str[right]) return false

        map = map.set(str[left]);

        left++
        right--
    }
    return true

}

console.log(longestPalindromicSubstring("abbaabba"))