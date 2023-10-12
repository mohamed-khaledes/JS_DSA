/*
    linear search
    Sequential Search: In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search.
Linear Search to find the element “20” in a given list of numbers

    "problem" : given an array of 'n' elements and a target element
        't' , find the index of 't' in the array Return -1 if the 
        target element in not found
        
        arr=[-5,2,10,4,6] ,t=10 => should return 2
        arr=[-5,2,10,4,6] ,t=6 => should return 4
        arr=[-5,2,10,4,6] ,t=20 => should return -1
*/
function LinearSearch(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target){
            return i
        }
        // else if (!arr.includes(target)){
        //     return -1;
        // }
    }
    return -1;
}
// Big-o => O(n)
console.log(LinearSearch([-5,2,10,4,6],10)) // 2
console.log(LinearSearch([-5,2,10,4,6],6)) // 4
console.log(LinearSearch([-5,2,10,4,6],20)) // -1