# [2704. To Be Or Not To Be][title]

## Description
Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.

- `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.
- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.
 

### Example 1:
>  __Input__: func = () => expect(5).toBe(5)    
   __Output__: {"value": true}      
   __Explanation__: 5 === 5 so this expression returns true.      



### Example 2:
>  __Input__: func = () => expect(5).toBe(null)      
   __Output__: {"error": "Not Equal"}     
   __Explanation__: 5 !== null so this expression throw the error "Not Equal".

### Example 3:
>  __Input__: func = () => expect(5).notToBe(null)     
   __Output__: {"value": true}     
   __Explanation__: 5 !== null so this expression returns true.



## Solution

1. 宣告`expect`函式 函式會返回 {toBe,notToBe}'兩個函式
```
expect = (val1)=>{

   toBe = (val2) => {
      return  ;
   };
   notToBe = (val2) => {
      return ;
   };
   return {toBe,notToBe}
}
```

2. toBe,notToBe 兩個函式用三元運算子判斷val2參數與外部作用域的val1是否相符
```
expect = (val1)=>{

   toBe = (val2) => {
      return val1 === val2? true : throw new Error ("Not Equal") ;
   };

   notToBe = (val2) => {
      return val1 !== val2? true : throw new Error ("Equal") ;
   };

   return {toBe,notToBe}
}
```
3. 修正：三元運算符返回一個表達式的值，而throw new Error是陳述句，不能直接作為表達式返回。      
因此將throw new Error用函式包裝成表達式。
```
expect = (val1)=>{

   throwErr= (str)=>{
      throw new Error(str);
   }

   toBe = (val2) => {
      return val1 === val2? true : throwErr("Not Equal") ;
   };

   notToBe = (val2) => {
      return val1 !== val2? true : throwErr("Equal") ;
   };

   return {toBe,notToBe}
}
```

4. 參考其他solution 
- 代碼更為簡潔
   - 對於邏輯比較單純的情況，可以直接在return撰寫邏輯
   - 比較運算符本身會return true，因此加上邏輯運算子處理false的結果
```
const expect = (val1) => {
   throwErr= (str) => {throw new Error(str)};
    
    return {
        toBe:    (val2) => val2 === val1 || throwErr("Not Equal"),
        notToBe: (val2) => val2 !== val1 || throwErr("Equal"),
    };
};
```

[title]: https://leetcode.com/problems/to-be-or-not-to-be/