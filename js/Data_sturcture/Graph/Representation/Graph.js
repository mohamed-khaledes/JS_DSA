/*
Tree v/s Graph
Trees are the restricted types of graphs, just with some more rules.
Every tree will always be a graph but not all graphs will be trees.
Linked List, Trees, and Heaps all are special cases of graphs.



#Representation of Graphs
There are two ways to store a graph:

-Adjacency Matrix
-Adjacency List

.Adjacency Matrix
In this method, the graph is stored in the form of the 2D matrix where rows and columns denote vertices.
Each entry in the matrix represents the weight of the edge between those vertices. 


.Adjacency List
This graph is represented as a collection of linked lists.
There is an array of pointer which points to the edges connected to that vertex. 


#Comparison between Adjacency Matrix and Adjacency List
When the graph contains a large number of edges then it is good to store it as a matrix because only
some entries in the matrix will be empty. An algorithm such as Prim’s and Dijkstra adjacency matrix is used to have less complexity.


#Basic Operations on Graphs
Below are the basic operations on the graph:

*Insertion of Nodes/Edges in the graph – Insert a node into the graph.
*Deletion of Nodes/Edges in the graph – Delete a node from the graph.
*Searching on Graphs – Search an entity in the graph.
*Traversal of Graphs – Traversing all the nodes in the graph.



#Usage of graphs
Maps can be represented using graphs and then can be used by computers to provide various services like the shortest path between two cities.
When various tasks depend on each other then this situation can be represented using a Directed Acyclic graph and we can find the order in which tasks can be performed using topological sort.
State Transition Diagram represents what can be the legal moves from current states. In-game of tic tac toe this can be used.



#Following are the real-life applications:
-Graph data structures can be used to represent the interactions between players on a team, such as passes, shots, and tackles. Analyzing these interactions can provide insights into team dynamics and areas for improvement.
-Commonly used to represent social networks, such as networks of friends on social media.
-Graphs can be used to represent the topology of computer networks, such as the connections between routers and switches.
-Graphs are used to represent the connections between different places in a transportation network, such as roads and airports.
-Neural Networks: Vertices represent neurons and edges represent the synapses between them. Neural networks are used to understand how our brain works and how connections change when we learn. The human brain has about 10^11 neurons and close to 10^15 synapses.
-Compilers: Graphs are used extensively in compilers. They can be used for type inference, for so-called data flow analysis, register allocation, and many other purposes. They are also used in specialized compilers, such as query optimization in database languages.
-Robot planning: Vertices represent states the robot can be in and the edges the possible transitions between the states. Such graph plans are used, for example, in planning paths for autonomous vehicles.


#Advantages:
-Graphs are a versatile data structure that can be used to represent a wide range of relationships and data structures.
-They can be used to model and solve a wide range of problems, including pathfinding, data clustering, network analysis, and machine learning.
-Graph algorithms are often very efficient and can be used to solve complex problems quickly and effectively.
-Graphs can be used to represent complex data structures in a simple and intuitive way, making them easier to understand and analyze.

#Disadvantages:
-Graphs can be complex and difficult to understand, especially for people who are not familiar with graph theory or related algorithms.
-Creating and manipulating graphs can be computationally expensive, especially for very large or complex graphs.
-Graph algorithms can be difficult to design and implement correctly, and can be prone to bugs and errors.
-Graphs can be difficult to visualize and analyze, especially for very large or complex graphs, which can make it challenging to extract meaningful insights from the data.
*/



// representation

// 1- Adjacency Matrix of a Graph
/*
    A    B    C
A   0    1    0
B   1    0    0
C   1    0    0
*/
const matrix = [
    [0,1,0],
    [1,0,0],
    [1,0,1]
]
console.log(matrix[0][1])

// 2- Adjacency List of a Graph
const list = {
    "A":["B"],
    "B":["A","C"],
    "C":["B"]
}
console.log(list["A"])

//representation add vertex & add Edge

// undirected graph
class Graph{
    constructor(){
        this.adjacencyList ={}
    }
    // add vertex
    addVertex(vertex){
        // sure is teh adjacencyList don't have an vertex or no
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    // remove vertex
    removeVertex(vertex){
        // make sure if we have this vertex or no
        if(!this.adjacencyList[vertex]){
            return
        }
        // loop on all of this vertex edges to remove all of relatoins between this  vertex and other vetexes
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex , adjacentVertex)
        }
        // delete from class
        delete this.adjacencyList[vertex]
    }
    // add Edge
    addEdge(vertex1,vertex2){
        // make sure if the vertexes defined or no
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    // remove Edge
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    // display the graph
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +" >> "+ [...this.adjacencyList[vertex]])
        }
    }
    // has Edge 
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","C")
console.log(graph.hasEdge("A","B"))
console.log(graph.hasEdge("A","C"))
graph.removeEdge("A","B")
graph.removeVertex("C")
graph.display()



// in  vs  of in javascript loops

let list22 = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

// EXAMPLE 2
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}