// funtion for randomly changing border & heading colour after 1 sec
function borderCol(){

    let watchborCol= document.querySelector("#stopW")
    let headColor = document.querySelector("#mainHead")
    let colour = "rgb("+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+","+Math.floor(Math.random()*257)+")"
    watchborCol.style.borderColor=colour
    headColor.style.color=colour

}
setInterval(borderCol,1000)


