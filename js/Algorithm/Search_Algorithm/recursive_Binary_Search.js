function recursiveBinarySearch(arr,target){
    return Search(arr,target,0,arr.length -1)
}
// search function
function Search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
if(target === arr[middleIndex]){
    return middleIndex;
}

if(target > arr[middleIndex]){
    return Search(arr,target,middleIndex + 1,rightIndex)
}else{
    return Search(arr,target,leftIndex,middleIndex - 1)
}
}


console.log(recursiveBinarySearch([-5,2,4,6,10],10)) // 4
console.log(recursiveBinarySearch([-5,2,4,6,10],6)) // 3
console.log(recursiveBinarySearch([-5,2,4,6,10],4)) // 2
console.log(recursiveBinarySearch([-5,2,4,6,10],7)) // -1

// Big-o = O(log(n)) case Input size reduced by half
