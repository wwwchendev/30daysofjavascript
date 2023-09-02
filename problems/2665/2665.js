createCounter=(i)=>{
   let init = i;
   return {
      increment:()=>++i,
      decrement:()=>--i,
      reset:()=>{
         i=init;
         return i
      },
   }
}

//Testcase

let counter = createCounter(5);
let case1 = [
   counter.increment(),
   counter.reset(),
   counter.decrement()
]
console.log(case1);



counter = createCounter(0);
let case2 = [
   counter.increment(),
   counter.increment(),
   counter.decrement(),
   counter.reset(),
   counter.reset(),
];
console.log(case2);