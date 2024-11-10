console.log("Good Morning")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("Random Number Not Avilable")
    } else {
        setTimeout(() => {
            console.log("Yes! I am Done.")
            resolve("Gobinda")
        }, 3000)
    }

})

prom1.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})