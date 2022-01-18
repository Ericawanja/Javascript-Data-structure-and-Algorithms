# 88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

## Algorithm


## Code 

```javascript

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
     let nums1_index= m-1;
     let nums2_index= n-1
     let final_arr_index= m+n-1;
     while (nums2_index>=0){
         let nums1_value= nums1[nums1_index]
         let nums2_value= nums2[nums2_index]
         if(nums1_value>nums2_value){
             nums1[final_arr_index]= nums1_value;
             nums1_index--;
             final_arr_index--
         }else{
            nums1[final_arr_index]= nums2_value;
            nums2_index--;
            final_arr_index--
         }
     }
    return nums1;
};
console.log(merge( [1,2,3,0,0,0],3, [2,5,6], 3))

```