function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
      //find min number in subarray 
      //and place it at ith position
        let minptr = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[minptr] > arr[j]){
                minptr = j;
            }
        }
      //swap
        let temp = arr[i];
        arr[i] = arr[minptr];
        arr[minptr] = temp;
    }
    return arr;
}

console.log(selectionSort([99,44,6,2,1,5,63,87,283,4,0]));
