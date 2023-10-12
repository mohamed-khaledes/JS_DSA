/*
#Map
    1-A map is an unordered collection of key-value pairs. Both keys and
    values can be of any data type

    2-To retrieve a value, you can use the corresponding key
    
    3-Maps are iterable .They can be used with a for of loop
*/

/*
    Object vs Map 
    1-Objects are unordered whereas maps are ordered
    
    2-Keys in objects can be string or symbol type whereas maps,they can
    be of any type
    
    3-An object has a prototype and may contain a few default keys which may 
    collide with your own keys if you're nor carful, A map on the other 
    hand does not contain any keys by default 
    
    4-Objects are not iterable where as maps are iterables
    
    5-The number of items in an object must be determind manually where as
    it is readily available with the size property in a map
    
    6-Apart from storing data.you can attach functionality to an object
    whereas maps are restricted to just storing data
*/

const map = new Map([["a",1],["b",2]])
map.set("c",3)
console.log(map.get("c"))
console.log("size of the map "+map.size)
console.log(map.has("b"))
console.log(map.entries())
console.log(map.keys())
console.log(map.values())
map.delete("b")
// map.clear()
for(const [key,value] of map){
    console.log(`${key}:${value}`)
}