# [2724. Sort By][title]

## Description
Given an array `arr` and a function `fn`, return a sorted array `sortedArr`. You can assume `fn` only returns numbers and those numbers determine the sort order of `sortedArr`. `sortedArray` must be sorted in ascending order by `fn` output.

You may assume that `fn` will never duplicate numbers for a given array.

### Example 1:    
>  __Input__:     
   arr = [5, 4, 1, 2, 3], fn = (x) => x           
   __Output__:       
   [1, 2, 3, 4, 5]    
   __Explanation__:     
   fn simply returns the number passed to it so the array is sorted in ascending order.             
 
### Example 2:    
>  __Input__:     
   arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x                     
   __Output__:    
   [{"x": -1}, {"x": 0}, {"x": 1}]              
   __Explanation__:     
   fn returns the value for the "x" key. So the array is sorted based on that value.          
   
### Example 3:    
>  __Input__:     
   arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]                    
   __Output__:    
   [[10, 1], [5, 2], [3, 4]]            
   __Explanation__:     
   arr is sorted in ascending order by number at index=1.             

### Constraints:
- `arr is a valid JSON array`
- `fn is a function that returns a number`
- `1 <= arr.length <= 5 * 105`

## Solution

```

```

[title]: https://leetcode.com/problems/sort-by