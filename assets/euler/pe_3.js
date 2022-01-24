const largestPrimeFactor = n => {
    let i = 2;
    while (i * i < n) {
        while (n % i === 0) { n = n / i; }
        i++;
    }
    return n;
};

console.log(largestPrimeFactor(600851475143));