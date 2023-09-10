// 2722. Join Two Arrays by ID

// 給定兩個數組“arr1”和“arr2”，返回一個新數組“joinedArray”。      

// 兩個輸入數組中的每個對像中的所有對像都將包含一個具有整數值的“id”字段。     
// `joinedArray` 是根據 `id` 鍵合併 `arr1` 和 `arr2` 形成的數組。       
// `joinedArray` 的長度應該是 `id` 唯一值的長度。     

// 返回的數組應根據“id”鍵按升序排序。   

// 如果給定的“id”存在於一個數組中，但另一個數組中不存在，
// 則具有該“id”的單個對象應包含在結果數組中而不進行修改。      

// 如果兩個對象共享一個“id”，它們的屬性應該合併到一個對像中：        
// - 如果一個鍵僅存在於一個對像中，則該對像中應包含該單個鍵值對。    
// - 如果兩個對像中都包含一個鍵，則“arr2”對像中的值應覆蓋“arr1”中的值。    


/*

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
*/

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



//testcase

let arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
]

let arr2 = [
    {"id": 3, "x": 5}
]

join(arr1,arr2);
//output: (3) [{…}, {…}, {…}]
// 0: {id: 1, x: 1}
// 1: {id: 2, x: 9}
// 2: {id: 3, x: 5}