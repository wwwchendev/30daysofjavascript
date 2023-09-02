# [2665. Counter II][title]

## Description     
Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions.

The three functions are:

- `increment()` increases the current value by 1 and then returns it.
- `decrement()` reduces the current value by 1 and then returns it.
- `reset()` sets the current value to `init` and then returns it.

### Example 1:
>  __Input__: init = 5, calls = ["increment","reset","decrement"]   
   __Output__: [6,5,4]      
   __Explanation__:
   const counter = createCounter(5);      
   counter.increment(); // 6     
   counter.reset(); // 5      
   counter.decrement(); // 4     



### Example 2:
>  __Input__:     
init = 0,      
calls = ["increment","increment","decrement","reset","reset"]          
   __Output__: [1,2,1,0,0]   
   __Explanation__:     
   const counter = createCounter(0);      
   counter.increment(); // 1     
   counter.increment(); // 2     
   counter.decrement(); // 1     
   counter.reset(); // 0      
   counter.reset(); // 0      


### Constraints:

- `-1000 <= init <= 1000`
- `total calls not to exceed 1000`


## Solution

- 這一題由於調用init()的時候需要return 參數`i`，所以要在外部作用域宣告一個變數`init`把`i`初始值存起來。
- 依照增減的邏輯使用前置遞增運算子，讓返回的值是新的數值。
```
createCounter=(i)=>{
   let init = i;
   return {
      increment:()=>++i,
      decrement:()=>--i,
      reset:()=>{
         i=init;
         return i
      },
   }
}
```



[title]: https://leetcode.com/problems/counter-ii/