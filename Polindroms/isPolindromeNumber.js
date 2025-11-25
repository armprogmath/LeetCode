function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let rev = 0;
    while (x > rev) {
        rev = rev * 10 + (x % 10);
        x = Math.trunc(x / 10);
    }
    // For odd digit counts, drop the middle digit of rev (rev/10)

    return x === rev || x === Math.trunc(rev / 10);
}

//console.log(isPalindrome(321))
console.log(isPalindrome(654))