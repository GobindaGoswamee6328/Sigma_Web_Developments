console.log("Hello")

//let boxes = document.getElementsByClassName("box")
//console.log(boxes)
//
//boxes[2].style.backgroundColor = "Red"

//document.getElementById("blackbox").style.backgroundColor = "Green"

//document.querySelector(".box").style.backgroundColor = "Yellow"

document.querySelectorAll(".box").forEach (e =>  {
    e.style.backgroundColor = "Green"

})