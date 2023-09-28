//creat a map prototype for arrays

Array.prototype.myMap = function (cb){
    //tu código acá
    let result = []
    for(let i = 0; i<this.length; i++){
        cb(this[i])
        result.push(cb(this[i]))
    }
    return result
}

const arr = [1,2,3].myMap(console.log)
console.log(arr)