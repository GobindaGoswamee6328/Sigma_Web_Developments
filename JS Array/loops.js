//For Each Loops:
let a = [2,3,4,5,6]

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})


//For In Loops:
let obj = {
    x : 3,
    y : 4,
    z : 5 
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

//For Of Loops:
let y = [1,2,3,4,5]

for (const iterator of y) {
    console.log(iterator)
}

for (const value of y) {
    console.log(value)
}

