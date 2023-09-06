# [2715. Timeout Cancellation][title]

## Description
Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

After a delay of `t`, `fn` should be called with `args` passed as parameters unless `cancelFn` was invoked before the delay of `t` milliseconds elapses, specifically at `cancelT` ms. In that case, `fn` should never be called.

 
### Example 1:    
>  __Input__:
   fn = (x) => x * 5, args = [2], t = 20, cancelT = 50                   
   __Output__:       
   [{"time": 20, "returned": 10}]    
   __Explanation__:     
   const cancel = cancellable((x) => x * 5, [2], 20); // fn(2)    
   called at t=20ms     
   setTimeout(cancel, 50);    

   The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened after the execution of fn(2) at 20ms.           
 
### Example 2:    
>  __Input__:     
   fn = (x) => x**2, args = [2], t = 100, cancelT = 50                      
   __Output__:    
   []         
   __Explanation__:     
   const cancel = cancellable((x) => x**2, [2], 100); // fn(2) not called     
   setTimeout(cancel, 50);    

The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.           

### Example 3:    
>  __Input__:     
   fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelT = 100                      
   __Output__:    
   [{"time": 30, "returned": 8}]         
   __Explanation__:     
   const cancel = cancellable((x1, x2) => x1 * x2, [2,4], 30); // fn(2,4) called at t=30ms      
   setTimeout(cancel, 100);      

   The cancellation was scheduled to occur after a delay of cancelT (100ms), which happened after the execution of fn(2,4) at 30ms.    
         


### Constraints:     
- `fn is a function`
- `args is a valid JSON array`
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelT <= 1000`

## Solution

1. 給定一個函數 fn、一個參數數組 args 和一個以毫秒為單位的超時 t，返回一個取消函數 cancelFn。另外testcase有提到cancelT。
```
const cancellable = function(fn,args,t,cancelT){

    //其他過程

    const cancelFn = ()=>{
        //清除定時器的邏輯
    };

    return cancelFn;
};
```

2. setTimeout的`t`時間到了會執行`fn`，而`cancelT`時間到了會執行`cancelFn`。
- 在延遲 t 秒後，應使用作為參數傳遞的 args 來調用 fn，
   - 題意是請我們設定`setTimeout`的意思。
- 在延遲 cancelT 秒後，應調用 `cancelFn`，
   - `cancelFn`的方法，那就是`clearTimeout(timeoutId);`，因此宣告`let timeoutId` = 先前的`setTimeout` ( setTimeout函數執行後會返回timeoutId )。
   - 題意是請我們設定`clearTimeout`的意思。
- 除非在延遲 t 毫秒之前（特別是在 cancelT ms 處）調用 cancelFn。     
在這種情況下，永遠不應調用 fn。

```
const cancellable = function(fn,args,t,cancelT){

    let timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    const cancelFn = ()=>{
        clearTimeout(timeoutId);
    };

    setTimeout(()=>cancelFn, cancelT);

    return cancelFn;
};

```

[title]: https://leetcode.com/problems/sleep/