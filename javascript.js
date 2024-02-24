const canvas = document.querySelector('.canvas');
const rows = document.getElementsByClassName("row");
const columns = document.getElementsByClassName("column");
const resizeBtn = document.querySelector(".resizeBtn");

let x = 16;

resizeBtn.addEventListener("click", () => {
    do {
        x = prompt("What size would you like the grid to be?");
    }while(x < 16 && n >90);

    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    
    createGrid(x);
})

function changeSize(){
    let num = prompt("What size would you like the grid to be?");

    if (num <= 100){
        createGrid(num)
    }
    
    if (num <= 100){
        
    }
}

function createRow(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        canvas.appendChild(row);
    }
}

function createColumn(colmnNum) {
    for (let i = 0; i < rows.length; i++) {
        for ( j = 0; j < colmnNum; j++) {
            let newColmn = document.createElement("div");
            newColmn.classList.add("column");
            newColmn.style.backgroundColor = "white";

            newColmn.addEventListener('mouseover', e=>{
            newColmn.style.backgroundColor = "black";
        })

            rows[i].appendChild(newColmn);
        }
    }
}

function createGrid(gridNum){
    createRow(gridNum);
    createColumn(gridNum);
}

createGrid(x);