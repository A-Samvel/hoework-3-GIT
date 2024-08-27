function findIntersection(arr1 = [], arr2 = []) {
    return arr1.filter((item)=>{
        for(let value of arr2){
            if(item === value) return item
        }
    })
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]))
console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"]))
console.log(findIntersection([7, 8, 9], [9, 10, 11]))