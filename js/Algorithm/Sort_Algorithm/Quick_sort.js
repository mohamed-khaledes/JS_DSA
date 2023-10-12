// quick sort 

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    // the array of left her element smaller than our pivot
    let left = [];
    // the array of right her element begger than our pivot
    let right = [];
    // the element we sorting dependent on him
    let pivot = arr[arr.length - 1];

    for(let i=0; i<arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}
const arr = [20,40,30,50,60,10];
console.log(quickSort(arr))

// Big(o) => O(n^2)