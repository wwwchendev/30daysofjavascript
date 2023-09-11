// 2625. Flatten Deeply Nested Array
// 多維數組是包含整數或其他多維數組的遞歸數據結構。        
// A multi-dimensional array is a recursive data structure         
// that contains integers or other multi-dimensional arrays.       

// 展平數組是該數組的一個版本，刪除了部分或全部子數組並替換為該子數組中的實際元素。        
// A flattened array is a version of that array with some or all of the sub-arrays         
// removed and replaced with the actual elements in that sub-array.        

// 僅噹噹前嵌套深度小於“n”時才應執行此展平操作。       
// This flattening operation should only be done       
// if the current depth of nesting is less than `n`.       

// 第一個數組中元素的深度被視為“0”。       
// The depth of the elements in the first array are considered to be `0`.      

// 請在不使用內置 `Array.flat` 方法的情況下解決它。        
// Please solve it without the built-in `Array.flat` method.       






// 1.先了解多維數組、遞迴、嵌套深度等定義
// let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  ;  
// let n = 1;
// 1-1.多維數組是包含整數或其他多維數組的遞歸數據結構。            
//   展平數組是該數組的一個版本，刪除了部分或全部子數組並替換為該子數組中的實際元素。 
// 1-2.僅噹噹前嵌套深度小於“n”時才應執行此展平操作。           
//   第一個數組中元素的深度被視為“0”。          
// 請在不使用內置 `Array.flat` 方法的情況下解決它。        


// 2.宣告函式flat，接受一個多維數組`arr`和變數`n`用以設定展平深度
var flat = function (arr, n) {
    let answer = [];    

    // 展平邏輯
    
    return answer;
};

// 3.使用for迴圈遍歷多維陣列`arr`，判斷要進行遞迴還是元素放進`answer陣列`
// 如果 n>0 且`arr`當前遍歷元素是陣列時進行遞迴
// 如果 n≤0 就把當前遍歷元素放進`answer`陣列
var flat = function (arr, n) {
    let answer = [];
    
    // 展平邏輯
    for(let i=0; i<arr.length; i++){        
        if(n>0 && Array.isArray(arr[i])){        
            //遞迴邏輯處理
        }
        else{ answer.push(arr[i]);}
    }
    
    return answer;
};

// 4.遞迴邏輯處理
var flat = function (arr, n) {
    let answer = [];
    
    // 展平邏輯
    for(let i=0; i<arr.length; i++){        
        if(n>0 && Array.isArray(arr[i])){     
            //遞迴邏輯處理:
            // ✓ 遞迴函式
            // 目前處理的元素 arr[i] 作為參數傳遞給 flat 函數，同時將深度 n 減一。  
            // ✓ 展開運算符...
            // 將 flat(arr[i], n-1) 的結果展開為一系列的元素，
            // 並將它們添加到 answer 陣列中。
            answer.push(...flat(arr[i], n-1));
        }
        else{ answer.push(arr[i]);}
    }
    
    return answer;
};

/*
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  ;  
let n = 1;
flat([4, 5, 6] , 1-1) 
flat([7, 8, [9, 10, 11], 12] , 1-1)
flat([13, 14, 15] , 1-1)
=> n=0 會進行else處理：把當前陣列元素都展開添加到 answer陣列中
=> output: [1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15]
*/

/*
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]] ;  
let n = 2;

flat([1, 2, 3] , 2-1) 
flat([4, 5, 6] , 2-1)
    => 當前陣列內沒有子陣列 會進行else處理：把當前陣列元素都展開添加到 answer陣列中

flat([7, 8, [9, 10, 11], 12] , 2-1)
    => 當前陣列內整數7,8,12以及子陣列[9,10,11] 
    => 7,8,12 會進行else處理：把當前陣列元素都展開添加到 answer陣列中
    => [9,10,11]判斷式成立進行遞迴
        => flat( [9, 10, 11] , 1-1)
        => n=0 會進行else處理：把當前陣列元素都展開添加到 answer陣列中

flat([13, 14, 15] , 2-1)
    => 當前陣列內沒有子陣列 會進行else處理：把當前陣列元素都展開添加到 answer陣列中
 
=> `...flat(arr[i], n-1)`展開遞迴處理結果 並將結果添加到 answer 陣列中。
=> output: [1、2、3、4、5、6、7、8、9、10、11、12、13、14、15]
*/