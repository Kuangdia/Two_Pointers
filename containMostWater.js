/*
You are given an integer array heights where heights[i] represents the height of the i bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.
*/

/*
Input: height = [1,7,2,5,4,7,3,6]
Output: 36

Input: height = [2,2,2]
Output: 4
*/

// initial solution: pinpoint two max numbers that is not same index
// then go left and right between them to compare if they have the maxContainerValue and maxContainedWater value
// edge case, if arr.length === 2 return

// actual solution: set two pointers left and right
// while left is less than right
//
function maxArea(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    let height = Math.min(heights[left], heights[right]);
    let width = right - left;
    let area = height * width;

    maxArea = Math.max(maxArea, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
