// 2623. Memoize

// 方法2：用 map 解題
/*
某些情況下，使用 Map 可能會更具性能優勢，特別是當緩存的鍵是複雜的對像或非字符串類型。

1. 創建一個函式`memoize`，他接收一個函示`fn`作為參數，
  返回一個記憶函示`memoizedFn`，
 `memoizedFn`有一個附加的`.getCallCount()`方法提供外部查詢調用次數。
```
function memoize(fn) {
  const memoizedFn = function () {
      //Memoization邏輯
  };
  memoizedFn.getCallCount = function () {
      //查詢調用次數的邏輯
  };
  return memoizedFn;
}
```

2. 緩存存取邏輯
  - 這次宣告`cache`為一個Map實例，存儲對應的key和value，進行緩存邏輯判斷後返回value。
    - ⚠️key的部分需要進行參數組合成唯一的緩存鍵
      例如傳入args：`const args = [2, "hello", { key: "value" }];`，
      轉換後"number|2,string|\"hello\",object|{"key":"value"}"。
  - 加入try-catch錯誤處理機制
  - 以(Map.has(key))判斷緩存中是否存在相同參數，如果存在返回value cache.get(key)，
  如果不存在則運算`fn(...args)`結果後存入cache`cache.set(key, result)`，
  再返回 運算結果。

```
function memoize(fn) {
  const cache = new Map();

  const memoizedFn = function (...args) {
      try{
        const key = args.map(a => typeof a + '|' + JSON.stringify(a)).join(',');
        if (cache.has(key)) {
          return cache.get(key);
        } else {
          const result = fn(...args);
          cache.set(key, result);
          return result;
        }
      }
      catch(error){
      return {
        error: 'Memoization error',
        message: error.message,
        args: args,
      };
    }
  };
  
  memoizedFn.getCallCount = function () {
      //查詢調用次數的邏輯
  };
  return memoizedFn;
}
```

3. 查詢調用次數
- 外部作用域宣告變數`callCount`，用於紀錄調用次數。
- 在緩存處理的判斷式內要加入：如果緩存不存在則調用函示，並增加callCount調用次數。
- 為memoizedFn轉寫一個附加的方法，當外部調用時return 外部作用域的變數 callCount;

```
function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  const memoizedFn = function (...args) {
    try{
        const key = args.map(a => typeof a + '|' + JSON.stringify(a)).join(',');
        if (cache.has(key)) {
          return cache.get(key);
        } else {
          callCount+=1;
          const result = fn(...args);
          cache.set(key, result);
          return result;
        }
      }
    catch(error){
      return {
        error: 'Memoization error',
        message: error.message,
        args: args,
      };
    }
  };

  memoizedFn.getCallCount = function () {
      return callCount;
  };

  return memoizedFn;
}
```

*/
function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  const memoizedFn = function (...args) {
    try{
        const key = args.map(a => typeof a + '|' + JSON.stringify(a)).join(',');
        if (cache.has(key)) {
          return cache.get(key);
        } else {
          callCount++;
          const result = fn(...args);
          cache.set(key, result);
          return result;
        }
      }
    catch(error){
      return {
        error: 'Memoization error',
        message: error.message,
        args: args,
      };
    }
  };

  memoizedFn.getCallCount = function () {
      return callCount;
  };

  return memoizedFn;
}


const memoizedSum = memoize(function (a, b) {
  return a + b;
});


//testcase
// console.log(memoizedSum(2, 2)); // Output: Computing sum, 4
// console.log(memoizedSum(2, 2)); // Output: 4
// console.log(memoizedSum.getCallCount());// Output: 1
// console.log(memoizedSum(1, 2));// Output: Computing sum, 3
// console.log(memoizedSum.getCallCount());// Output: 2

