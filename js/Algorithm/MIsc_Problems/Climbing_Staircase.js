/*
#problem statement
    Given a staircase of "n" steps, count the number of distinct ways to
    climb to the top you can either climb 1 step or 2 steps at a time

    n1, climbingStaircase(1) =1              (1)
    n2, climbingStaircase(2) =2              (1,1) and (2)
    n3, climbingStaircase(3) =3              (1,1,1) (1,2) and (2,1)
    n4, climbingStaircase(4) =5              (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)

    such as fibonacci sequence => Dynamic Programming

*/
function climbingStaircase(n){
    noOfWays=[1,2]
    for(let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
    }
    return noOfWays[n - 1]
}
console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))

// Big-o = O(n)