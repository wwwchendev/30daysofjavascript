# [2705. Compact Object 精簡對象][title]

## Description
給定一個對像或數組“obj”，返回一個緊湊對象。         
緊湊對象與原始對象相同，只是刪除了包含虛假值的鍵。      
Given an object or array `obj`, return a compact object.        
A compact object is the same as the original object,except with keys containing falsy values removed.       

此操作適用於該對象和任何嵌套對象。 數組被視為對象，其中索引是鍵。       
This operation applies to the object and any nested objects.        
Arrays are considered objects where the indices are keys.       

當“Boolean(value)”返回“false”時，值被視為假值。     
A value is considered falsy when `Boolean(value)` returns `false`.      

您可以假設“obj”是“JSON.parse”的輸出。 換句話說，它是有效的 JSON。       
You may assume the `obj` is the output of `JSON.parse`.         
In other words, it is valid JSON.       

### Example 1:    
>  __Input__:     
   obj = [null, 0, false, 1]                 
   __Output__:  [1]     
   __Explanation__:     
   All falsy values have been removed from the array.            
 
### Example 2:    
>  __Input__:     
   obj = {"a": null, "b": [false, 1]}              
   __Output__:  {"b": [1]}         
   __Explanation__:     
   obj["a"] and obj["b"][0] had falsy values and were removed.         
   
### Example 3:    
>  __Input__:     
   obj = [null, 0, 5, [0], [false, 16]]                    
   __Output__:   [5, [], [16]]            
   __Explanation__:     
   obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.            

### Constraints:
- `obj` is a valid JSON object
- <code>2 <= JSON.stringify(obj).length <= 10<sup>6</sup></code>

## Solution

1. 理解題目    
題目要求創建Compact Object，即刪除包含假值（falsy values）的鍵。
因此需要遍歷對象的鍵值對，將不包含假值的鍵值對添加到新的對像中。
因此我們須根據JSON.parse輸出對像是否可迭代 進行數據處理。
   - JSON.parse輸出對像根據是否可迭代分為：
      - 不可迭代的類型：Number、Boolean、null。
      - 可迭代的類型：Object、Array、String。


   ```javascript
   var compactObject = function(obj) {
      //不可迭代類型 處理
      
      //可迭代類型 處理      
   };
   ```
2. ❌對不可迭代類型進行處理：Number、Boolean、null    
如果傳入的參數是Number、Boolean(obj !== 'object')或為null，直接返回該參數     
ps. 額外判斷是否為null是因為 typeof null會傳回 object

   ```javascript
   var compactObject = function(obj) {

      //不可迭代類型 處理
      if (typeof obj !== 'object' || obj === null ) {  return obj; }

      //可迭代類型 處理  
   };
   ```

3. ⭕對可迭代類型進行處理：Array、Object、String      
   使用遞迴的方式處理陣列和對象的元素，      
   另應確保多層嵌套的情況下，每個子對象都被適當地處理，並且將偽值元素移除。   

   - Array 陣列 處理    
   陣列類型因為元素可以包含各種類型的值，包括對象、數組、字符串、數字、布林值等。      
   並不是每一個類型的值都可以進行迭代操作，因此如果obj是陣列需要額外判斷：    
    `obj = [null, 0, 5, [0], [false, 16]]`
      1. 使用 Array.filter(Boolean) 过滤掉数组中的假值元素 `obj.filter(Boolean)  [5,[0],[false,16]]`
      2. 然后使用 Array.map(compactObject) 对每个元素遞迴调用 compactObject 函数
         - 對於 `5`，因為它是非對像類型，所以不再壓縮，直接返回 `5`。
         - 對於 `[0]`，會再次遞歸調用 `compactObject` 函數，obj=[0];經過 `Array.filter(Boolean)` 濾後變 `[]`
         - 對於 `[false, 16]`，首先經過 `Array.filter(Boolean)` 過濾後變為 `[16]`，然後再次遞歸調用`compactObject` 函數。在這個嵌套數組中，由於 `16` 是非對像類型，所以也不再壓縮，最終返回 `[16]`。
      3. Array.map 的行為，它會為每個元素調用提供的回調函數，並將每個回調函數的返回值組成一個新的組。  `[5, [], 16]`
   ```javascript
   var compactObject = function(obj) {
      //不可迭代類型 處理
      if (typeof obj !== 'object' || obj === null ) {  return obj; }

      // 可迭代類型－Array 處理
      if (Array.isArray(obj)) {
         return obj.filter(Boolean).map(compactObject);
      }
         
      // 可迭代類型－Object、String 處理
   };
   ```
   - Object 物件、String 字串 處理       
      `obj = {"a": null, "b": [false, 1]}`         
    1. 宣告變數`const compacted = {};`用以儲存已精簡的元素
    2. for迴圈遍歷對當前obj鍵值進行遞歸 `compactObject` 函數

    ```javascript
   var compactObject = function(obj) {
      //不可迭代類型 處理
      if (typeof obj !== 'object' || obj === null ) {  return obj; }

      // 可迭代類型－Array 處理
      if (Array.isArray(obj)) {
         return obj.filter(Boolean).map(compactObject);
      }
         
      // 可迭代類型－Object、String 處理
      const compacted = {};

      //for...in遍歷當前obj的鍵值=["a","b"]
      //key="a"，compactObject(obj[a]);-> 遞迴 null-> 返回null-> 判斷為假值移除該偽值元素。
      //key="b"，compactObject(obj[b]);-> 遞迴 [false, 1]
      //   使用 Array.filter(Boolean) 过滤掉数组中的假值元素 剩下[1]，重新遞迴後返回"1"。
      //   針對 遞迴的返回值"1" 進行Boolean判斷，由於是真值 即賦值 compacted[b]=1 ; 
      for (const key in obj) {
         let value = compactObject(obj[key]);
         if (Boolean(value)) { compacted[key] = value; }
      }

      // 最後 return 的 compacted物件 則為  {"b": [1]}
      return compacted;
   }
    ```


[title]: https://leetcode.com/problems/memoize/