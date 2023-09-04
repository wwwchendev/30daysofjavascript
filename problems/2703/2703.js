//2703. Return Length of Arguments Passed

// 編寫一個函數argumentsLength，返回傳遞給它的參數的計數。
// Write a function argumentsLength that returns the count of arguments passed to it.

function argumentsLength() {
   return arguments.length;
}

// Example usage:
let result = argumentsLength(5);
console.log(result); // This will log 1

result = argumentsLength({}, null, "3");
console.log(result); // This will log 3
