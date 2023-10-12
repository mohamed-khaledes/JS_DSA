/*
"problem" give a natural number 'n',determine if the number
    is prime or not 
    A prime nubmber greater than 1 that is not a product
    of two smaller natural numbers.
    --isPrime(5) = true (1*5 or 5*1)
    --isPrime(4) = false (1*4 or 2*2 or 4*1)
*/

function isprimeNumber(n){
    if(n<2){
        return false
    }else{
        for(let i=2; i<= Math.sqrt(n); i++){
            if(n % i == 0){
                return false
            }
        }
    }
    return true
}
// Big O = O(sqrt(n))
console.log(isprimeNumber(5)) // true
console.log(isprimeNumber(4)) // false