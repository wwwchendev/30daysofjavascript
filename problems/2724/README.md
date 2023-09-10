# [2724. Sort By][title]

## Description

給定一個數組“arr”和一個函數“fn”，返回一個排序數組“sortedArr”。      
Given an array `arr` and a function `fn`, return a sorted array `sortedArr`.        

您可以假設“fn”僅返回數字，並且這些數字決定“sortedArr”的排序順序。       
You can assume `fn` only returns numbers        
and those numbers determine the sort order of `sortedArr`.      

`sortedArray` 必須按 `fn` 輸出升序排序。        
`sortedArray` must be sorted in ascending order by `fn` output.     

您可能會假設“fn”永遠不會重複給定數組的數字。        
You may assume that `fn` will never duplicate numbers for a given array.        


### Example 1:    
>  __Input__:     
   arr = [5, 4, 1, 2, 3], fn = (x) => x           
   __Output__:       
   [1, 2, 3, 4, 5]    
   __Explanation__:     
   fn simply returns the number passed to it so the array is sorted in ascending order.             
 
### Example 2:    
>  __Input__:     
   arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x                     
   __Output__:    
   [{"x": -1}, {"x": 0}, {"x": 1}]              
   __Explanation__:     
   fn returns the value for the "x" key. So the array is sorted based on that value.          
   
### Example 3:    
>  __Input__:     
   arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]                    
   __Output__:    
   [[10, 1], [5, 2], [3, 4]]            
   __Explanation__:     
   arr is sorted in ascending order by number at index=1.             

### Constraints:
- `arr is a valid JSON array`
- `fn is a function that returns a number`
- `1 <= arr.length <= 5 * 105`

## Solution

根據函數 fn 的返回值對數組 arr 進行升序排序，並返回排序後的新數組。
```javascript
const sortBy =function(arr, fn) {
    //排序的邏輯
    return arr.slice().sort((a, b) => fn(a) - fn(b));
}
```

- __arr.slice()__       
    沒有傳遞任何參數時，將返回原始數組 arr 的淺拷貝（shallow copy），這是一種常用於復制數組的方法。      
    這意味著它會創建一個新數組，包含原數組中的所有元素，並將這些元素複製到新數組中，但不會影響原始數組。    

- __.sort((a, b) => fn(a) - fn(b))__       
    陣列的 sort 方法，該方法接受一個比較函數作為參數。      
    計算了fn(a) - fn(b)這兩個返回值的差值，這將成為排序的依據。      
=>  如果差值為負數，則 a 應該排在 b 前面，      
    如果差值為正數，則 b 應該排在 a 前面，      
    如果差值為零，則它們保持相對順序不變。 最後，函數返回了排序後的新數組。      



[title]: https://leetcode.com/problems/sort-by