//For Loop:

let a = 6

function factorial(num){
    let fac = 1

    for (let index = 1; index <= num; index++) {
        
        fac = fac * index
    }
    return fac

}

console.log(factorial(a))