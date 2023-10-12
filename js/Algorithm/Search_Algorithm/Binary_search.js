/*
Interval Search: These algorithms are specifically designed
for searching in sorted data-structures.
These type of searching algorithms are much more efficient than
Linear Search as they repeatedly target the center of the search
structure and divide the search space in half. For Example:
Binary Search.
*************
Binary search pseudocode
-if the array is empty , return -1 as the element cannot be found.
-if the array has elements , find the middle , element in the array.
if target is equal the middle element,return the middle element index.
-If target is less than middle element , binary search left half of the 
array.
-If target is greater than middle element , binary search right
half of the array
*/
function BinarySearch(arr,target){
    let low = 0;
    let length = arr.length;
    let high = length -1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(target == arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            high = mid -1;
        }else {
            low = mid + 1;
        }
    }
    return -1;
}
console.log(BinarySearch([-5,2,4,6,10],4)) // 2
console.log(BinarySearch([-5,2,4,6,10],10)) // 4
console.log(BinarySearch([-5,2,4,6,10],20)) // -1
// Big-o = O(log(n)) case Input size reduced by half








