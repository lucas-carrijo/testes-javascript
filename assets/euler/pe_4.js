function isPalindrome(num) {
    // get reverse
    let reversed = String(num)
      .split('')
      .reverse()
      .join('');
    // return equality check
    return Number(reversed) === num;
  }

  function largestPalindromeProduct(n) {
    let highest = 0;
    // Find largest number
    let largestNum = '9';
    largestNum += Number(largestNum.repeat(n - 1));
    largestNum = Number(largestNum);

      // loop left number
    for (let i = largestNum; i > 0; i--) {
          // loop right number
      for (let j = largestNum; j > 0; j--) {
        let product = i * j;
              // check if palindrome
        if (isPalindrome(product)) {
          if (product > highest) highest = product;
          // we have the highest palindrome for this set, skip to next loop
          break;
        }
      }
    }
      // return the highest palindrome we found
    return highest;
  }