# [2634. Filter Elements from Array][title]

## Description     
Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:

- `arr[i]` - number from the `arr`
- `i` - index of `arr[i]

`filteredArr` should only contain the elements from the `arr` for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is a value where `Boolean(value)` returns true.

Please solve it without the built-in Array.filter method.

### Example 1:
>  __Input__:     
   arr = [0,10,20,30],     
   fn = function greaterThan10(n) { return n > 10; }     
   __Output__: [20,30]          
   __Explanation__:
   const newArray = filter(arr, fn); // [20, 30]      
   The function filters out values that are not greater than 10      


### Example 2:
>  __Input__:     
   arr = [1,2,3],       
   fn = function firstIndex(n, i) { return i === 0; }       
   __Output__:  [1]  
   __Explanation__:     
      fn can also accept the index of each element    
   In this case, the function removes elements not at index 0        

### Example 3:
>  __Input__:     
   arr = [-2,-1,0,1,2],       
   fn = function plusOne(n) { return n + 1 }                
   __Output__: [-2,0,1,2]   
   __Explanation__:     
   Falsey values such as 0 should be filtered out     



### Constraints:

- `0 <= arr.length <= 1000`
- <code>-10<sup>9</sup> <= arr[i] <= 10<sup>9</sup></code>


## Solution
- 題目需要我們設計一個帶入整數陣列和篩選函式，不使用Array.filter()，返回轉換後陣列的函式。
```
const filter=(arr,fn)=>{
   let filteredArr = [];

   return filteredArr;
}
```
- 用for迴圈遍歷 調用fn() 帶入arr陣列每個元素的值以及索引
- 篩選函式fn() 會return布林值，如果符合篩選條件，則push到filteredArr陣列。
```
const filter=(arr,fn)=>{
   let filteredArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i],i)) {
         filteredArr.push(arr[i]);
      }
   }
   return filteredArr;
}
```


[title]: https://leetcode.com/problems/filter-elements-from-array/