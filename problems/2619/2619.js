// 2619. Array Prototype Last

// 編寫增強所有數組的代碼，以便您可以在任何數組上調用 array.last() 方法，      
// 並且它將返回最後一個元素。      
// Write code that enhances all arrays such that you can call the array.             
// last() method on any array and it will return the last element.   

// 如果數組中沒有元素，則應返回 -1。               
// If there are no elements in the array, it should return -1.  

// 您可以假設該數組是 JSON.parse 的輸出。      
// You may assume the array is the output of JSON.parse.


//為陣列原型添加一個擴充方法
Array.prototype.last = function() {

    //如果數組中沒有元素，則應返回 -1
    if(this.length==0){ return -1;}

    //預設返回最後一個元素 
    return this[this.length-1]
};
