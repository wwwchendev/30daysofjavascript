
//Write a function `expect` that helps developers test their code. 
expect = (val1)=>{

   //It should take in any value `val` and return an object with the following two functions.
   //三元運算符返回一個表達式的值，而throw new Error是陳述句，不能直接作為表達式返回。 
   //因此將throw new Error用函式包裝成表達式
   th= (str)=>{
      throw new Error(str);
   }

   // `toBe(val)` 
   // accepts another value and returns `true` if the two values `===` each other. 
   // If they are not equal, it should throw an error `"Not Equal"`.
   toBe = (val2) => {
      return val1 === val2? true : th("Not Equal") ;
   };

   // `notToBe(val)` 
   // accepts another value and returns `true` if the two values `!==` each other. 
   // If they are equal, it should throw an error `"Equal"`.
   notToBe = (val2) => {
      return val1 !== val2? true : th("Equal");
   };

   return {toBe,notToBe}

}


//Testcase
console.log(expect(5).toBe(5)); //true
console.log(expect(5).toBe(null)); //Uncaught Error Error: Not Equal
console.log(expect(5).notToBe(null)); //true