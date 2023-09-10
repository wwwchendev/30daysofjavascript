# [2722. Join Two Arrays by ID][title]

## Description

給定兩個數組“arr1”和“arr2”，返回一個新數組“joinedArray”。      
Given two arrays `arr1` and `arr2`, return a new array `joinedArray`.      

兩個輸入數組中的每個對像中的所有對像都將包含一個具有整數值的“id”字段。     
`joinedArray` 是根據 `id` 鍵合併 `arr1` 和 `arr2` 形成的數組。       
`joinedArray` 的長度應該是 `id` 唯一值的長度。     
 All the objects in each of the two inputs arrays will contain an `id` field that has an integer value.    
`joinedArray` is an array formed by merging `arr1` and `arr2` based on their `id` key.       
The length of `joinedArray` should be the length of unique values of `id`.       

返回的數組應根據“id”鍵按升序排序。   
The returned array should be sorted in ascending order based on the `id` key.

如果給定的“id”存在於一個數組中，但另一個數組中不存在，則具有該“id”的單個對象應包含在結果數組中而不進行修改。      
If a given `id` exists in one array but not the other, the single object with that `id` should be included in the result array without modification.     


如果兩個對象共享一個“id”，它們的屬性應該合併到一個對像中：     
If two objects share an `id`, their properties should be merged into a single object:     
- 如果一個鍵僅存在於一個對像中，則該對像中應包含該單個鍵值對。    
If a key only exists in one object, that single key-value pair should be included in the object.      
- 如果兩個對像中都包含一個鍵，則“arr2”對像中的值應覆蓋“arr1”中的值。    
If a key is included in both objects, the value in the object from `arr2` should override the value from `arr1`.     


### Example 1:    
>  __Input__:     
   arr1 = [       
    {"id": 1, "x": 1},     
    {"id": 2, "x": 9}      
   ],       
   arr2 = [    
      {"id": 3, "x": 5}      
   ]                 
   __Output__:       
   [     
      {"id": 1, "x": 1},      
      {"id": 2, "x": 9},      
      {"id": 3, "x": 5}    
   ]        
   __Explanation__:     
   There are no duplicate ids so arr1 is simply concatenated with arr2.        
 
### Example 2:    
>  __Input__:     
   arr1 = [       
    {"id": 1, "x": 2, "y": 3},      
    {"id": 2, "x": 3, "y": 6}    
   ],       
   arr2 = [    
      {"id": 2, "x": 10, "y": 20},     
      {"id": 3, "x": 0, "y": 0}     
   ]              
   __Output__:    
   [
    {"id": 1, "x": 2, "y": 3},      
    {"id": 2, "x": 10, "y": 20},    
    {"id": 3, "x": 0, "y": 0}    
   ]       
   __Explanation__:     
   The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.      
   
### Example 3:    
>  __Input__:     
   arr1 = [    
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}    
   ]     
   arr2 = [       
      {"id": 1, "b": {"c": 84}, "v": [1, 3]}    
   ]                     
   __Output__: [     
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}      
   ]           
   __Explanation__:     
   The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.         

### Constraints:
- `arr1 and arr2 are valid JSON arrays`
- `Each object in arr1 and arr2 has a unique integer id key`
- <code>2 <= JSON.stringify(arr1).length <= 10<sup>6</sup></code>
- <code>2 <= JSON.stringify(arr2).length <= 10<sup>6</sup></code>

## Solution

1. 給定兩個數組“arr1”和“arr2”，返回一個新數組“joinedArray”。         
兩個輸入數組中的每個對像中的所有對像都將包含一個具有整數值的“id”字段。 
// arr1 = [{“id”：1，“x”：1}，{“id”：2，“x”：9}]
// arr2 = [{“id”：3，“x”：5}]    

- 先宣告一個變數 `joinedArray`空物件，我們要利用物件鍵值對的特性去確保'id'的唯一值
- 最後return的時候 再利用Object.values()將物件的值轉回陣列。
```javascript
const join = function(arr1, arr2) {
    const joinedArray = {};

      //合併的邏輯

    return Object.values(joinedArray);
};
```

2.合併規則說明
`joinedArray` 是根據 `id` 鍵合併 `arr1` 和 `arr2` 形成的數組。       
`joinedArray` 的長度應該是 `id` 唯一值的長度。 返回的數組應根據“id”鍵按升序排序。   

- 如果給定的“id”存在於一個數組中，但另一個數組中不存在，則具有該“id”的單個對象應包含在結果數組中而不進行修改。      
- 如果兩個對象共享一個“id”，它們的屬性應該合併到一個對像中：     
   - 如果一個鍵僅存在於一個對像中，則該對像中應包含該單個鍵值對。    
   - 如果兩個對像中都包含一個鍵，則“arr2”對像中的值應覆蓋“arr1”中的值。        

2-1. 先將arr1的元素依照鍵"id"設置於joinedArray內
```javascript
const join = function(arr1, arr2) {
    const joinedArray = {};

    // joinedArray = {
    // 1: {"id": 1, "x": 1},
    // 2: {"id": 2, "x": 9}
    // };
    arr1.forEach(item => {
        joinedArray[item.id] = item;
    });

    // 處理arr2以及合併邏輯

    return Object.values(joinedArray);
};
```

2-2. 處理arr2以及合併邏輯
- 判斷joinedArray內是否存在相同鍵
- 如果存在，覆蓋原先數值。      
   將arr2當前元素的鍵進行遍歷["id","x"].forEach{}   
  假設arr2=[{“id”：2，“x”：5}]，joinedArray[item.id]就會提取出相同ID的元素，也就是 2: {"id": 2, "x": 9}     
  接著利用[key]遍歷以及重新賦值，完成arr2覆蓋原先數值的目的    
  ```
   id=item[id] 2: {"id": 2, "x": 9} => 2: {"id": 2, "x": 9}       
   x=item[x]   2: {"id": 2, "x": 9} => 2: {"id": 2, "x": 5}  
  ```
- 如果不存在，則於`joinedArray`寫入數據   
```javascript
const join = function(arr1, arr2) {
    const joinedArray = {};

    arr1.forEach(item => {
        joinedArray[item.id] = item;
    });

    arr2.forEach(item => {
        if (joinedArray[item.id]) {
            Object.keys(item).forEach(key => {    

               joinedArray[item.id][key] = item[key];   
            });
        } else {
            joinedArray[item.id] = item;
        }
    });

    return Object.values(joinedArray);
};
```

[title]: https://leetcode.com/problems/join-two-arrays-by-id/