// 2721. Execute Asynchronous Functions in Parallel
// 給定一個異步函數“functions”數組，返回一個新的承諾“promise”。 數組中的每個函數不接受任何參數並返回一個承諾。    
// Given an array of asynchronous functions `functions`, return a new promise `promise`. Each function in the array accepts no arguments and returns a promise.

// `promise` resolves：
// - 當從“functions”返回的所有承諾都成功解決時。 “promise”的解析值應該是“promise”的所有解析值的數組，其順序與“functions”中的順序相同。    
// When all the promises returned from `functions` were resolved successfully. 
//The resolved value of `promise` should be an array of all the resolved values of `promises` in the same order as they were in the `functions`.

// `promise` rejects：
// - 當從“functions”返回的任何承諾被拒絕時。 “promise”也應該拒絕並給出第一次拒絕的理由。     
// When any of the promises returned from `functions` were rejected. `promise` should also reject with the reason of the first rejection.      

// 請在不使用內置“Promise.all”函數的情況下解決該問題。      
// Please solve it without using the built-in `Promise.all` function.




// 1.給定一個異步函數“functions”數組，返回一個新的承諾“promise”。
//   數組中的每個函數不接受任何參數並返回一個承諾。    
// 2-1.當從“functions”返回的所有承諾都成功解決時。 
//   “promise”的解析值應該是“promise”的所有解析值的數組，其順序與“functions”中的順序相同。
// var promiseAll = function(functions) {
//   return new Promise((resolve, reject) => {
//     const results = [];

//     //解析functions數組的邏輯
//     for (let i = 0; i < functions.length; i++) {
//       functions[i]()  
//         //Promise resolve的情況 使用.then(result=>{...})處理promise執行結果
//         .then(result => {  })
//         //Promise reject的情況 使用.catch(error => { ... })處理promise錯誤信息
//         .catch(error => {  });
//     }
//   });
// };


// 2-2. 解析`functions`陣列並將結果存入`results`陣列
// 外部宣告變數resolvedCount來記錄目前`results`內已成功解析的 Promise 數量，
// 當已成功解析的 Promise 數量與原function陣列元素數量相等，
// 表示已全數解析完畢，使用 resolve() 返回結果。

// 3.當從“functions”返回的任何承諾被拒絕時。 “promise”也應該拒絕並給出第一次拒絕的理由。  
  var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
      const results = [];
      let resolvedCount = 0;
  
      //解析functions數組的邏輯
      for (let i = 0; i < functions.length; i++) {
        functions[i]()
          .then(result => {
              results[i] = result;
              resolvedCount++;  
              if (resolvedCount === functions.length) { resolve(results);}
            })
          .catch(error => {reject(error);}); 
      }
    });
  };
  


//❓為什麼不直接用 (results.length === functions.length)判斷
// 因為.then 處理程序是非同步的，不會等待上個Promise是否已經解析成功。

// ```javascript
// //錯誤範例
// var promiseAll = function(functions) {
//   return new Promise((resolve, reject) => {
//     const results = [];

//     for (let i = 0; i < functions.length; i++) {
//       functions[i]()
//         .then(result => {
//             results[i] = result;
//             if (results.length === functions.length) { resolve(results);}
//           })
//         .catch(error => {reject(error);}); 
//     }
//   });
// };
// ```

// 以下面Input為例
// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
//   () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
//   () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]

// functions[1] 的解析時間比 functions[2] 長，當functions[2] 解析，並將結果存入 results[2]。

// 在 JavaScript 中，當你為數組的某個索引位置賦值時，
// 如果該索引超出了當前數組的長度，JavaScript 會自動擴展數組的長度以容納這個新元素。
// 這意味著數組的長度會根據最大的索引值來確定。
// ```javascript
// const ary = [];
// ary[0] = 1;
// ary[3] = 2;
// ```
// 在这个示例中，数组的长度是 4，因为最大的索引是 3，所以长度是 3 + 1 = 4。
// ```javascript
// [1, undefined, undefined, 2]
// ```
// 所以functions[1]還沒解析完畢前，results陣列就會因為functions[2]解析完畢而擴展。





