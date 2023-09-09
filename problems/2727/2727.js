// 2727. Is Object Empty

/*
給定一個對像或數組，如果為空則返回。        
Given an object or an array, return if it is empty.     

- 空對像不包含鍵值對。      
An empty object contains no key-value pairs.
- 空數組不包含任何元素。        
An empty array contains no elements.

您可以假設對像或數組是“JSON.parse”的輸出。
You may assume the object or array is the output of `JSON.parse`.
*/


// 1. 函數 isEmpty 接受一個參數 obj，這個參數可以是一個對象或一個數組。
//   檢查給定的對象或數組是否包含屬性或元素，並根據有無屬性或元素返回相應的布林值。
// 2. 使用 for...in 循環遍歷 obj 中的所有屬性（對於對象）或索引（對於數組）
// 3.  使用 _ 來表示當前迭代的屬性名稱或索引值，不過，實際上並不使用 _ 來執行任何操作，它只是一個慣例性的變數名稱
// -   如果 `obj` 是空的（對象或數組不包含任何屬性或元素），
//     那麼 `for...in` 循環內部的代碼永遠不會執行，因為沒有屬性或元素可供遍歷。
//     在這種情況下，函數會直接執行 `return true;` 語句，返回 `true`，表示 `obj` 是空的。

// -   如果 `obj` 不是空的（對象或數組包含屬性或元素），
//     那麼 `for...in` 循環會遍歷這些屬性或元素。
//     在循環的第一次迭代中，它會找到一個屬性或元素，
//     然後執行 `return false;` 語句，返回 `false`，表示 `obj` 不是空的。
//     因此，只要 `obj` 包含屬性或元素，函數就會返回 `false`。

const isEmpty = function(obj) {
    for (const _ in obj) { return false; }
    return true; 
};


