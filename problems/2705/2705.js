// 2705. Compact Object 精簡對象

// 题目要求创建Compact Object，即删除包含假值（falsy values）的键。
// 因此需要遍历对象的键值对，将不包含假值的键值对添加到新的对象中。

// 因此我們須根據JSON.parse輸出對象是否可迭代 進行數據處理。
// JSON.parse輸出對象根據是否可迭代分為：
// - 不可迭代的類型：Number、Boolean、null。
// - 可迭代的類型：Object、Array、String。



var compactObject = function(obj) {
   //不可迭代類型 處理
   if (typeof obj !== 'object' || obj === null ) {  return obj; }

   // 可迭代類型－Array 處理
   if (Array.isArray(obj)) {
      return obj.filter(Boolean).map(compactObject);
   }
      
   // 可迭代類型－Object、String 處理
   const compacted = {};

   //for...in遍歷當前obj的鍵值=["a","b"]
   //key="a"，compactObject(obj[a]);-> 遞迴 null-> 返回null-> 判斷為假值移除該偽值元素。
   //key="b"，compactObject(obj[b]);-> 遞迴 [false, 1]
   //   使用 Array.filter(Boolean) 过滤掉数组中的假值元素 剩下[1]，重新遞迴後返回"1"。
   //   針對 遞迴的返回值"1" 進行Boolean判斷，由於是真值 即賦值 compacted[b]=1 ; 
   for (const key in obj) {
      let value = compactObject(obj[key]);
      if (Boolean(value)) { compacted[key] = value; }
   }

   // 最後 return 的 compacted物件 則為  {"b": [1]}
   return compacted;
}


//testcase1

let obj1 = [null, 0, false, 1];
compactObject(obj1); //output: [1]

//testcase2
let obj2 = {"a": null, "b": [false, 1]};
compactObject(obj2); //output: {b: [1]}

//testcase3
let obj3 = [null, 0, 5, [0], [false, 16]];
compactObject(obj3); //output: [5,[],[16]]

