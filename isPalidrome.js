/*
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
*/

/*
Input: s = "Was it a car or a cat I saw?"

Output: true
*/

// initial solution is to cut the string in half and reverse it
// converting to lowerCase is O(n)
// replaceing is also O(n)
// loop is O(n)
// solution is O(n)
function isPalindrome(s) {
  const str = s.toLowerCase().replace(/[^a-zA-Z]/g, "");

  const half = str.length / 2;
  let k = 0;
  for (let i = str.length - 1; i > half; i--) {
    console.log(str[i], str[k]);
    if (str[i] !== str[k]) return false;
    k++;
  }
  return true;
}

// each of these javascript built-in functions are O(n)
// therefore O(n)
const isPalindrome2 = (s) => {
  const str = s.toLowerCase().replace(/[^a-zA-Z]/g, "");
  const result = str.split("").reverse().join("");

  return result === str;
};

console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome2("Was it a car or a cat I saw?"));
