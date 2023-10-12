/*
    proplem: Give a number 'n' , find the nth element of the fibonaccis
        sequence in mathemaics , the fibonacci sequence is a sequence in 
        which each number is the sum of the two preceding ones.

    the first two numbers in the sequence are 0 and 1 (0,1,1,2,3,5,8)
    recursiveFibonacci(0) =(0)
    recursiveFibonacci(1) =(1)
    recursiveFibonacci(6) =(8)

    tips for recursive solutions
        figure out how to break down the problem into smaller versions of 
        the same problem identify the base case for recursion
*/

// f(n) = f(n-1) + f(n-2)

function recursiveFibonacci(n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
//Big-O = O(2^n) Exponential 
console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8