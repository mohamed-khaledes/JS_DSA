/*
What is Algorithm?
Algorithm is defined as a process or set of well-defined
instructions that are typically used to solve a particular
group of problems or perform a specific type of calculation.
To explain in simpler terms, it is a set of operations performed
in a step-by-step manner to execute a task.
*/


/*
1. Learn about Complexities
Here comes one of the interesting and important topics. The primary motive to use DSA is to solve a problem effectively and efficiently. How can you decide if a program written by you is efficient or not? This is measured by complexities. Complexity is of two types:

Time Complexity:> Time complexity is used to measure the amount of time required to execute the code.
Space Complexity:> Space complexity means the amount of space required to execute successfully the functionalities of the code. 
You will also come across the term Auxiliary Space very commonly in DSA, which refers to the extra space used in the program other than the input data structure.
Both of the above complexities are measured with respect to the input parameters. But here arises a problem. The time required for executing a code depends on several factors, such as: 

1-The number of operations performed in the program, 
2-The speed of the device, and also 
3-The speed of data transfer if being executed on an online platform. 
So how can we determine which one is efficient? The answer is the use of asymptotic notation. 

"Asymptotic notation" is a mathematical tool that calculates the required time in terms of input size and does not require the execution of the code. 

It neglects the system-dependent constants and is related to only the number of modular operations being performed in the whole program. The following 3 asymptotic notations are mostly used to represent the time complexity of algorithms:

1-Big-O Notation (Ο) – Big-O notation specifically describes the worst-case scenario.
2-Omega Notation (Ω) – Omega(Ω) notation specifically describes the best-case scenario.
3-Theta Notation (θ) – This notation represents the average complexity of an algorithm.

    Big O           Notation	Type	Computations for 10 elements	Computations for 100 elements	Computations for 1000 elements
    O(1)	        Constant	1	1	1
    O(log N)	    Logarithmic	3	6	9
    O(N)	        Linear	10	100	1000
    O(N log N)	    n log(n)	30	600	9000
    O(N^2)	        Quadratic	100	10000	1000000
    O(N^3)          Cubic
    O(2^N)	        Exponential	1024	1.26e+29	1.07e+301
    O(N!)	        Factorial	3628800	9.3e+157	4.02e+2567

    	    Access	    Search	    Insertion	    Deletion	Comments
    object	  1	        n	            1	        1

    "Data Structure Operations Complexity"

    Data Structure	        Access	    Search	    Insertion	    Deletion	Comments
    Array	                1	        n	            1	        1	        but if you deletion or insertion from begining become O(n)
    Array	                1	        n	            n	        n	
    Stack	                n	        n	            1	        1	
    Queue	                n	        n	            1	        1	
    Linked List	            n	        n	            1	        n	
    Hash Table	            -	        n	            n	        n	           In case of perfect hash function costs would be O(1)
    Binary Search Tree	    n	        n	            n	        n	           In case of balanced tree costs would be O(log(n))
    B-Tree	                log(n)	    log(n)	        log(n)	log(n)	
    Red-Black Tree	        log(n)	    log(n)	        log(n)	log(n)	
    AVL Tree	            log(n)	    log(n)	        log(n)	log(n)	
    Bloom Filter            -       	1	f           1	        -	           False positives are possible while searching

Array operations
Push/pop > O(1)
Shift/unshift/concat/slice/splice > O(n)
forEach/map/filter/reduce > O(n)


Array Sorting Algorithms Complexity

Name	            Best    	Average     	Worst	    Memory	Stable	Comments

Bubble sort	        n	        n2	            n2	        1	Yes	
Insertion sort	    n	        n2	            n2	        1	Yes	
Selection sort	    n2	        n2	            n2	        1	No	
Heap sort	        n           log(n)	        n log(n)	n log(n)	1	No	
Merge sort	        n           log(n)	        n log(n)	n log(n)	n	Yes	
Quick sort	        n           log(n)	        n log(n)	n2	log(n)	No	Quicksort is usually done in-place with O(log(n)) stack space
Shell sort	        n           log(n)	        depends on gap sequence	n (log(n))2	1	No	
Counting sort	    n + r	    n + r	        n + r	    n + r	Yes	r - biggest number in array
Radix sort	        n * k	    n * k	        n * k	    n + k	Yes	k - length of longest key


    Big O Guide
    Calculation not dependent on input size O(1)
    1 loop > O(n)
    2 nested loop > O(n^2)
    3 Input size reduced by half > O(logn)


    Types of Algorithms:
    There are several types of algorithms available. Some important algorithms are:

1. {Brute Force Algorithm}: It is the simplest approach for a problem. A brute force algorithm is the first approach that comes to finding when we see a problem.

2. {Recursive Algorithm}: A recursive algorithm is based on recursion. In this case, a problem is broken into several sub-parts and called the same function again and again.

3. {Backtracking Algorithm}: The backtracking algorithm basically builds the solution by searching among all possible solutions. Using this algorithm, we keep on building the solution following criteria. Whenever a solution fails we trace back to the failure point and build on the next solution and continue this process till we find the solution or all possible solutions are looked after.

4. {Searching Algorithm}: Searching algorithms are the ones that are used for searching elements or groups of elements from a particular data structure. They can be of different types based on their approach or the data structure in which the element should be found.

5. {Sorting Algorithm}: Sorting is arranging a group of data in a particular manner according to the requirement. The algorithms which help in performing this function are called sorting algorithms. Generally sorting algorithms are used to sort groups of data in an increasing or decreasing manner.

6. {Hashing Algorithm}: Hashing algorithms work similarly to the searching algorithm. But they contain an index with a key ID. In hashing, a key is assigned to specific data.

7. {Divide and Conquer Algorithm}: This algorithm breaks a problem into sub-problems, solves a single sub-problem and merges the solutions together to get the final solution. It consists of the following three steps:

    Divide
    Solve
    Combine
8. {Greedy Algorithm}: In this type of algorithm the solution is built part by part. The solution of the next part is built based on the immediate benefit of the next part. The one solution giving the most benefit will be chosen as the solution for the next part.

9. {Dynamic Programming Algorithm}: This algorithm uses the concept of using the already found solution to avoid repetitive calculation of the same part of the problem. It divides the problem into smaller overlapping subproblems and solves them.

10. {Randomized Algorithm}: In the randomized algorithm we use a random number so it gives immediate benefit. The random number helps in deciding the expected outcome.


*/



function divisible(num){
    if ( num % 2 == 0){
        return true; //number is divisible 3
      } else { 
        return false; //number is NOT divisible by 3
      }
}
console.log(divisible(13))

function swapValue(){
    let x =10;
let y = 5;
console.log(x,y)
x = x + y;
y = x - y;
x = x - y;
console.log(x,y)
}
swapValue();
console.log("*".repeat(35));
//************************************************ */

// sort array from small to big or revese
function minValue(array){
    let min = array[0];
    
    for(let i = 0; i<array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}
console.log(minValue([2,8,7,6,5,9,1,0]))
console.log("*".repeat(35));
//************************************************ */

