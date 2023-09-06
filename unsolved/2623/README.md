# [2623. Memoize][title]

## Description
Given a function `fn`, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: `sum`, `fib`, and `factorial`.

- `sum` accepts two integers `a` and `b` and returns `a + b`.
- `fib` accepts a single integer `n` and returns `1` if `n <= 1` or `fib(n - 1) + fib(n - 2)` otherwise.
- `factorial` accepts a single integer `n` and returns `1` if `n <= 1` or `factorial(n - 1) * n` otherwise.

### Example 1:    
>  __Input__:
   sum"     
   ["call","call","getCallCount","call","getCallCount"]     
   [[2,2],[2,2],[],[1,2],[]]             
   __Output__:       
   [4,4,1,3,2]     
   __Explanation__:
   const sum = (a, b) => a + b;     
   const memoizedSum = memoize(sum);      
   memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.    
   memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.     
   // Total call count: 1     
   memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.    
   // Total call count: 2           
 
### Example 2:    
>  __Input__:     
   "factorial"    
   ["call","call","call","getCallCount","call","getCallCount"]    
   [[2],[3],[2],[],[3],[]]                
   __Output__:    
   [2,6,2,2,6,2]         
   __Explanation__:     
   const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));      
   const memoFactorial = memoize(factorial);    
   memoFactorial(2); // Returns 2.     
   memoFactorial(3); // Returns 6.     
   memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.     
   // Total call count: 2     
   memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.     
   // Total call count: 2     
   
### Example 3:    
>  __Input__:     
   "fib"    
   ["call","getCallCount"]    
   [[5],[]]                
   __Output__:    
   [8,1]       
   __Explanation__:     
   fib(5) = 8     
   // Total call count: 1        

### Constraints:
- `0 <= a, b <= 105`
- `1 <= n <= 10`
- `at most 105 function calls`
- `at most 105 attempts to access callCount`
- `input function is sum, fib, or factorial`

## Solution

### 方法1：用 物件object 解題

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
   - 外部作用域宣告變數`cache`用來存取每一個調用時傳入的參數。
   - memoizedFn函示須代傳入函式`fn`的參數...arg，
   並將arg轉為JSON字串以其值而非引用的方式確保存入 鍵`key`的內容為唯一值，
   我們另外加入try-catch錯誤處理機制，原因是JavaScript中有一些不可序列化的對象，
   若傳入該類型參數(包含但不限函式.Date.Symbol.undefined等)會產生序列化失敗。
   - 以屬性訪問運算符(key in Object)判斷緩存中是否存在相同參數，
   如果存在返回value，cache[key]，
   如果不存在則計算`fn(...args)`結果後存入cache[key]，再返回cache[key]。
   ```
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
   ```



3. 查詢調用次數
   - 外部作用域宣告變數`callCount`，用於紀錄調用次數。
   - 在緩存處理的判斷式內要加入：如果緩存不存在則調用函示，並增加callCount調用次數。
   - 為memoizedFn轉寫一個附加的方法，當外部調用時return 外部作用域的變數 callCount;
   ```
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
   ```


### 方法2：用 Map 解題
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

   memoizedFn.getCallCount = function () {
         //查詢調用次數的邏輯
   };
   return memoizedFn;
   }
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
### 額外補充: 在內部增加清除緩存的方法 (ChatGPT建議)
   ```
   memoizedFn.clearCache = function () {
   let cacheKeys = Object.keys(cache); 
   cacheKeys.forEach((key) => delete cache[key]);
   };
   ```

[title]: https://leetcode.com/problems/memoize/