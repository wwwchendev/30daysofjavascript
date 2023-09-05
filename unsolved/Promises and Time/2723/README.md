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
- `0 <= a, b <= 105`
- `1 <= n <= 10`
- `at most 105 function calls`
- `at most 105 attempts to access callCount`
- `input function is sum, fib, or factorial`

## Solution

```

```

[title]: https://leetcode.com/problems/add-two-promises