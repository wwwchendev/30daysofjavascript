
// //1.Write a function createHelloWorld. 
// const createHelloWorld = ()=>{
//    //2.It should return a new function that always returns "Hello World".
//    return ()=>{
//       return "Hello World"
//    }
// }  

//3. 箭頭函式縮寫整理
const createHelloWorld = ()=> ()=> "Hello World";

//Testcase
const conversation = createHelloWorld();
console.log(conversation());
console.log(conversation({},null,42));
