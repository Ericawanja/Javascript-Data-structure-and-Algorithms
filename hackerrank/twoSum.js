function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j= i +1; j<nums.length; j++){
        if (nums[i] + nums[j] === target) return [ i, nums.findIndex(n=> n===nums[j])]
    }
  }
}
console.log(twoSum([2, 3, 4, 5, 6, 7], 13));
