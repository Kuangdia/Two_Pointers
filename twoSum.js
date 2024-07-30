/*
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use O(1) additional space.
*/

/*
Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].
*/

function twoSum(numbers, target) {
  if (!numbers.length) return [];

  let numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let result = target - numbers[i];

    if (numMap.has(result)) {
      return [numMap.get(result) + 1, i + 1];
    }
    numMap.set(numbers[i], i);
  }
}

// console.log(twoSum([-5, -3, 0, 2, 4, 6, 8], 5));

function twoSum2(numbers, target) {
  let left = 0; // Start pointer at the beginning of the array
  let right = numbers.length - 1; // Start pointer at the end of the array

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSum2([-5, -3, 0, 2, 4, 6, 8], 5));
