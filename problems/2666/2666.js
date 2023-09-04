// 2666. Allow One Function Call
// 給定一個函數 fn，返回一個與原始函數相同的新函數，只不過它確保 fn 最多被調用一次。 
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// 第一次調用返回的函數時，它應該返回與 fn 相同的結果。
// The first time the returned function is called, it should return the same result as fn.

// 隨後每次調用它時，它都應該返回未定義。
// Every subsequent time it is called, it should return undefined.


const once = (fn)=>{
   let wasCalled = false;

   return (...args)=>{
      if(!wasCalled){
         wasCalled=true;
         
         // 返回與原始函數相同的結果
         // 做法：宣告新函式引用原始函式，同時將原始函數的參數傳遞給新函數
         let result = fn(...args); 
         return result;
      }else{
         return undefined;
      }  
   }
}


// Testcase 
fn = (a,b,c) => (a + b + c);
const wrappedFn1 = once(fn);

console.log(wrappedFn1(1,2,3));
console.log(wrappedFn1(4,5,6));

// Testcase 
fn = (a,b,c) => (a * b * c);
const wrappedFn2 = once(fn);

console.log(wrappedFn2(5,7,4));
console.log(wrappedFn2(2,3,6));
console.log(wrappedFn2(4,6,8));