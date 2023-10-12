/*
Insertion sort is a simple sorting algorithm that works similar
to the way you sort playing cards in your hands. The array is
virtually split into a sorted and an unsorted part.
Values from the unsorted part are picked and placed at
the correct position in the sorted part.
*/
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){ // 0, 1, 2,3, 4
        let numberToInsert = arr[i]  // -6,-2,4,8,20
        let j = i -1; // -1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j +1] = arr[j]
            j = j -1
        }
        arr[j+1] = numberToInsert // 20
    }
}

let arr =[8,20,-2,4,-6]
insertionSort(arr);
console.log(arr);
// Big-o => O(n^2)