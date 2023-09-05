# [2705. Compact Object][title]

## Description
Given an object or array `obj`, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when `Boolean(value)` returns `false`.

You may assume the `obj` is the output of `JSON.parse`. In other words, it is valid JSON.

 

### Example 1:    
>  __Input__:     
   obj = [null, 0, false, 1]                 
   __Output__:  [1]     
   __Explanation__:     
   All falsy values have been removed from the array.            
 
### Example 2:    
>  __Input__:     
   obj = {"a": null, "b": [false, 1]}              
   __Output__:  {"b": [1]}         
   __Explanation__:     
   obj["a"] and obj["b"][0] had falsy values and were removed.         
   
### Example 3:    
>  __Input__:     
   obj = [null, 0, 5, [0], [false, 16]]                    
   __Output__:   [5, [], [16]]            
   __Explanation__:     
   obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.            

### Constraints:
- `obj` is a valid JSON object
- <code>2 <= JSON.stringify(obj).length <= 10<sup>6</sup></code>

## Solution

```

```

[title]: https://leetcode.com/problems/memoize/