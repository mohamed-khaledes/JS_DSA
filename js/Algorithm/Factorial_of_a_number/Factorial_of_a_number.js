/*
"problem" give an intger 'n' , find the factorial of that number
    in mathematics, the factorial of a  non-negative 'n' ,denoted n! , is
    the product of all positive integers less than or equal to 'n'
    --factorial of zero is 1
    --factorial(4) = 4*3*2*1 = 24
    --factorial(5) = 5*4*3*2*1 = 120
*/

function factorial(n){
    let output=1;
    if(n == 0 || n == 1){
        return output=1;
    }
    for(let i=n; i>0; i--){
        output = output * i;
    }
    return output;
}
// Big-o = O(n)
console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120