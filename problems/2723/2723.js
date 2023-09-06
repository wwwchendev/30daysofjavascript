// 2723. Add Two Promises

// 使用 Promise.all() 方法和await 來等待兩個promise 都得到解析。
// 一旦它們解析，它們的值就會被檢索並存儲在變量 value1 和 value2 中。
// 最後，返回一個新的 Promise，其中包含 value1 和 value2 的總和。
// Given two promises `promise1` and `promise2`, return a new promise. 
// `promise1` and `promise2` will both resolve with a number. 
// The returned promise should resolve with the sum of the two numbers.



// //比較單純的想法 沒有使用解構賦值
// ```
// const addTwoPromises = async(promise1,promise2)=>{    
//     let resultAry = await Promise.all([promise1, promise2]);    
//     let sum = resultAry.reduce((acc,cur)=>acc+cur,0);
//     return sum;
// }
// ```

//了解解構賦值
const addTwoPromises = async(promise1,promise2)=>{    
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
}
