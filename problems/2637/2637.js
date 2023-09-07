// 2637. Promise Time Limit
// 給定一個異步函數“fn”和一個以毫秒為單位的時間“t”，返回輸入函數的新的時間限製版本。 
// `fn` 接受提供給限時函數的參數。
// Given an asynchronous function `fn` and a time `t` in milliseconds,
// return a new time limited version of the input function.
// `fn` takes arguments provided to the time limited function.

// 限時功能應遵循以下規則：
// The time limited function should follow these rules:

// - 如果“fn”在“t”毫秒的時間限制內完成，則時間限制函數應解析結果。
// - 如果 `fn` 的執行超出了時間限制，
//    則時間限制函數應拒絕並顯示字符串 `"Time Limit Exceeded"`。
//    - If the `fn` completes within the time limit of `t` milliseconds, 
// the time limited function should resolve with the result.
// - If the execution of the `fn` exceeds the time limit, the time 
// limited function should reject with the string `"Time Limit Exceeded"`.






//解法1 
//使用單個 Promise，並在函式調用和計時器之間進行競爭。
//如果計時器先完成，則拋出 "Time Limit Exceeded" 的錯誤，否則等待函式執行完成。
//這種方法適用於在時間限制內等待函式執行完成的情況。


//step1.timeLimit 接受兩個參數：fn 和 t並返回一個匿名函式，
//  這個匿名函式接受任意數量的參數 ...args。
//  這是為了讓 timeLimit 返回的結果仍然是一個函式，可以像函式一樣被調用。

//step2.在這個匿名函式內部，它創建了一個 Promise 對象，並返回它。
//  這個 Promise 的目的是在 fn(...args) 執行完成之前，先等待指定的時間 t。
//  如果 fn(...args) 在時間限制 t 內完成，則 Promise 會被 resolve，否則將會被 reject。

function timeLimit (fn,t){
    return (...args)=>{
        //執行內部函式 並回傳結果resolve或reject
        return new Promise( (resolve, reject) => {
            //這兩個程式是同時進行的 //誰先完成就會先解析Promise
            setTimeout(() => { reject("Time Limit Exceeded");}, t); 
            fn(...args).then(resolve, reject); 
        });
    }
}

//解法2.
//使用 Promise.race，同時創建兩個 Promise，一個代表函式執行，另一個代表計時器。
//兩個 Promise 進行競爭，哪個先完成就使用哪個結果。
//這種方法適用於需要確保在指定時間內完成操作或拋出錯誤的情況，而不等待函式執行完成。

//step1.timeLimit 接受兩個參數：fn 和 t並返回一個匿名函式，
//  這個匿名函式接受任意數量的參數 ...args。
//  這是為了讓 timeLimit 返回的結果仍然是一個函式，可以像函式一樣被調用。

//step2.在這個匿名函式內部，它創建了兩個 Promise 對象
//  並使用Promise.race 來競爭兩個 Promise，會返回首先完成的Promise結果

function timeLimit(fn, t) {
    return (...args) => {
        const originalPromise = fn(...args);
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // 使用 Promise.race 來競爭兩個 Promise
        return Promise.race([originalPromise, timeoutPromise]);
    };
}


//比較兩個解法
// 基本上，兩者都可以實現在時間限制內獲得結果或錯誤的效果，
// 但解決方案2（使用Promise.race）可以更及時地中止 `fn(...args)` 的執行，
// 而解決方案1無法立即中止，如果不需要立即中止，解決方案1也是有效的。
// 
// - 解決方案1（只使用計時器）：它確實在時間限制內得到結果或錯誤。
//   計時器會在指定時間後觸發，並拋出 "Time Limit Exceeded" 的錯誤，
//   但函式 `fn(...args)` 仍然會繼續執行。您可以捕獲到這個錯誤，但不會中止 `fn(...args)` 的執行。
// 
// - 解決方案2（使用Promise.race）：它也在時間限制內得到結果或錯誤。
//   它使用 `Promise.race` 競爭兩個 Promise，並在其中一個完成時獲得結果或錯誤。
//   如果時間限制內超過 `fn(...args)` 完成，則會拋出 "Time Limit Exceeded" 的錯誤，並立即獲得結果或錯誤。

