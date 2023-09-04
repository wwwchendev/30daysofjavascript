# [2703. Return Length of Arguments Passed][title]


## Description     
Write a function `argumentsLength` that returns the count of arguments passed to it.



### Example 1:
>  __Input__:     
   argsArr = [5]         
   __Output__: 1    
   __Explanation__:     
   argumentsLength(5); // 1     

One value was passed to the function so it should return 1.


### Example 2:
>  __Input__:     
   argsArr = [{}, null, "3"]        
   __Output__: 3    
   __Explanation__:     
   argumentsLength({}, null, "3"); // 3     

Three values were passed to the function so it should return 3.



### Constraints:

- `argsArr is a valid JSON array`
- `0 <= argsArr.length <= 100`


## Solution

- JavaScript 中的内部機制中，函式被宣告的時候會自動將串入的參數存入名為arguments的類陣列，屬於該函數內部的屬性。
- arguments 對象只在普通函數內部有效，不適用於箭頭函數。
```
function argumentsLength() {
   return arguments.length;
}
```


[title]: https://leetcode.com/problems/return-length-of-arguments-passed/