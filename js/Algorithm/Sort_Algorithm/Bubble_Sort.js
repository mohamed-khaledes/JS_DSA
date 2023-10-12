/*
    Bubble Sort example
    [-6 20 8 -2 4]
    [-6 20 8 -2 4] > [-6 8 20 -2 4] swap since 20 > 8 
    [-6 8 20 -2 4] > [-6 8 -2 20 4] swap since 20 > 8 
    [-6 8 -2 20 4] > [-6 8 -2 4 20] swap since 20 > 8 
    and repeat that event take the solution
*/

function BubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0; i<arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                let temp =arr[i];
                arr[i] = arr[i +1]
                arr[i+1] = temp
                swapped = true;
            }
        }
    }while(swapped)
}

arr = [-6,20,8,-2,4]
BubbleSort(arr)
console.log(arr)