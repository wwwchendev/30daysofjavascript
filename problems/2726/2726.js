// 2726. Calculator with Method Chaining
// 設計一個計算器類別 Design a Calculator class.       

// 該類應提供加、減、乘、除和求冪的數學運算。      
// 它還應該允許使用方法鏈接執行連續操作。      
// Calculator 類構造函數應該接受一個數字作為結果的初始值。     
// 您的計算器類應該具有以下方法：      

// - add - 此方法將給定的數值添加到結果中並返回更新的計算器。      
// - minus - 此方法從結果中減去給定的數值並返回更新後的計算器。              
// - multiply - 此方法將結果乘以給定數值並返回更新後的計算器。          
// - divide - 此方法將結果除以給定的數值並返回更新後的計算器。 如果傳遞的值為 0，則應拋出錯誤“不允許除以零”。 
// - power - 此方法將結果計算給定數值的冪並返回更新後的計算器。              
// - getResult - 此方法返回結果。        

// 與實際結果相差 10-5 以內的解被認為是正確的。        




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