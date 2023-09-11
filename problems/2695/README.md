# [2695. Array Wrapper][title]

## Description
創建一個類“ArrayWrapper”，在其構造函數中接受整數數組。 這個類應該有兩個特點:      
Create a class `ArrayWrapper` that accepts an array of integers in its constructor. This class should have two features:

- 當使用“+”運算符將此類的兩個實例相加時，結果值是兩個數組中所有元素的總和。      
When two instances of this class are added together with the `+` operator, the resulting value is the sum of all the elements in both arrays.

- 當在實例上調用“String()”函數時，它將返回一個用括號括起來的逗號分隔字符串。 例如，“[1,2,3]”。     
When the `String()` function is called on the instance, it will return a comma separated string surrounded by brackets. For example, `[1,2,3]`.

 
### Example 1:    
>  __Input__:
   nums = [[1,2],[3,4]], operation = "Add"                   
   __Output__:       
   10     
   __Explanation__:
   const obj1 = new ArrayWrapper([1,2]);          
   const obj2 = new ArrayWrapper([3,4]);        
   obj1 + obj2; // 10       

### Example 2:    
>  __Input__:     
   nums = [[23,98,42,70]], operation = "String"                             
   __Output__:    
   "[23,98,42,70]"              
   __Explanation__:     
   const obj = new ArrayWrapper([23,98,42,70]);         
   String(obj); // "[23,98,42,70]"                

 
### Example 3:    
>  __Input__:     
   nums = [[],[]], operation = "Add"                           
   __Output__:    
   0         
   __Explanation__:     
   const obj1 = new ArrayWrapper([]);     
   const obj2 = new ArrayWrapper([]);      
   obj1 + obj2; // 0             


### Constraints:
- `0 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`
- `Note: nums is the array passed to the constructor`

## Solution


1. 創建類別與方法
   ```javascript
   class ArrayWrapper {    
      constructor(nums) {
         this.nums = nums;
      }

      valueOf() {
         //兩個實例相加處理 方法
      }

      toString() {
         //字串相加處理 方法
      }
   }
   ```
2. 兩個實例相加處理 方法
   ```javascript
   class ArrayWrapper {
      constructor(nums) {
         this.nums = nums;
      }

      valueOf() {
         let sum = 0;
         //this.nums=[[1,2],[3,4]]
         for (let i = 0; i < this.nums.length; i++) {
         for (let j = 0; j < this.nums[i].length; j++){
               sum += this.nums[i][j];
         }        
         }
         return sum;
      }

      toString() {
         //字串相加處理 方法
      }
   }
   ```

3. 字串相加處理 方法
   ```javascript
   class ArrayWrapper {
      //this.nums=[[1,2],[3,4]]
      constructor(nums) {
         this.nums = nums;
      }

      valueOf() {
         let sum = 0;
         for (let i = 0; i < this.nums.length; i++) {
         for (let j = 0; j < this.nums[i].length; j++){
               sum += this.nums[i][j];
         }        
         }
         return sum;
      }

      toString() {
         let str = '[';
         for (let i = 0; i < this.nums.length; i++) {
         str += this.nums[i];
         if (i !== this.nums.length - 1) {
            str += ',';
         }
         }
         str += ']';
         return str;
      }
   }
   ```


💡 更簡潔的方法 
- valueOf()
   - 使用Array.flat(1); 將多維陣列平坦化為一維陣列
   - 使用Array.reduce(); 相加所有元素
- toString()
   - 使用Array.join(,) 把所有的元素中間用,隔開並組合成字串 

```javascript
class ArrayWrapper {
    //this.nums=[[1,2],[3,4]]
    constructor(nums) {
      this.nums = nums;
    }

    valueOf() {
        const flattenArray = this.nums.flat(1);
        return flattenArray.reduce((sum, num) => sum + num, 0);
    }

    toString() {
      return `[${this.nums.join(',')}]`;
    }
}
```



testcase1
```javascript
let nums1 = [[1,2],[3,4]]
let ex1 = new ArrayWrapper(nums1);
console.log(ex1.valueOf()); // 10
```
testcase2
```javascript
let nums2 = [[23,98,42,70]]
let ex2 = new ArrayWrapper(nums2);
console.log(ex2.toString()); //[23,98,42,70]
```
testcase3
```javascript
let nums3 = [[],[]]
let ex3 = new ArrayWrapper(nums3);
console.log(ex3.valueOf()); // 0
```

[title]: https://leetcode.com/problems/array-wrapper/