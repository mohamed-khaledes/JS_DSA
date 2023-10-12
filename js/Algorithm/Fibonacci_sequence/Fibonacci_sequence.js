/*
    Fibonacci sequence
    "porblem" Give a number 'n' , find the first 'n' elements of the 
    Fibonacci seqence 


    In mathematics , the Fibonacci sequence in which each number is the sum of
    the two priceding onec.

    the first two numbers in the sequence are 0 and 1
    fibonacci(2) = [0,1]
    fibonacci(3) = [0,1,1]
*/

function fibonacci(n){
    fib = [0,1]
    if(n<=1){
        return n;
    }else{
        for(let i =2; i<n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib
    }
}
// Big-o = O(n)
console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]