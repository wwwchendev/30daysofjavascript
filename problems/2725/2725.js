// 2725. Interval Cancellation

// 給定一個函數 fn、一個參數數組 args 和一個間隔時間 t，返回一個取消函數 cancelFn。    
// Given a function `fn`, an array of arguments `args`, 
// and an interval time `t`, return a cancel function `cancelFn`.

// 應立即使用 args 調用函數 fn，然後每 t 毫秒再次調用一次，
// 直到在 cancelT 毫秒調用 cancelFn。      
// The function `fn` should be called with `args` immediately 
// and then called again every `t` milliseconds 
// until `cancelFn` is called at `cancelT` ms.
 
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


 //test
 let fn = (x) => x * 2;
 let args = [4];
 let t = 20;
 let cancelT = 110; 

 const cancel = cancellable(fn, args, t); 
 
 setTimeout(() => {
    cancel()
    console.log(`定時結束`) 
 }, cancelT)


