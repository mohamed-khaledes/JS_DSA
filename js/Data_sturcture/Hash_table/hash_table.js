/*
#Hash table

##Need for Hash data structure

Every day, the data on the internet is increasing multifold and it is always
a struggle to store this data efficiently. In day-to-day programming, this 
amount of data might not be that big, but still, it needs to be stored, accessed,
and processed easily and efficiently. A very common data structure that is used
for such a purpose is the Array data structure.

Now the question arises if Array was already there, what was the need for a new data structure!
The answer to this is in the word “efficiency“. Though storing in Array takes O(1) time,
searching in it takes at least O(log n) time. This time appears to be small, but for a
large data set, it can cause a lot of problems and this, in turn, makes the Array
data structure inefficient. 

So now we are looking for a data structure that can store the data and search
in it in constant time, i.e. in O(1) time. This is how Hashing data structure
came into play. With the introduction of the Hash data structure, it is now
possible to easily store data in constant time and retrieve them in constant time as well.
*******************************************
Components of Hashing
There are majorly three components of hashing:

Key: A Key can be anything string or integer which is fed as input in the hash function
the technique that determines an index or location for storage of an item in a data structure. 

Hash Function: The hash function receives the input key and returns the index of an element
in an array called a hash table. The index is known as the hash index.

Hash Table: Hash table is a data structure that maps keys to values using a special function called
a hash function. Hash stores the data in an associative manner in an array where each data value has its own unique index.

Hashing refers to the process of generating a fixed-size output from an input
of variable size using the mathematical formulas known as hash functions.
This technique determines an index or location for
the storage of an item in a data structure.
************
    How to resolve collisions? three methods are available:
    1-Resolving collisions by (Replacement)
    2-Resolving collisions by (Open Addressing)
    .Linear probing => index: h(key) = key % size
    .Quadratic probing => index: (index + i^2)%size   i means counter of collisions

    Open Hashing
    3-Resolving collisions by (Chanining)  index: h(key) = key % size
    by using linked list from the bocket

    index:
    h(num1) = num1 % num2 = num1    if the num1 less than num2
    h(num1) = num1 % num1 = 0    if the num1 equal  num2

    The rest of the division
    n1-(n1/n2)*n2
*/

/*
#Hash table
    A hash table , also known as hash map, is a data structure thas is to 
    store key-vlaue pairs

    Given a key, you can associate a value with key for very fast lookup

    Javascript's Object is a special implementation of the hash table data
    structure However, object class adds its own keys. keys that you input
    may conflict and overwrite the inherited default properties

    Maps which were intorduced in 2015 allow you to store key-vlaue pairs 

    writing your own hash table implementation is a very popular javascript
    interview question


    ## Hash table contd.
        we store the key value pairs in a fix sized array
        Arrays hav a numeric index

        How do we go from using a string as an index to number as an index?

        A hashing function accepts the string key, converts it into a hash 
        code using a defined logic and then maps it into a numeric index
        that is within the bounds of the array 

        usint the index, store the value

        The same hashing function is reused to retrieve the value given
        a key

        . set to store a key-vlaue pair
        . get to retrieve a value given its key
        . remove to delete a key value pair

    ### Hash table usage    
        Hash tables are typically implemented where constant time lookup
        and insertion are required

        Database indexing

        Caches
*/

// simple Hash table implementation
/*
class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i =0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key);
        this.table[index] = value;
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}
*/
// Hash table visualization handling collisions
class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i =0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    // set method
    set(key,value){
        const index = this.hash(key);
        // this.table[index] = value;
        const bucket = this.table[index];
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }
    // get method
    get(key){
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    // remove method
    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const hashtable = new HashTable(50)
hashtable.set("name","mohamed")
hashtable.set("parentName","khaled")
hashtable.set("age","20")
hashtable.display();
console.log("*".repeat(20))
console.log(hashtable.get("parentName"))
console.log("*".repeat(20))
hashtable.remove("parentName")
hashtable.display()
console.log("*".repeat(20))
// here we will see the collision
hashtable.set("mane","ali")
hashtable.display()