# [2627.Debounce][title]

## Description
給定一個函數“fn”和一個以毫秒為單位的時間“t”，返回該函數的去抖版本。
Given a function `fn` and a time in milliseconds `t`, return a debounced version of that function.

去抖函數是指其執行延遲“t”毫秒的函數，如果在該時間窗口內再次調用該函數，則其執行將被取消。 去抖函數還應該接收傳遞的參數。
A debounced function is a function whose execution is delayed by `t` milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

例如，假設“t = 50ms”，並且該函數在“30ms”、“60ms”和“100ms”時調用。 前 2 個函數調用將被取消，第 3 個函數調用將在“150ms”處執行。 如果改為“t = 35ms”，則第一個調用將被取消，第二個調用將在“95m​​s”執行，第三個調用將在“135ms”執行。
For example, let's say `t = 50ms`, and the function was called at `30ms`, `60ms`, and `100ms`. The first 2 function calls would be cancelled, and the 3rd function call would be executed at `150ms`. If instead `t = 35ms`, The 1st call would be cancelled, the 2nd would be executed at `95ms`, and the 3rd would be executed at `135ms`.

![Debounce Schematic](https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png)

上圖顯示了去抖將如何轉換事件。 每個矩形代表 100ms，去抖時間為 400ms。 每種顏色代表一組不同的輸入。
The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

請在不使用 lodash 的 `_.debounce()` 函數的情況下解決這個問題。
Please solve it without using lodash's `_.debounce()` function.
 

### Example 1:    
>  __Input__:           
   t = 50      
   calls = [      
   {"t": 50, inputs: [1]},    
   {"t": 75, inputs: [2]}     
   ]         
   __Output__:       
   [{"t": 125, inputs: [2]}]                   
   __Explanation__:     
   let start = Date.now();    
   function log(...inputs) {     
   console.log([Date.now() - start, inputs ])      
   }     
   const dlog = debounce(log, 50);     
   setTimeout(() => dlog(1), 50);      
   setTimeout(() => dlog(2), 75);      

   The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms      
   The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).      


### Example 2:    
>  __Input__:           
   t = 20      
   calls = [      
   {"t": 50, inputs: [1]},    
   {"t": 100, inputs: [2]}    
   ]                   
   __Output__:       
   [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]                 
   __Explanation__:     
   The 1st call is delayed until 70ms. The inputs were (1).    
   The 2nd call is delayed until 120ms. The inputs were (2).      


### Example 3:    
>  __Input__:        
   t = 150     
   calls = [      
   {"t": 50, inputs: [1, 2]},    
   {"t": 300, inputs: [3, 4]},      
   {"t": 300, inputs: [5, 6]}    
   ]        
   __Output__:    
   [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]                    
   __Explanation__:     
   The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).    
   The 2nd call is cancelled by the 3rd call    
   The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).       
   

### Constraints:
- `0 <= t <= 1000`
- `1 <= calls.length <= 10`
- `0 <= calls[i].t <= 1000`
- `0 <= calls[i].inputs.length <= 10`

## Solution

1.給定一個函數“fn”和一個以毫秒為單位的時間“t”，返回該函數的去抖版本。

```javascript
function debounce(fn, t) {
    return () => {
        //調用邏輯
    };
  }
```

2.去抖函數是指其執行延遲“t”毫秒的函數，如果在該時間窗口內再次調用該函數，則其執行將被取消。 
去抖函數還應該接收傳遞的參數。
如果在該時間窗口內再次調用該函數，則其執行將被取消。
-> 調用的時候，如果計時器存在應該清除計時器以取消調用fn 
-> 外部作用域要宣告變數`timer`來記憶 timeoutID，在內部引用setTimeout()把ID傳到`timer`
-> 在重置計時器之前應先清除原本的計時器，在setTimeout之前設置clearTimeout把舊的計時器清除。

```javascript
function debounce(fn, t) { 
    let timer ;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{fn(...args)},t);
    };
  }
```

[title]: https://leetcode.com/problems/debounce/