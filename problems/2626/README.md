# [2626. Array Reduce Transformation][title]

## Description     
Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return a reduced array.

A reduced array is created by applying the following operation: `val = fn(init, nums[0])`, `val = fn(val, nums[1])`, `val = fn(val, nums[2])`, `...` until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return `init`.

Please solve it without using the built-in `Array.reduce` method.



### Example 1:
>  __Input__: 
   nums = [1,2,3,4]     
   fn = function sum(accum, curr) { return accum + curr; }     
   init = 0    
   __Output__: 10     
   __Explanation__:
   initially, the value is init=0.     
   (0) + nums[0] = 1    
   (1) + nums[1] = 3    
   (3) + nums[2] = 6    
   (6) + nums[3] = 10      
   The final answer is 10.    



### Example 2:
>  __Input__:     
   nums = [1,2,3,4]         
   fn = function sum(accum, curr) { return accum + curr * curr; }       
   init = 100     
   __Output__: 130  
   __Explanation__:     
   initially, the value is init=100.      
   (100) + nums[0]^2 = 101    
   (101) + nums[1]^2 = 105    
   (105) + nums[2]^2 = 114    
   (114) + nums[3]^2 = 130    
   The final answer is 130.        


### Example 2:
>  __Input__:     
   nums = []      
   fn = function sum(accum, curr) { return 0; }           
   init = 25     
   __Output__: 25    
   __Explanation__: For empty arrays, the answer is always init.     



### Constraints:

- `0 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`
- `0 <= init <= 1000`


## Solution

- 題目需要我們設計一個帶入整數陣列和累加函式(歸約函式)，不使用Array.reduce()，返回轉換後陣列的函式。
- 如果數組的長度為 0，則應返回 init。
- 宣告val作為當前累加的值，也是最後需要return的值，在一開始當前累加的值會是init。
```
const reduce = (nums, fn, init) => {
   if (nums.length == 0) {return init;};
   let val = init;

   //...累加邏輯

   return val;
}
```

- 使用for迴圈 讓當前累加值 與遍歷的陣列元素的值加總 `val = fn(val, nums[i]);`
- 假設 nums=[1,4,5,7]; 那迴圈就會是 `init的0+1,val=1;`、`1+4,val=5,`、`5+5,val=10` ...類推。
- 遍歷結束後返回val的值。

```
const reduce = (nums, fn, init) => {
   if (nums.length == 0) {return init;};
   let val = init;

   for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
   }

   return val;
}
```

[title]: https://leetcode.com/problems/array-reduce-transformation/