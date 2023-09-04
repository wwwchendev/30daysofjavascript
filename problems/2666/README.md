# [2666. Allow One Function Call][title]


## Description     
Given a function `fn`, return a new function that is identical to the original function except that it ensures `fn` is called at most once.

- The first time the returned function is called, it should return the same result as `fn`.
- Every subsequent time it is called, it should return `undefined`.

### Example 1:
>  __Input__:     
   fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]         
   __Output__:    
   [{"calls":1,"value":6}]          
   __Explanation__:        
   const onceFn = once(fn);      
   onceFn(1, 2, 3); // 6      
   onceFn(2, 3, 6); // undefined, fn was not called      

### Example 2:
>  __Input__:    
   fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]    
   __Output__:       
   [{"calls":1,"value":140}]            
   __Explanation__:     
   const onceFn = once(fn);      
   onceFn(5, 7, 4); // 140    
   onceFn(2, 3, 6); // undefined, fn was not called      
   onceFn(4, 6, 8); // undefined, fn was not called      


### Constraints:

- `1 <= calls.length <= 10`
- `1 <= calls[i].length <= 100`
- `2 <= JSON.stringify(calls).length <= 1000`


## Solution

1. 宣告一個函式`once`並存入函式`fn`做為參數。
2. 宣告內部變數`wasCalled`用於判斷是否曾被調用，初始值為false。
3. 以if條件式判斷wasCalled的值決定return的對象。
```
const once = (fn)=>{
   let wasCalled = false;

   return (...args)=>{
      if(!wasCalled){
         // wasCalled==false的處理方式
      }else{
         // wasCalled==true的處理方式
      }  
   }
}
```
4. wasCalled==false 時執行以下指令     
- 用外部作用域的變數保存調用紀錄
   -  __wasCalled=true;__    
      調用的時候閉包會保存外部作用域變數`wasCalled`的值，
      第一次調用判斷時初始值為`false`所以能成功調用。      
      後續調用判斷時，由於我們將`wasCalled`改為`true`;    
      這會讓條件語句進行`wasCalled==true`的處理方式，也就是`return undefined`。     

   __題目希望我們返回與原始函數相同結果的新函數__         
   做法：宣告新函式引用原始函式，同時將原始函數的參數傳遞給新函數
   -  let result = fn(...args);     

5. wasCalled==true 則return undefined;
```
const once = (fn)=>{
   let wasCalled = false;

   return (...args)=>{
      if(!wasCalled){
         wasCalled=true;

         let result = fn(...args); 
         return result;
      }else{
         return undefined;
      }  
   }
}
```

[title]: https://leetcode.com/problems/allow-one-function-call/