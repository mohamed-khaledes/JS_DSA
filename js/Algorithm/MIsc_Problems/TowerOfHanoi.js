function TowerOfHanoi(n,fromRod,toRod,usingRod){
    if(n===1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    TowerOfHanoi(n-1,fromRod,usingRod,toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    TowerOfHanoi(n-1,usingRod,toRod,fromRod)
}
TowerOfHanoi(3,"A","c","B")