console.log("Hello Everyone")
console.log("Myself Gobinda")

setTimeout(()=>{
    console.log("Show The Timeout")
},0)

setTimeout(()=>{
    console.log("Show The Timeout2")
},0)

console.log("GoodBye!")


//Call Back:
const xy = () => {
  console.log("Welcome!")
}

const cn = () => {
  console.log("Excused")
}

const fn = () => {
  console.log("Good Evening")
}

const callback = (arg) => {
  console.log(arg)
  fn()
  cn()
  xy()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Gobinda",fn,cn,xy)
    document.head.append(sc)
}

loadScript("sha512-UOoJElONeUNzQbbKQbjldDf9MwOHqxNz49NNJJ1d90yp+X9edsHyJoAs6O4K19CZGaIdjI5ohK+O2y5lBTW6uQ==",callback)


