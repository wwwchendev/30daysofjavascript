# [2725. Interval Cancellation][title]

## Description
給定一個函數 fn、一個參數數組 args 和一個間隔時間 t，返回一個取消函數 cancelFn。    
Given a function `fn`, an array of arguments `args`, and an interval time `t`, return a cancel function `cancelFn`.

應立即使用 args 調用函數 fn，然後每 t 毫秒再次調用一次，直到在 cancelT 毫秒調用 cancelFn。      
The function `fn` should be called with `args` immediately and then called again every `t` milliseconds until `cancelFn` is called at `cancelT` ms.
 
 

### Example 1:    
>  __Input__:           
   fn = (x) => x * 2, args = [4], t = 35, cancelT = 190                  
   __Output__:       
   [     
   {"time": 0, "returned": 8},      
   {"time": 35, "returned": 8},     
   {"time": 70, "returned": 8},     
   {"time": 105, "returned": 8},    
   {"time": 140, "returned": 8},    
   {"time": 175, "returned": 8}     
   ]              
   __Explanation__:     
   const cancel = cancellable(x => x * 2, [4], 35);      
   setTimeout(cancel, 190);      

   Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.    
   1st fn call is at 0ms. fn(4) returns 8.      
   2nd fn call is at 35ms. fn(4) returns 8.     
   3rd fn call is at 70ms. fn(4) returns 8.     
   4th fn call is at 105ms. fn(4) returns 8.    
   5th fn call is at 140ms. fn(4) returns 8.    
   6th fn call is at 175ms. fn(4) returns 8.    
   Cancelled at 190ms     


### Example 2:    
>  __Input__:           
   fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30, cancelT = 165                  
   __Output__:       
   [     
   {"time": 0, "returned": 10},     
   {"time": 30, "returned": 10},    
   {"time": 60, "returned": 10},    
   {"time": 90, "returned": 10},    
   {"time": 120, "returned": 10},      
   {"time": 150, "returned": 10}    
   ]              
   __Explanation__:     
   const cancel = cancellable((x1, x2) => (x1 * x2), [2, 5], 30);       
   setTimeout(cancel, 165);      

   Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.    
   1st fn call is at 0ms         
   2nd fn call is at 30ms     
   3rd fn call is at 60ms     
   4th fn call is at 90ms     
   5th fn call is at 120ms       
   6th fn call is at 150ms    
   Cancelled at 165ms  


### Example 3:    
>  __Input__:        
   fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50, cancelT = 180       
   __Output__:    
   [     
   {"time": 0, "returned": 9},      
   {"time": 50, "returned": 9},     
   {"time": 100, "returned": 9},    
   {"time": 150, "returned": 9}     
   ]               
   __Explanation__:     
   const cancel = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50);    
   setTimeout(cancel, 180);      

   Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is   cancelled.     
   1st fn call is at 0ms      
   2nd fn call is at 50ms     
   3rd fn call is at 100ms    
   4th fn call is at 150ms    
   Cancelled at 180ms      
   

### Constraints:
- `fn` is a function
- `args` is a valid JSON array
- `1 <= args.length <= 10`
- `30 <= t <= 100`
- `10 <= cancelT <= 500`

## Solution

### 思路


1. 首先調用`cancellable`函數，並傳遞了`fn`、`args`、和`t`參數。這個函數內部創建了一個定時器，每隔`t`毫秒調用一次`fn`函數，直到調用了`cancelFn`為止。

2. 接著，使用`setTimeout`函數來在`cancelT`毫秒後調用`cancelFn`。這意味著在`cancelT`毫秒之後，定時器將被清除，不再觸發`fn`函數的調用，從而實現了取消函數的效果。

這個作法的目的是為了在一定時間後停止定時器的執行，從而達到取消函數調用的目的。      
這是一種常見的實現方式，用來控制函數的執行時間。

### 步驟

#### 一、調用`cancellable`函式，調用後會呼叫fn與定時器，且會返回取消定時的方法`cancelFn`。
1. 給定一個函數 fn、一個參數數組 args 和一個間隔時間 t，返回一個取消函數 cancelFn。 
   ```
   var cancellable = function(fn, args, t) {
      
      //處理程式碼

      let cancelFn = () => {
         //取消程式碼
      };

      return cancelFn;
   };

   ```

2. 立即调用 fn 函数，并传递参数 args    
3. 设置定时器，每隔 t 毫秒再次调用 fn 函数，并传递参数 args     
   ```
   var cancellable = function(fn, args, t) {
      fn(...args);

      let id = setInterval(() => {
         fn(...args);
      }, t);

      let cancelFn = () => {
         //取消程式碼
      };

      return cancelFn;
   };
   ```
4. 在`cancelFn`內設置`clearInterval(id);` 以供後續調用時以清除`setInterval()`。
   ```
   var cancellable = function(fn, args, t) {
      fn(...args);

      let id = setInterval(() => {
         fn(...args);
      }, t);

      let cancelFn = () => {
         clearInterval(id);
      };

      return cancelFn;
   };
   ```

5. 由於希望在調用fn的時候了解時間以及返回值，      
   因此微調對調用fn(...args)的處理：新增了打印log。
```
var cancellable = function(fn, args, t) {
    
    let callFn = (...args)=>{
        let val = fn(...args);
        console.log(`time:${Date.now()},val:${val}`);
    }

    callFn(...args);

    let id = setInterval(() => {
        callFn(...args);
    }, t);

    let cancelFn = () => {
       clearInterval(id);
    };

    return cancelFn;
 };
```

#### 二、定時於`cancelT`毫秒後調用`cancelFn`。

   ```
   let fn = (x) => x * 2;
   let args = [4];
   let t = 20;
   let cancelT = 110; 

   const cancel = cancellable(fn, args, t); 
   
   setTimeout(() => {
      cancel()
      console.log(`計時結束`) 
   }, cancelT)
   ```




[title]: https://leetcode.com/problems/interval-cancellation/