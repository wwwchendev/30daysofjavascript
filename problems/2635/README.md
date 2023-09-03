# [2635. Apply Transform Over Each Element in Array][title]

## Description     
Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

### Example 1:
>  __Input__:   
   arr = [1,2,3],       
   fn = function plusone(n) { return n + 1; }      
   __Output__: [2,3,4]              
   __Explanation__:     
   const newArray = map(arr, plusone); // [2,3,4]     
   The function increases each value in the array by one.      

### Example 2:
>  __Input__:     
   arr = [1,2,3],       
   fn = function plusI(n, i) { return n + i; }        
   __Output__:[1,3,5]      
   __Explanation__:     
   The function increases each value by the index it resides in.     
      

### Example 3:
>  __Input__:    
   arr = [10,20,30],       
   fn = function constant() { return 42; }      
   __Output__:[42,42,42]      
   __Explanation__:     
   The function always returns 42.
      


### Constraints:
- `0 <= arr.length <= 1000`
- `-109 <= arr[i] <= 109`
- `fn returns a number`

## Solution

- 題目需要我們設計一個帶入整數陣列和映射函式，不使用array.map()，返回轉換後陣列的函式。
```
const map = (arr,fn)=>{
   let returnedArray = [];
   ...
   return returnedArray;
}
```
- 用for迴圈遍歷 調用fn() 帶入arr陣列每個元素的值以及索引
- 將fn()返回的值 push到returnedArray
```
const map = (arr,fn)=>{
   let returnedArray = [];
   for(let i=0;i<arr.length;i++){
      returnedArray.push(fn(arr[i],i));
   };
   return returnedArray;
}
```


[title]: https://leetcode.com/problems/apply-transform-over-each-element-in-array/