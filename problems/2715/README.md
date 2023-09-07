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

1. 給定一個函數 fn、一個參數數組 args 和一個以毫秒為單位的超時 t，返回一個取消函數 cancelFn。
```
const cancellable = function(fn,args,t,cancelT){

    //setTimeout函數執行後會返回timeoutId
    let timeoutId = setTimeout(() => {
        fn(...args);
        console.log(`調用fn`);
    }, t);

    const cancelFn = ()=>{
        //clearTimeout(timeoutId);的用法
        clearTimeout(timeoutId);
    };    

    return cancelFn;
};

```

2. 測試 在延遲 t 毫秒之前（特別是在 cancelT ms 處）調用 cancelFn。

testcase1
```
const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancel = cancellable(fn, args, t); 

const cancelT = 50;

setTimeout(() => {
   cancel()
   console.log(`T1定時結束`) 
}, cancelT)
```
testcase2
```
//當 cancelT 小於 t 時，fn 不應該被調用

const fn2 = (x) => x * 5;
const args2 = [2];
const t2 = 100;
const cancel2 = cancellable(fn2, args2, t2); 

const cancelT2 = 50;

setTimeout(() => {
   cancel2();
   console.log(`T2定時結束`) ;
}, cancelT2)
```

[title]: https://leetcode.com/problems/sleep/