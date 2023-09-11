# [2726. Calculator with Method Chaining][title]

## Description
設計一個計算器類別 Design a Calculator class.       

該類應提供加、減、乘、除和求冪的數學運算。      
它還應該允許使用方法鏈接執行連續操作。      
Calculator 類構造函數應該接受一個數字作為結果的初始值。     
The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation.        
It should also allow consecutive operations to be performed using method chaining.      
The Calculator class constructor should accept a number which serves as the initial value of result.        

您的計算器類應該具有以下方法：      
Your Calculator class should have the following methods    

- add - 此方法將給定的數值添加到結果中並返回更新的計算器。      
This method adds the given number value to the result and returns the updated Calculator.       
- minus - 此方法從結果中減去給定的數值並返回更新後的計算器。        
This method subtracts the given number value from the result and returns the updated Calculator.        
- multiply - 此方法將結果乘以給定數值並返回更新後的計算器。     
This method multiplies the result  by the given number value and returns the updated Calculator.        
- divide - 此方法將結果除以給定的數值並返回更新後的計算器。 如果傳遞的值為 0，則應拋出錯誤“不允許除以零”。      
This method divides the result by the given number value and returns the updated Calculator.                 
If the passed value is 0, an error "Division by zero is not allowed" should be thrown.          
- power - 此方法將結果計算給定數值的冪並返回更新後的計算器。        
This method raises the result to the power of the given number value and returns the updated Calculator.        
- getResult - 此方法返回結果。      
This method returns the result.         

與實際結果相差 10-5 以內的解被認為是正確的。        
Solutions within 10-5 of the actual result are considered correct.           

 
### Example 1:    
>  __Input__:     
   actions = ["Calculator", "add", "subtract", "getResult"],      
   values = [10, 5, 7]                 
   __Output__:       
   8        
   __Explanation__:
   new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8    
 
### Example 2:    
>  __Input__:     
   actions = ["Calculator", "multiply", "power", "getResult"],       
   values = [2, 5, 2]                           
   __Output__:    
   100         
   __Explanation__:     
   new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100          

 
### Example 3:    
>  __Input__:     
   actions = ["Calculator", "divide", "getResult"], 
   values = [20, 0]                           
   __Output__:    
   "Division by zero is not allowed"         
   __Explanation__:     
   new Calculator(20).divide(0).getResult() // 20 / 0         
   
   The error should be thrown because we cannot divide by zero.

### Constraints:
- `actions` is a valid JSON array of strings
- `values` is a valid JSON array of numbers
- <code>2 <= actions.length <= 2 * 10<sup>4</sup></code>
- <code>1 <= values.length <= 2 * 10<sup>4</sup> - 1</code>
- `actions[i]` is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"
- First action is always "Calculator"
- Last action is always "getResult"

## Solution


依照題目寫出創建類別即可，重點在建構函式內初始化屬性，他會儲存result的值，    
之後運算的時候都會訪問result值進行鍊式計算與更新，再返回實例對象`this`。      
```javascript
class Calculator{

    //建構函式 初始化屬性result=參數的val值
    constructor(val){
        this.result = val;        
    }

    //加法
    add(val){
        this.result += val;
        return this;
    }

    //減法
    subtract(val){
        this.result -= val;
        return this;
    }

    //乘法
    multiply(val){
        this.result *= val;
        return this;        
    }   

    //除法
    divide(val){
        if (val == 0){ throw new Error("Division by zero is not allowed"); }
        this.result /= val;
        return this;
    }   
    
    //指數運算(幂)
    power(val){
        this.result **= val;
        return this;
    }  
    
    //取得結果
    getResult(val){
        return this.result;
    }
}
```

[title]: https://leetcode.com/problems/calculator-with-method-chaining/