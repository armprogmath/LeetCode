function reverse(x) {
    const INT_MIN = -(2 ** 31);       // -2147483648
    const INT_MAX =  (2 ** 31) - 1;   //  2147483647

    let n = Math.abs(x);
    let rev = 0;

    while (n > 0) {
        const d = n % 10;               // last digit
        n = Math.trunc(n / 10);

        // overflow check BEFORE multiplying by 10 and adding d
        if (rev > Math.trunc(INT_MAX / 10) || (rev === Math.trunc(INT_MAX / 10) && d > 7)) {
            return 0;
        }
        rev = rev * 10 + d;
    }

    rev = x < 0 ? -rev : rev;
    return (rev < INT_MIN || rev > INT_MAX) ? 0 : rev;
}

console.log(reverse(321))


