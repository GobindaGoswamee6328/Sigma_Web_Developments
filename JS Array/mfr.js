//Map:
let a = [2,3,4,5,7]
let b = []

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    b.push(element**2)
}

console.log(b)

//Filter:
let x = [3,5,6,2,1]
const greaterThanthree = (e)=>{
    if(e>3){
        return true
    }
    else{
        return false
    }
}
console.log(x.filter(greaterThanthree))


//Reduce:
let y = [1,2,3,4,5,6]

const reduce = (a,b)=>{
    return a+b
}
console.log(y.reduce(reduce))

//Array Form:
z = Array.from("Hello")
console.log(z)