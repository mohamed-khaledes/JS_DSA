/*
1. Array
The most basic yet important data structure is the array.
It is a linear data structure. An array is a collection
of homogeneous data types where the elements are allocated
contiguous memory. Because of the contiguous allocation
of memory, any element of an array can be accessed in
constant time. Each array element has a corresponding
index number.
*/


    const arr = [1,2,3,"mohamed"]
    arr.push(4)
    arr.unshift(0)
    arr.pop()
    arr.shift()

    for(const item of arr){
        console.log(item)
    }

// map , filter, reduce,concat ,slice ,splice,


/*
Array -Big-o time complexity

    -insert/remove from end -O(1) = constant
    -insert/remove from beginning -O(n) = linear  لانك هتضطر لاعادة تعيين (index)  كل عنصر من العناصر
    -Access -O(1)
    -search -O(n)
    -Push/Pop -O(1)
    -Shift/unshift/concat/slice/splice -O(n)
    -ForEach/map/filter/reduce -O(n)
    */