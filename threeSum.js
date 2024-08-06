/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

You may return the output and the triplets in any order.
*/

/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = [0,1,1]
Output: []

Input: nums = [0,0,0]
Output: [[0,0,0]]
*/

// initial solution:
// create result array to hold the final answer
// sort the numbers
// loop through and set left and right pointers
// skip any duplicate numbers inside the loop

// nums = [ -4, -1, -1, 0, 1, 2 ]
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let result = [];
  // length is -2 because you have left and right pointers as well
  for (let i = 0; i < nums.length - 2; i++) {
    // if num[i] > 0 then everything on right is positive number we can't make 0
    if (nums[i] > 0) break;
    // if second iteration+ we want to check if this number is equal to prev num else skip it because it will cause duplicate answers
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Move pointers to skip duplicates
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
