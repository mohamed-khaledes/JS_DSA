/*
# Tree
    A (tree data structure) is a hierarchical structure that is used to represent
    and organize data in a way that is easy to navigate and search. It is a
    collection of nodes that are connected by edges and has a hierarchical
    relationship between the nodes. 

    The topmost node of the tree is called the root, and the nodes below it are called
    the child nodes. Each node can have multiple child nodes, and these child nodes can
    also have their own child nodes, forming a recursive structure.

    This data structure is a specialized method to organize and store data in the
    computer to be used more effectively. It consists of a central node, structural
    nodes, and sub-nodes, which are connected via edges. We can also say that tree
    data structure has roots, branches, and leaves connected with one another.

***************************************************************************************
    (Basic Terminologies In Tree Data Structure:)
(Parent Node:) The node which is a predecessor of a node is called the parent node of that node. {B} is the parent node of {D, E}.
(Child Node: )The node which is the immediate successor of a node is called the child node of that node. Examples: {D, E} are the child nodes of {B}.
(Root Node:) The topmost node of a tree or the node which does not have any parent node is called the root node. {A} is the root node of the tree. A non-empty tree must contain exactly one root node and exactly one path from the root to all other nodes of the tree.
(Leaf Node or External Node:) The nodes which do not have any child nodes are called leaf nodes. {K, L, M, N, O, P} are the leaf nodes of the tree.
(Ancestor of a Node:) Any predecessor nodes on the path of the root to that node are called Ancestors of that node. {A,B} are the ancestor nodes of the node {E}
(Descendant:) Any successor node on the path from the leaf node to that node. {E,I} are the descendants of the node {B}.
(Sibling:) Children of the same parent node are called siblings. {D,E} are called siblings.
(Level of a node:) The count of edges on the path from the root node to that node. The root node has level 0.
(Internal node:) A node with at least one child is called Internal Node.
(Neighbour of a Node:) Parent or child nodes of that node are called neighbors of that node.
(Subtree:) Any node of the tree along with its descendant.

***************************************************************************************

    (types of tree data structures)
    (Binary tree:) In a binary tree, each node can have a maximum of two children
    linked to it. Some common types of binary trees include full binary trees,
    complete binary trees, balanced binary trees, and degenerate or pathological binary trees.

    (Ternary Tree:) A Ternary Tree is a tree data structure in which each node has at most three child nodes,
    usually distinguished as “left”, “mid” and “right”.

    (N-ary Tree or Generic Tree:) Generic trees are a collection of nodes where each node is a
    data structure that consists of records and a list of references to its children(duplicate references are not allowed).
    Unlike the linked list, each node stores the address of multiple nodes.

***************************************************************************************

(Basic Operation Of Tree Data Structure:)

Create – create a tree in the data structure.
Insert − Inserts data in a tree.
remove - delete data from the tree
Search − Searches specific data in a tree to check whether it is present or not.
Traversal:
1-Breadth first(BFS) (level order)
    print each level alone
2-Depth first (DFS)
    Preorder – perform Traveling a tree in a pre-order manner in the data structure. (Root,Left,Right)
    In order – perform Traveling a tree in an in-order manner.(Left,Root,Right)
    Post-order –perform Traveling a tree in a post-order manner.(Left,Right,Root)



(Why Tree is considered a non-linear data structure?)
The data in a tree are not stored in a sequential manner i.e.,
they are not stored linearly. Instead, they are arranged on multiple
levels or we can say it is a hierarchical structure. For this reason
, the tree is considered to be a non-linear data structure.

Need for Tree Data Structure
1. One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer: 
File System
2. Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays). 
3. Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists). 
4. Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on the number of nodes as nodes are linked using pointers.


(Application of Tree Data Structure:)
File System:  This allows for efficient navigation and organization of files.
Data Compression: Huffman coding is a popular technique for data compression that involves constructing a binary tree where the leaves represent characters and their frequency of occurrence. The resulting tree is used to encode the data in a way that minimizes the amount of storage required.
Compiler Design: In compiler design, a syntax tree is used to represent the structure of a program. 
Database Indexing: B-trees and other tree structures are used in database indexing to efficiently search for and retrieve data. 


(Advantages of Tree Data Structure:)
Tree offer Efficient Searching Depending on the type of tree, with average search times of O(log n) for balanced trees like AVL. 
Trees provide a hierarchical representation of data, making it easy to organize and navigate large amounts of information.
The recursive nature of trees makes them easy to traverse and manipulate using recursive algorithms.
To learn more about the advantages of Tree Data Structure, refer to this article.

(Disadvantages of Tree Data Structure:)
Unbalanced Trees, meaning that the height of the tree is skewed towards one side, which can lead to inefficient search times.
Trees demand more memory space requirements than some other data structures like arrays and linked lists, especially if the tree is very large.
The implementation and manipulation of trees can be complex and require a good understanding of the algorithms.


(Binary search tree (BST))
    -the value of each left node must be smaller than the parent node
    -the value of each right node must be greater than the parent node
    -Each node has at most two children

(Binary search tree operatoins)
    -insertion : to add a node to the tree
    -search : to find a node given its value
    -Depth first search(DFS) & Breadth first search(BFS) :to visit all nodes in the tree
    -Deletion: to remove a node given its value
            1-if the node is leave node. will remove it by make it equal null
            2-if the node has one child. will replace it with his child and then remove his child
            3-if the node has two child. will replace it with biggest child on his left and remove this child |OR| replace it with smallest child on his right and remove this child
*/


// Binary search tree implementation

// the node class
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary search tree class
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    //is empty method
    isEmpty(){
        return this.root === null;
    }
    // insert method
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    // insertNode method recursion
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right , newNode)
            }
        }
    }
    // search method
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    //Depth first search (preOrder) traversal {root,left,right}
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    //Depth first search (inOrder) traversal {left,root,right}
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    //Depth first search (postOrder) traversal {left,right,root}
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    //Breadth first search (BFS)
    levelOrder(){
        // use the optimize queue implementation
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    // minimum item in tree
    min(root){
        if(root.value === null){
            return false
        }else if(root.left === null){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    // maxmum item in tree
    max(root){
        if(root.value===null){
            return false;
        }else if(root.right === null){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    // delete item from the tree
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    //delete node
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root;
    }
}

const bst = new BinarySearchTree()
console.log("is tree empty? " + bst.isEmpty())

bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)
bst.insert(5)

console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,20))
console.log(bst.search(bst.root,30))
console.log(bst.search(bst.root,40))

console.log("*".repeat(20))
console.log("preOrder")
bst.preOrder(bst.root)
console.log("*".repeat(20))
console.log("inOrder")
bst.inOrder(bst.root)
console.log("*".repeat(20))
console.log("postOrder")
bst.postOrder(bst.root)
console.log("*".repeat(20))
console.log("level order")
bst.levelOrder()
console.log("*".repeat(20))
console.log("minimum item")
console.log(bst.min(bst.root))
console.log("*".repeat(20))
console.log("maxmum item")
console.log(bst.max(bst.root))
console.log("*".repeat(20))
bst.preOrder(bst.root)
bst.delete(5)
console.log("*".repeat(20))
bst.preOrder(bst.root)
