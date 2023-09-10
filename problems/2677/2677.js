// 2677. Chunk Array
// 給定一個數組“arr”和一個塊大小“size”，返回一個分塊數組。 
// 分塊數組包含“arr”中的原始元素，但由每個長度為“size”的子數組組成。 
// 如果“arr.length”不能被“size”整除，則最後一個子數組的長度可能小於“size”。
// Given an array `arr` and a chunk size `size`, return a chunked array.       
// A chunked array contains the original elements in `arr`,        
// but consists of subarrays each of length `size`.        
// The length of the last subarray may be less than `size`         
// if `arr.length` is not evenly divisible by `size`.      


// 您可以假設該數組是 JSON.parse 的輸出。 換句話說，它是有效的 JSON。      
// You may assume the array is the output of JSON.parse.       
// In other words, it is valid JSON.       

// 請在不使用 lodash 的 `_.chunk` 函數的情況下解決它。     
// Please solve it without using lodash's `_.chunk` function.



// 1.給定一個數組“arr”和一個chunk size“size”，返回一個chunk數組。
// 
// const chunk = function(arr,size){
//    let chunkedAry = [];

//    //chunk分組邏輯

//    return chunkedAry;
// }
// 

// 2.分塊數組包含“arr”中的原始元素，但由每個長度為“size”的子數組組成。     
// 如果“arr.length”不能被“size”整除，則最後一個子數組的長度可能小於“size”。

// 2-1.在傳寫chunk分組邏輯之前，先試想input和output結果 
// => arr=[1,2,3,4,5,6,7,8]
// => size=3
// => chunkAry=[[1,2,3],[4,5,6],[7,8]]

// 3.使用for迴圈遍歷`arr`，根据索引值進行分組處理

const chunk = function(arr,size){
   let chunkedAry = [];

   //chunk分組邏輯
   for(let i=0;i<arr.length;i+=1){
      //在chunkAry先建置[]空陣列
      if(i%size===0){
         chunkedAry.push([]);
      }
      //push arr的原始元素 以進行分組
      //在i=0的時候透過if判斷已在chunkAry中新增空陣列[ ]
      //因此i=0會是 chunkAry[0].push(arr[0]);
      //因此i=1會是 chunkAry[0].push(arr[1]);
      //因此i=2會是 chunkAry[0].push(arr[2]);
      //因此i=3會是 chunkAry[1].push(arr[3]);
      //因此i=4會是 chunkAry[1].push(arr[4]); ..類推
      chunkedAry[chunkedAry.length - 1].push(arr[i]);
   }

   return chunkedAry;
}



//testcase1
let arr1 = [1,2,3,4,5];
let size1 = 1;

let chunk1 = chunk(arr1,size1);
console.log(chunk1);


//testcase2
let arr2 = [1,9,6,3,2];
let size2 = 3;

let chunk2 = chunk(arr2,size2);
console.log(chunk2);


//testcase3
let arr3 = [8,5,3,2,6];
let size3 = 6;

let chunk3 = chunk(arr3,size3);
console.log(chunk3);