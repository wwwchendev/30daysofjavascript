# [2620. Counter][title]

## Description
Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`,` n + 1`, `n + 2`, etc).

### Example 1:
>  __Input__:     
   args =n = 10      
   ["call","call","call"]            
   __Output__: [10,11,12]  
   __Explanation__:     
   counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
 



### Example 2:    
>  __Input__:  
   n = -2      
   ["call","call","call","call","call"]          
   __Output__: [-2,-1,0,1,2]  
   __Explanation__:     
   counter() initially returns -2. Then increases after each sebsequent call.
 

### Constraints:

let counter= (n)=>{
   let cuttentNum = n;
   n++;
   return cuttentNum;
}

## Solution


#### 閉包(closure)

閉包是編碼中的一個概念，通常在以下情況下使用：

- 封裝數據和行為：通過使用閉包，您可以創建一個函數，該函數封裝了某些數據（變量）以及對這些數據的操作（函數），從而隱藏了內部狀態，並提供了一種更安全的方式來訪問和修改數據。

- 維護狀態：閉包允許您在函數調用之間保留狀態。例如，計數器函數可以使用閉包來記錄狀態，即每次調用時遞增計數。
- 回調和事件處理：許多回調函數和事件處理函數都是閉包。它們可以捕獲外部範圍內的上下文信息，並在稍後的時間執行。
- 模塊化：通過使用閉包，您可以模擬私有變量和方法，從而創建模塊化的代碼結構，以防止全局作用域的污染。

#### 解析
1. `createCounter`中有一個閉包包含`counter`函式和變量`n`
   ```
   createCounter = (n) =>{
      counter=()=>{
         return n++; //後置遞增運算子 - 第一次調用 counterA() 返回 10，然後 n 增加到 11。
      }
      return counter;
   }

   // 將箭頭函式縮寫後，變成 const createCounter = (n)=> ()=> n++ ;
   ```

2. `counterA` 引用 `createCounter(10)` 的結果，因此繼承了 `createCounter` 函数内部的作用域，    
此時`counterA`閉包中的變數`n`會被保存下來，在後續的調用中該變量都可以被訪問和修改。     
   ```
   const counterA = createCounter(10);
   ```
Testcase
```
const results = [
   counterA(),
   counterA(),
   counterA()
];
```
```
console.log(results);      // 输出 [10, 11, 12]
```


[title]: https://leetcode.com/problems/counter