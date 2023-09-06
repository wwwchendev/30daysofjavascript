// 2623. Memoize

// 方法1：用 物件object 解題
/*
1. 創建一個函式`memoize`，他接收一個函示`fn`作為參數，
 返回一個記憶函示`memoizedFn`，
 `memoizedFn`有一個附加的`.getCallCount()`方法提供外部查詢調用次數。

function memoize(fn) {
    const memoizedFn = function () {
        //Memoization邏輯
    };
    memoizedFn.getCallCount = function () {
        //查詢調用次數的邏輯
    };
    return memoizedFn;
  }


2. 緩存存取邏輯
- 外部作用域宣告變數`cache`用來存取每一個調用時傳入的參數。
- memoizedFn函示須代傳入函式`fn`的參數...arg，
 並將arg轉為JSON字串以其值而非引用的方式確保存入 鍵`key`的內容為唯一值，
 我們另外加入try-catch錯誤處理機制，原因是JavaScript中有一些不可序列化的對象，
 若傳入該類型參數(包含但不限函式.Date.Symbol.undefined等)會產生序列化失敗。
- 以屬性訪問運算符(key in Object)判斷緩存中是否存在相同參數，
如果存在返回value，cache[key]，
如果不存在則計算`fn(...args)`結果後存入cache[key]，再返回cache[key]。

function memoize(fn) {
    const cache = {};
  
    const memoizedFn = function (...args) {
        try{
            const key = JSON.stringify(args);
        
            if (key in cache) {
                return cache[key];
            } else {
                cache[key] = fn(...args);
                return cache[key];
            }
        }catch(error){            
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


3. 查詢調用次數
- 外部作用域宣告變數`callCount`，用於紀錄調用次數。
- 在緩存處理的判斷式內要加入：如果緩存不存在則調用函示，並增加callCount調用次數。
- 為memoizedFn轉寫一個附加的方法，當外部調用時return 外部作用域的變數 callCount;

function memoize(fn) {
    const cache = {};
    let callCount = 0;

    const memoizedFn = function (...args) {
        try{
            const key = JSON.stringify(args);
        
            if (key in cache) {
                return cache[key];
            } else {
                callCount++; //增加調用次數
                cache[key] = fn(...args);
                return cache[key];
            }
        }catch(error){            
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

4. 額外: 在內部增加清除緩存的方法 (ChatGPT建議)
```
memoizedFn.clearCache = function () {
  let cacheKeys = Object.keys(cache); 
  cacheKeys.forEach((key) => delete cache[key]);
};
```
*/


function memoize(fn) {
  const cache = {};
  let callCount = 0;

  const memoizedFn = function (...args) {
      try{
          const key = JSON.stringify(args);
      
          if (key in cache) {
              return cache[key];
          } else {
              callCount++; //增加調用次數
              cache[key] = fn(...args);
              return cache[key];
          }
      }catch(error){            
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
  
const memoizedFib = memoize(function (n) {
  if (n <= 1) {
    return 1;
  }
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

const memoizedFactorial = memoize(function (n) {
  if (n <= 1) {
    return 1;
  }
  return memoizedFactorial(n - 1) * n;
});
  


//testcase
console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5



