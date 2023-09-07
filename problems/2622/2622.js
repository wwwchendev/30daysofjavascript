// 2622. Cache With Time Limit 限時緩存

// 編寫一個允許獲取和設置鍵值對的類，但到期時間與每個鍵相關聯。
// Write a class that allows getting and setting key-value pairs, 
// however a time until expiration is associated with each key.

// 該類具有三個公共方法：
// - set（key，value，duration）：
//     接受整數鍵，整數值和以毫秒為單位的持續時間。 
//     持續時間過後，密鑰應該無法訪問。 
//     如果相同的未過期密鑰已存在，則該方法應返回 true，否則返回 false。 
//     如果鍵已存在，則值和持續時間都應被覆蓋。
// - get(key)：如果存在未過期的鍵，則應返回關聯的值。 否則它應該返回-1。
// - count()：返回未過期鍵的計數。

// The class has three public methods:
// - set(key, value, duration): 
//     accepts an integer key, an integer value, and a duration in milliseconds. 
//     Once the duration has elapsed, the key should be inaccessible. 
//     The method should return true if the same un-expired key already exists and false otherwise. 
//     Both the value and duration should be overwritten if the key already exists.
// - get(key): 
//     if an un-expired key exists, it should return the associated value. 
//     Otherwise it should return -1.
// - count(): returns the count of un-expired keys.

 


//設置一個類別用於實現限時緩存，當中包含了Map型別的cache屬性
const TimeLimitedCache = function() {this.cache = new Map(); };

/**
* 設置公共方法的方式
* `TimeLimitedCache.prototype.Fn`在 TimeLimitedCache 的原型上定義了方法，
* 這意味著所有 TimeLimitedCache 的實例都將共享這個方法。
* 
* 該類具有三個公共方法 
* set(key, value, duration)：設置鍵值對，並在持續時間結束後使該鍵變得無法訪問。如果相同的未過期鍵已經存在，則返回true，否則返回false。它也會覆蓋現有的值和持續時間。
* get(key)：檢查是否存在未過期的鍵，如果存在，返回關聯的值；否則返回-1。
* count()：返回未過期鍵的計數，使用Map的size屬性。
* 
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {    
    let found = this.cache.has(key); //檢查緩存裡有這個鍵嗎？
    if (found) { clearTimeout(this.cache.get(key).ref);} //如果鍵已存在，清除原有的計時

     //設置鍵值對key-value pair鍵值對，包含了兩個屬性：值以及有效期限(設置定時器，時間到了刪除鍵)
     this.cache.set(  key, { 
         value,
         ref: setTimeout(() => this.cache.delete(key), duration)
     }); 
    return found;
};

// - get(key)：根據鍵檢索相對應的值。如果存在未過期的鍵，則應返回關聯的值，否則它應該返回-1。
TimeLimitedCache.prototype.get = function(key) { return this.cache.has(key) ? this.cache.get(key).value : -1; };

// - count()：返回未過期鍵的計數。 使用 .size 屬性來查詢該 Map 包含多少個鍵值對。
TimeLimitedCache.prototype.count = function() { return this.cache.size;};



// //testcase1
const cache = new TimeLimitedCache();
const result1 = cache.set(1, 42, 100);
console.log(result1); // 预期输出: false
const result2 = cache.get(1);
console.log(result2); // 预期输出: 42
const result3 = cache.count();
console.log(result3); // 预期输出: 1
const result4 = cache.get(1);
console.log(result4); // 预期输出: -1
