// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// 給定一個整數數組 nums、一個歸約函數 fn 和一個初始值 init，返回一個歸約數組。

// A reduced array is created by applying the following operation:
// 通過應用以下操作創建縮減數組
// val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...

// until every element in the array has been processed. The final value of val is returned.
// If the length of the array is 0, it should return init.
// ...直到數組中的每個元素都被處理完畢。返回 val 的最終值。
// 如果數組的長度為 0，則應返回 init。

// Please solve it without using the built-in Array.reduce method.
//  請不要使用內置的 Array.reduce 方法來解決它。
// arr.reduce(fn,init)
const reduce = (nums, fn, init) => {
   if (nums.length == 0) {return init;};
   let val = init;
   for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
   }
   return val;
}

//Testcase
nums1 = [1,2,3,4]
function sum1(accum, curr) { return accum + curr; }
init1 = 0
console.log(reduce(nums1,sum1,init1));

nums2 = [1,2,3,4]
function sum2(accum, curr) { return accum + curr * curr; }
init2 = 100
console.log(reduce(nums2,sum2,init2));

nums3 = []
function sum3(accum, curr) { return 0; }
init3 = 25
console.log(reduce(nums3,sum3,init3));