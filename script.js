


function pixels (number, color)
{
    
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
let marker = document.querySelector(".marker")
let eraser = document.querySelector(".erase")
let randomColorButton = document.querySelector(".color")
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
board.style.gridTemplateRows = `repeat(${number}, 1fr)`
let total = number * number 

for (i =0; i < total; i++)
{
    let box = document.createElement('div')
    box.id = 'box'


    marker.addEventListener("click", function () {
        box.addEventListener("mouseover", function (){
            box.style.backgroundColor = "black"
        })
    })

    eraser.addEventListener("click", function () {
        box.addEventListener("mouseover", function (){
            box.style.backgroundColor = "white"
        })
    })

    randomColorButton.addEventListener("click", function () {
        box.addEventListener("mouseover", function (){
            const rgbColor = RandomRGB();
            box.style.backgroundColor = rgbColor
        })
    })
    box.style.backgroundColor = color
    board.insertAdjacentElement("beforeend", box)
}

}

pixels(16, "white")



const pixelInput = document.querySelector(".type");
const pixelButton = document.querySelector(".value");
const anyColor = document.querySelector(".anyColor");


pixelButton.addEventListener("click", function () {
    const number = parseInt(pixelInput.value, 10);

    if (number >= 2 && number <= 100) {
        const color = anyColor.value; 
        pixels(number, color);
    } else {
        alert("Invalid input. Please enter a number between 2 and 100.");
    }
});

 const reset = document.querySelector(".reset")
 

 reset.addEventListener("click", ()=>{

    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div")
    const color = "white"
    anyColor.value = ""
    pixelInput.value = 16
    const number = 16
    pixels(number, color);
    squares.forEach((div) => (div.style.backgroundColor = "white"))
 })


 function RandomRGB() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}


