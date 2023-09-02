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