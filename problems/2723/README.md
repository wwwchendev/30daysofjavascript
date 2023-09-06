# [2723. Add Two Promises][title]

## Description
Given two promises `promise1` and `promise2`, return a new promise. `promise1` and `promise2` will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

### Example 1:    
>  __Input__:     
   promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),       
   promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))                 
   __Output__:       
   7    
   __Explanation__:     
   The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.           
 
### Example 2:    
>  __Input__:     
   promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),      
   promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))                 
   __Output__:    
   2         
   __Explanation__:     
   The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.  
   
### Constraints:
- `promise1 and promise2 are promises that resolve with a number`

## Solution

- 最初的解決方案
等兩個promise解析完畢後用promise.all()取得陣列，再用reduce把結果進行加總。
   ```
   const addTwoPromises = async(promise1,promise2)=>{    
      let resultAry = await Promise.all([promise1, promise2]);    
      let sum = resultAry.reduce((acc,cur)=>acc+cur,0);
      return sum;
   }
   ```

- async\await
   - async 關鍵字用於定義一個異步函數
   範例中使用 async 的意思是告訴 JavaScript 解析器，這表示這個函數內部可能包含Promise異步操作，並且它會返回一個 Promise。
   - await 關鍵字用於等待一個 Promise 解決。
   await 關鍵字讓 JavaScript 執行緒停止執行，直到等待 Promise.all([promise1, promise2])都完成後，然後將它們的結果收集到一個陣列中。這些結果被解構賦值給 value1 和 value2 變數，
- 利用解構賦值讓程式碼更加直觀

   ```
   const addTwoPromises = async(promise1,promise2)=>{    
      const [value1, value2] = await Promise.all([promise1, promise2]);
      return value1 + value2;
   }
   ```


[title]: https://leetcode.com/problems/add-two-promises