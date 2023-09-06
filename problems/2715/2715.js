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
    }, t);

    const cancelFn = ()=>{
        //clearTimeout(timeoutId);的用法
        clearTimeout(timeoutId);
    };
    setTimeout(()=>cancelFn, cancelT);

    return cancelFn;
};


//testcase

// 測試案例 1
const fn1 = (x) => x * 5;
const args1 = [2];
const t1 = 20;
const cancelT1 = 50;

const result1 = [];
const cancel1 = cancellable((x) => {
    result1.push({ time: t1, returned: x });
    return x;
}, args1, t1, cancelT1);

setTimeout(() => {
    console.log("Test Case 1 Result:", result1[0]);
    cancel1();
}, 60); // 執行取消函數，應該在 fn1(2) 後執行，輸出 [{"time": 20, "returned": 10}]

// 測試案例 2
const fn2 = (x) => x ** 2;
const args2 = [2];
const t2 = 100;
const cancelT2 = 50;

const result2 = [];
const cancel2 = cancellable((x) => {
    result2.push({ time: t2, returned: x });
    return x;
}, args2, t2, cancelT2);

setTimeout(() => {
    console.log("Test Case 2 Result:", result2[0]);
    cancel2();
}, 60); // 執行取消函數，應該在 fn2(2) 前執行，不會執行 fn2，輸出 []

// 測試案例 3
const fn3 = (x1, x2) => x1 * x2;
const args3 = [2, 4];
const t3 = 30;
const cancelT3 = 100;

const result3 = [];
const cancel3 = cancellable((x1, x2) => {
    result3.push({ time: t3, returned: x1 * x2 });
    return x1 * x2;
}, args3, t3, cancelT3);

setTimeout(() => {
    console.log("Test Case 3 Result:", result3[0]);
    cancel3();
}, 130); // 執行取消函數，應該在 fn3(2,4) 後執行，輸出 [{"time": 30, "returned": 8}]
