# [2637. Promise Time Limit][title]

## Description
Given an asynchronous function `fn` and a time `t` in milliseconds, return a new time limited version of the input function. `fn` takes arguments provided to the time limited function.

The time limited function should follow these rules:

- If the `fn` completes within the time limit of `t` milliseconds, the time limited function should resolve with the result.
- If the execution of the `fn` exceeds the time limit, the time limited function should reject with the string `"Time Limit Exceeded"`.

 

### Example 1:    
>  __Input__:           
   fn = async (n) => {     
      await new Promise(res => setTimeout(res, 100));     
      return n * n;      
   }     
   inputs = [5]      
   t = 50                     
   __Output__:       
   {"rejected":"Time Limit Exceeded","time":50}                  
   __Explanation__:     
   const limited = timeLimit(fn, t)    
   const start = performance.now()     
   let result;    
   try {    
      const res = await limited(...inputs)      
      result = {"resolved": res, "time": Math.floor(performance.now() - start)};    
   } catch (err) {      
      result = {"rejected": err, "time": Math.floor(performance.now() - start)};    
   }     
   console.log(result) // Output    

   The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.    

### Example 2:    
>  __Input__:           
   fn = async (n) => {     
   await new Promise(res => setTimeout(res, 100));       
   return n * n;     
   }         
   inputs = [5]      
   t = 150                 
   __Output__:       
   {"resolved":25,"time":100}              
   __Explanation__:     
   The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.  


### Example 3:    
>  __Input__:        
   fn = async (a, b) => {           
  await new Promise(res => setTimeout(res, 120));     
  return a + b;      
   }     
   inputs = [5,10]      
   t = 150        
   __Output__:    
   {"resolved":15,"time":120}               
   __Explanation__:     
   ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.           
   
### Example 4:    
>  __Input__:        
   fn = async () => {       
   throw "Error";    
   }     
   inputs = []    
   t = 1000            
   __Output__:    
   {"rejected":"Error","time":0}                 
   __Explanation__:     
   ​​​The function immediately throws an error.          

### Constraints:
- `0 <= inputs.length <= 10`
- `0 <= t <= 1000`
- `fn returns a promise`

## Solution

```

```

[title]: https://leetcode.com/problems/promise-time-limit