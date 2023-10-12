/*

*/

const object ={
    name:"mohamed",
    age:20,
    "key-three":true,
    sayName:function(){
        console.log(this.name)
    }
}
object.parent="khaled"
delete object.parent
console.log(object.name)
console.log(object.age)
console.log(object["age"])
console.log(object["key-three"])
console.log(object)
object.sayName()

/*
Object -Big-O time complexity
    Insert - O(1)
    Remove - O(1)
    Access - O(1)
    Search - O(n)
    Object.keys() - O(n)
    Object.values - O(n)
    Object.entries - O(n)
*/