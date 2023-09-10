// 2631. Group By

// 編寫增強所有數組的代碼以便您可以在任何數組上調用“array.groupBy(fn)”方法，並且它將返回數組的分組版本。              
// Write code that enhances all arrays such that you can call the `array.groupBy(fn)` method       
// on any array and it will return a grouped version of the array.     

// 分組數組是一個對象，其中每個鍵都是“fn(arr[i])”的輸出，      
// 每個值都是一個包含原始數組中具有該鍵的所有項目的數組。      
// A grouped array is an object where each key is the output of `fn(arr[i])`       
// and each value is an array containing all items in the original array with that key.        

// 提供的回調“fn”將接受數組中的一個項目並返回一個字符串鍵。        
// The provided callback `fn` will accept an item in the array and return a string key.        

// 每個值列表的順序應該是項目在數組中出現的順序。 任何鍵順序都是可以接受的。
// The order of each value list should be the order the items appear in the array.         
// Any order of keys is acceptable.        

// 請在沒有 lodash 的 `_.groupBy` 函數的情況下解決它。     
// Please solve it without lodash's `_.groupBy` function.




//思路 -跑for迴圈檢查分組存不存在相同的鍵
//1.擴充陣列方法“array.groupBy(fn)”，並且它將返回數組的分組版本，
//分組數組是一個對象，其中每個鍵都是“fn(arr[i])”的輸出，每個值都是一個包含原始數組中具有該鍵的所有項目的數組。
Array.prototype.groupBy = function(fn) {
  const grouped = {};
  //分組邏輯
  return grouped
};

//2.試想一下  
//grouped應該具有鍵值對，根據 fn(element)的返回結果作為Key，而value則為element
/*Input: 
  array = [{"id":"1"},{"id":"1"},{"id":"2"}], 
  fn = function (item) { return item.id;   }

  Output: 
  { 
    "1": [{"id": "1"}, {"id": "1"}],   
    "2": [{"id": "2"}] 
  }
*/

//3.分組邏輯：使用迴圈遍歷原始陣列的元素，
// 確認返回物件中 fn(element)的鍵是否存在，如果不存在則grouped[key]賦值為空陣列[]
//4. 把原始陣列元素push到對應的grouped[key]內，完成分組。
Array.prototype.groupBy = function(fn) {
  const grouped = {};
  // 分組邏輯
  for(let e of this){
      const key = fn(e);
      //object[key] 訪問屬性，如果不存在則grouped[key]賦值為空陣列[]
      grouped[key] || (grouped[key] = []);
      //接著把原始陣列元素push到對應的grouped[key]內
      grouped[key].push(e);
  }
  return grouped
};




//💡if判斷是否存在 也可以利用 邏輯運算子來簡化代碼
//grouped[key] || (grouped[key]= []) 
//等於 if (!grouped[key]) { grouped[key] = [];} 

//💡比較使用傳統for迴圈和for..of迴圈
//傳統for迴圈通過索引（index）來迭代數組元素，這需要額外的代碼(this[i])來獲取當前元素。
//使用了for...of循環，它是一種更現代和簡潔的循環方式，它直接迭代數組的元素，而不需要索引變量。這使得代碼更具可讀性。


// for 
Array.prototype.groupBy = function (fn) {
  const grouped = {};
  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);  
    grouped[key] || (grouped[key]= []) // if (!grouped[key]) { grouped[key] = [];} 
    grouped[key].push(this[i]);
  }

  return grouped;
};

// for...of
Array.prototype.groupBy = function(fn) {
  const grouped = {};
  for(let e of this){
      const key = fn(e)

      grouped[key] || (grouped[key] = [])
     grouped[key].push(e)
  }
  return grouped
};


