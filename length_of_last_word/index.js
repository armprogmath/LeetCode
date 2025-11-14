// var lengthOfLastWord = function(s) {
//
//     const arrayWords = s.trim().split(" ");
//     const lastWord = arrayWords[arrayWords.length-1]
//     return lastWord.length
//
// };

//console.log(lengthOfLastWord("hello world12 "))

var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let length = 0;

    // skip trailing spaces
    while (i >= 0 && s[i] === ' ') i--;

    // count letters of last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};

console.log(lengthOfLastWord("Hello world "))