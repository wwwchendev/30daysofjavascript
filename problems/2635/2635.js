//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
//The returned array should be created such that returnedArray[i] = fn(arr[i], i).
//Please solve it without the built-in Array.map method.

//1.什麼是mapping function
//2.什麼是Array.map method

const map = (arr,fn)=>{
   let returnedArray = [];
   for(i=0;i<arr.length;i++){
      returnedArray.push(fn(arr[i],i));
   };
   return returnedArray;
}

//Testcase
let arr1 = [1,2,3];
let fn1 = function plusone(n) { return n + 1; };
console.log(map(arr1,fn1));

//Testcase
let arr2 = [1,2,3];
let fn2 = fn = function plusI(n, i) { return n + i; }
console.log(map(arr2,fn2));

//Testcase
let arr3 = [10,20,30];
let fn3 = fn = function constant() { return 42; }
console.log(map(arr3,fn3));