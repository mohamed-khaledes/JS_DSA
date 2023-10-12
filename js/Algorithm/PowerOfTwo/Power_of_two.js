// Power Of Two
/*
"porblem" - give a positive integer 'n', determine if the number
    is a power of 2 or not An integer is a power of two
    if there exists an integar 'x' such that n === 2^x

    ispoweroftwo(1) = true (2^0)
    ispoweroftwo(2) = true (2^1)
    ispoweroftwo(5) = false
*/
function IsPowerOfTwo(n){
    if (n<1){
        return false
    }
    while(n>1){
        if(n % 2 !==0){
            return false
        }
        n = n/2
    }
    return true
}
// Big-O == O(logn)
console.log(IsPowerOfTwo(1)) // true
console.log(IsPowerOfTwo(8)) // true
console.log(IsPowerOfTwo(5)) // false

// other solution
function IsPowerOfTwoBitWise(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) === 0
}