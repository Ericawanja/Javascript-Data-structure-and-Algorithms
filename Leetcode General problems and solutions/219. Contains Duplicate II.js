/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (numsMap.has(num) && Math.abs(i - numsMap.get(num)) <= k) {
      return true;
    }
    numsMap.set(num, i)
  }
  return false;
};
(nums = [1, 2, 3, 1, 2, 3]), (k = 2);

console.log(containsNearbyDuplicate(nums, k));
