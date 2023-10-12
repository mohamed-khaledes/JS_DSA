/*
#problem statement 
In mathematics, the Cartesian Product of sets A and B is defined
as the set of all ordered pairs (x, y) such that x belongs to
A and y belongs to B. For example, if A = {1, 2} and B = {3, 4, 5},
then the Cartesian Product of A and B is 
{(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)}.
*/

function cartesianProduct(arr1,arr2){
    let output =[];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            output.push([arr1[i],arr2[j]])
        }
    }
    return output;
}
const arr1=[1,2]
const arr2=[3,4,5]
console.log(cartesianProduct(arr1,arr2))
// expected output = [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]

// Big-O = O(mn) > because the arrays are not equal in length