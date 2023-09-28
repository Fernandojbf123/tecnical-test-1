//construye un prototype que permita aplanar un array

Array.prototype.flatten = function () {
    //tu coódigo aca
    let result = [];

    for (let i = 0; i < this.length; i++){
        if(Array.isArray(this[i])){
            const recursionResult = this[i].flatten();
            result.push(...recursionResult)
        }
        else {
            result.push(this[i])
        }
    }
    console.log(result)
    return result
    
}

const arr = [[1,[2,[3]],[[4]]],5,6]
arr.flatten()

//[1,2,3].flatten() // [1,2,3]
// [[1,2],3,4].flatten() //[1,2,3,4]
// [[1,2],[3,4],5,6].flatten() //[1,2,3,4,5,6]

console.log(arr.flat(3))
