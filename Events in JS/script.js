let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    //alert("Welcome")
    document.querySelector(".box").innerHTML = "Welcome Man!"
})

button.addEventListener("contextmenu",()=>{
    alert("Don't Right Click.")
})

document.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keycode)
})