// 2724. Sort By

// 給定一個數組“arr”和一個函數“fn”，返回一個排序數組“sortedArr”。      
// Given an array `arr` and a function `fn`, return a sorted array `sortedArr`.        

// 您可以假設“fn”僅返回數字，並且這些數字決定“sortedArr”的排序順序。       
// You can assume `fn` only returns numbers        
// and those numbers determine the sort order of `sortedArr`.      

// `sortedArray` 必須按 `fn` 輸出升序排序。        
// `sortedArray` must be sorted in ascending order by `fn` output.     

// 您可能會假設“fn”永遠不會重複給定數組的數字。        
// You may assume that `fn` will never duplicate numbers for a given array.        




// 根據函數 fn 的返回值對數組 arr 進行升序排序，並返回排序後的新數組。
const sortBy =function(arr, fn) {
    //排序的邏輯
    return arr.slice().sort((a, b) => fn(a) - fn(b));
}

// - arr.slice()       
//     沒有傳遞任何參數時，將返回原始數組 arr 的淺拷貝（shallow copy），這是一種常用於復制數組的方法。
//     這意味著它會創建一個新數組，包含原數組中的所有元素，並將這些元素複製到新數組中，但不會影響原始數組。

// - .sort((a, b) => fn(a) - fn(b)) 
//     陣列的 sort 方法，該方法接受一個比較函數作為參數。
//     計算了fn(a) - fn(b)這兩個返回值的差值，這將成為排序的依據。
// =>  如果差值為負數，則 a 應該排在 b 前面，
//     如果差值為正數，則 b 應該排在 a 前面，
//     如果差值為零，則它們保持相對順序不變。 最後，函數返回了排序後的新數組。



//testcase
let arr = [5, 4, 1, 2, 3] ;
let fn = (x) => x;
sortBy(arr,fn);   //輸出[1, 2, 3, 4, 5]
