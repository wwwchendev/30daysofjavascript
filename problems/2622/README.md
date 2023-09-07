# [2622. Cache With Time Limit][title]

## Description
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

`set(key, value, duration)`: accepts an integer `key`, an integer `value`, and a `duration` in milliseconds. Once the `duration` has elapsed, the key should be inaccessible. The method should return `true` if the same un-expired key already exists and `false` otherwise. Both the value and duration should be overwritten if the key already exists.

`get(key)`: if an un-expired key exists, it should return the associated value. Otherwise it should return `-1`.

`count()`: returns the count of un-expired keys.
 

### Example 1:    
>  __Input__:           
   ["TimeLimitedCache", "set", "get", "count", "get"]       
   [[], [1, 42, 100], [1], [], [1]]       
   [0, 0, 50, 50, 150]                           
   __Output__:       
   [null, false, 42, 1, -1]                     
   __Explanation__:     
   At t=0, the cache is constructed.      
   At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.     
   At t=50, key=1 is requested and the value of 42 is returned.      
   At t=50, count() is called and there is one active key in the cache.    
   At t=100, key=1 expires.      
   At t=150, get(1) is called but -1 is returned because the cache is empty.     

### Example 2:    
>  __Input__:           
   ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]     
   [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]    
   [0, 0, 40, 50, 120, 200, 250]                       
   __Output__:       
   [null, false, true, 50, 50, -1, 0]                      
   __Explanation__:     
   At t=0, the cache is constructed.      
   At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.      
   At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.    
   At t=50, get(1) is called which returned 50.    
   At t=120, get(1) is called which returned 50.      
   At t=140, key=1 expires.      
   At t=200, get(1) is called but the cache is empty so -1 is returned.    
   At t=250, count() returns 0 because the cache is empty.        


### Constraints:
- `fn` is a function
- `args` is a valid JSON array
- `1 <= args.length <= 10`
- `30 <= t <= 100`
- `10 <= cancelT <= 500`

## Solution

1. 設置一個類別用於實現限時緩存，當中包含了Map型別的cache屬性
```javascript
const TimeLimitedCache = function() {this.cache = new Map(); };
```

2. 該類具有三個公共方法 
- set(key, value, duration)：設置鍵值對，並在持續時間結束後使該鍵變得無法訪問。如果相同的未過期鍵已經存在，則返回true，否則返回false。它也會覆蓋現有的值和持續時間。
- get(key)：檢查是否存在未過期的鍵，如果存在，返回關聯的值；否則返回-1。
- count()：返回未過期鍵的計數，使用Map的size屬性。

補充：設置公共方法的方式
- `TimeLimitedCache.prototype.Fn`在 TimeLimitedCache 的原型上定義了方法，這意味著所有 TimeLimitedCache 的實例都將共享這個方法。

```javascript
TimeLimitedCache.prototype.set = function(key, value, duration) {    
    let found = this.cache.has(key); //檢查緩存裡有這個鍵嗎？
    //如果鍵已存在，清除原有的計時
    if (found) { clearTimeout(this.cache.get(key).ref);} 
     //設置鍵值對key-value pair鍵值對，
     //包含了兩個屬性：值以及有效期限(設置定時器，時間到了刪除鍵)
     this.cache.set(  key, { 
         value,
         ref: setTimeout(() => this.cache.delete(key), duration)
     }); 
    return found;
};

//get(key)：根據鍵檢索相對應的值。如果存在未過期的鍵，則應返回關聯的值，否則它應該返回-1。
TimeLimitedCache.prototype.get = function(key) { return this.cache.has(key) ? this.cache.get(key).value : -1; };

//count()：返回未過期鍵的計數。 使用 .size 屬性來查詢該 Map 包含多少個鍵值對。
TimeLimitedCache.prototype.count = function() { return this.cache.size;};
```

[title]: https://leetcode.com/problems/cache-with-time-limit/