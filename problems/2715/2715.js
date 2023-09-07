// 2715. Timeout Cancellation
// 給定一個函數 fn、一個參數數組 args 和一個以毫秒為單位的超時 t，返回一個取消函數 cancelFn。 
// Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

// 在延遲 t 後，應使用作為參數傳遞的 args 來調用 fn，
// After a delay of `t`, `fn` should be called with `args` passed as parameters 

// 除非在延遲 t 毫秒之前（特別是在 cancelT ms 處）調用 cancelFn。 
// 在這種情況下，永遠不應調用 fn。
// unless `cancelFn` was invoked before the delay of `t` milliseconds elapses, 
// specifically at `cancelT` ms.
//  In that case, `fn` should never be called.

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

//testcase1

const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancel = cancellable(fn, args, t); 

const cancelT = 50;

setTimeout(() => {
   cancel()
   console.log(`T1定時結束`) 
}, cancelT)



//testcase2
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

