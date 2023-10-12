/*
    "problem = give an intger 'n' , find the factoial of that integer"
    the factorial of a non-negative integer 'n' , denoted n! , is the 
    product of all positive integers less
    than or equal to 'n'

    factorial of zero is 1
    factorial(4) = 4*3*2*1 = 24
    factorial(5) = 5*4*3*2*1 =120
    
    5! = 5*4*3*2*1  = 5*4!
    4! = 4*3*2*1  = 4*3!
    3! = 3*2*1  = 3*2!
    2! = 2*1  = 2*1!
    1! = 1*1  = 1*0!
    0! = 1
    n! =n*(n-1)!
*/

function RecursiveFactorial(n){
    if(n === 0) {
        return 1;
    }
    return n * RecursiveFactorial(n-1)
}
// Big-O =O(n) linear
console.log(RecursiveFactorial(1)) // 1
console.log(RecursiveFactorial(4)) // 24
console.log(RecursiveFactorial(5)) // 120