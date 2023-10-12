/*
## Set
    1-A set is a data structure that can hold a collection of values.
    the values however must be unique
    2-Set can contain a mix of different data types.you can store strings,
    booleans,numbers or even objects in the same set
    3-Sets are dynamically sized,You don't have to declare the size of set 
    before creating it
    4-Sets do not maintain an insertion order
    5-Sets are iterable .They can be used with a for of loop
*/
/*
    Set vs Arrays
    1-Arrays can contain duplicate values whereas Sets cannot
    2-Insertion order in maintained in arrays but in is not case with sets
    3-Searching and deleting an element in the set is faster compared to Arrays
*/

const set = new Set([1,2,3])

console.log(set.entries())
console.log(set.keys())
console.log(set.values())
set.add(4)
set.add(4) // will ignore it 
console.log(set.has(4)+" in the set")
set.delete(3)
console.log("size of the Set " + set.size)
set.clear()
for(const item of set){
    console.log(item)
}
