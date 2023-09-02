

//createCounter中有一個閉包包含counter函式和變量n
createCounter = (n) =>{
   counter=()=>{
      return n++; //後置遞增運算子 //第一次調用 counterA() 返回 10，然後 n 增加到 11。
   }
   return counter;
}
// 將箭頭函式縮寫後，變成 const createCounter = (n)=> ()=> n++ ;


// counterA 引用 createCounter(10) 的結果，
// 因此繼承了 createCounter 函数内部的作用域，
// 此時counterA閉包中的變數n會被保存下來，
// 在後續的調用中該變量都可以被訪問和修改。
const counterA = createCounter(10);

// Testcase
const results = [
   counterA(),
   counterA(),
   counterA()
];
console.log(results); // 输出 [10, 11, 12]

