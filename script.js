function pixels (number)
{
    
    const board = document.querySelector(".board");

board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
board.style.gridTemplateRows = `repeat(${number}, 1fr)`
let total = number * number 

for (i =0; i < total; i++)
{
    const box = document.createElement('box')
    box.id = 'box'
    box.style.backgroundColor = "green"
    board.insertAdjacentElement("beforeend", box)
}

}




