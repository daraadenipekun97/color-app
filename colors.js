
let displayjs = document.getElementById("display");
let displayjs2 = document.getElementById("textdisplay")
let btnjs = document.getElementById("btn");
btnjs.addEventListener("click", changeColor)
function changeColor(e) {
    e.preventDefault();



    let color = ['blue', 'red', 'pink', 'yellow', 'grey', 'orange'];
    let x = Math.floor(Math.random() * color.length);
    let newColor = color[x];
    displayjs2.innerHTML = `${newColor}`
    if (newColor == "blue") {
        displayjs2.innerHTML = displayjs.style.backgroundColor = "blue";
    }
     else if (newColor == "red") {
        displayjs2.innerHTML = displayjs.style.backgroundColor = "red";
    }
     else if (newColor == "pink") {
        displayjs2.innerHTML = displayjs.style.backgroundColor = "pink";
    }
    else if (newColor == "yellow") {
        displayjs2.innerHTML = displayjs.style.backgroundColor = "yellow";
    }
    else if (newColor == "grey") {
        displayjs2.innerHTML = displayjs.style.backgroundColor = "grey";
    }
    else if (newColor == "orange") {
        displayjs2.innerHTML = displayjs.style.backgroundColor = "orange";
    }

}


