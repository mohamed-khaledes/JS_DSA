/*
# merge sort algorithm
    [-6,20,8,-2,4]
    sort this array using mege sort algorithm
    [-6,20],[8,-2,4]
    [-6] [20] [8] [-2,4]

    [-6] [20] [8] [-2],[4]

    // first comparison
    // lets compare every first element in arrrys
    [-6] [20] => [] left & right are not empty. -6<20
    [] [20] => [-6] 
    [] [] => [-6,20] 

    [-6,20] [8] [-2,4]

    [8] [-2,4] => [] left & right are not empty -2<8
    [8] [4] => [-2]  left & right are not empty 4<8
    [8] [] => [-2,4] right is empty push left array to temp array
    [] []  => [-2,4,8]

    [-6,20],[-2,4,8]
    [-6,20] [-2,4,8] => [] left & right are not empty & -6<-2
    [20] [-2,4,8] => [-6]  left & right are not empty & -2<20
    [20] [4,8] => [-6,-2]  left & right are not empty & 4<20
    [20] [8] => [-6,-2,4]  left & right are not empty & 8<20
    [20] [] => [-6,-2,4,8]  the right array is empty push left array to temp array 
    [] [] => [-6,-2,4,8,20]  
*/
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    let sortedArr =[];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}
const arr =[-6,20,8,-2,4]
console.log(mergeSort(arr))

// Big-O = o(nlog(n))