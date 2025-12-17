///Balanced Brackets / Valid Parentheses task from LeetCode (Problem 20).

function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of s) {
        // If closing bracket
        if (map[ch]) {
            const top = stack.pop();
            if (top !== map[ch]) return false;
        }
        // If opening bracket
        else {
            stack.push(ch);
        }
    }

    return stack.length === 0;
}