# [2629. Function Composition][title]

## Description     
Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the function composition of the array of functions.

The function composition of `[f(x), g(x), h(x)]` is `fn(x) = f(g(h(x)))`.

The function composition of an empty list of functions is the identity function `f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output.



### Example 1:
>  __Input__:     
   functions = [x => x + 1, x => x * x, x => 2 * x], x = 4     
   __Output__:  65       
   __Explanation__:    
   Evaluating from right to left ...      
   Starting with x = 4.    
   2 * (4) = 8    
   (8) * (8) = 64    
   (64) + 1 = 65        

### Example 2:
>  __Input__:     
   functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1     
   __Output__:    1000     
   __Explanation__:       
   Evaluating from right to left ...      
   10 * (1) = 10     
   10 * (10) = 100      
   10 * (100) = 1000    

### Example 3:
>  __Input__: functions = [], x = 42    
   __Output__: 42    
   __Explanation__:   
   The composition of zero functions is the identity function  




### Constraints:

- `-1000 <= x <= 1000`
- `0 <= functions.length <= 1000`
- `all functions accept and return a single integer`


## Solution

### 使用 for迴圈 遞減的寫法

1. 宣告一個函式`compose`作為組合陣列的方法，而它的參數則為函式陣列`functions` 
2. 如果functions是空陣列，則返回恆等函數 (x)=>x。

```
function compose(functions) {
   if (functions.length === 0) {
      return (x) => x;
   }

   //調用函式陣列的邏輯
}
```

3. 撰寫調用函式陣列的邏輯：初次迭代的參數為x，第二次迭代的參數是上一次調用函式的result，並將它做為參數代入下一個陣列元素的函式中，函式應從函式陣列的最後一項開始調用。
4. 設計一個 for遞減循环 (`for(初始,判斷,迭代)`)，陣列最後一個元素開始遍歷到第一項元素，由於希望從陣列最後一項Array[index]開始，陣列中末項元素的索引index 用 Array.lenth-1求出。

```
function compose(functions) {
   if (functions.length === 0) {
      return (x) => x;
   }

   return function (x) {
      let result = x;

      for (let i = functions.length - 1; i >= 0; i--) {
         result = functions[i](result);
      }
      return result;
   };
}
```


### 使用 Array.reduceRight() 的寫法
- 使用 reduceRight 遞減循環，從陣列最後一個元素開始遍歷到第一項元素。
- 累加的初始參數是x，代入迭代的currentFunction後，返還result作為下一次函式的參數。
```
function compose(functions) {
   return function (x) {
      return functions.reduceRight((result, currentFunction) => {
         return currentFunction(result);
      }, x);
   };
}
```

[title]: https://leetcode.com/problems/function-composition/