# [2667. Create Hello World Function][title]

## Description
Write a function `createHelloWorld`.       
It should return a new function that always returns `"Hello World"`.
 

### Example 1:
>  __Input__: args = []   
   __Output__: "Hello World"      
   __Explanation__:
   const f = createHelloWorld();    
   f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".


### Example 2:
>  __Input__: args = [{},null,42]      
   __Output__: "Hello World"     
   __Explanation__:     
   const f = createHelloWorld();    
   f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

### Constraints:

- `0 <= args.length <= 10`


## Solution

   - `createHelloWorld` 函數是一個箭頭函數，它不接受任何參數。它的主體返回另一個箭頭函數。
   - 內部的箭頭函數 `() => "Hello World"` 返回字符串 `"Hello World"`。
   
   - 由於內部的箭頭函數在外部函數 `createHelloWorld` 中被定義，它形成了一個閉包。這意味著它可以訪問外部函數的作用域，即使外部函數已經執行完畢。

   - 將 `createHelloWorld` 調用存儲在一個變數中，然後多次調用該變數，每次都會返回 `"Hello World"` 字符串，因為內部的閉包保留了這個字符串的值。

1. Write a function createHelloWorld. 
```
const createHelloWorld = ()=>{}
```

2. It should return a new function that always returns "Hello World".

```
const createHelloWorld = ()=>{
   return ()=>{
      return "Hello World"
   }
}  
```
3. 箭頭函式縮寫整理
```
const createHelloWorld = ()=> ()=> "Hello World";
```



[title]: https://leetcode.com/problems/create-hello-world-function/
