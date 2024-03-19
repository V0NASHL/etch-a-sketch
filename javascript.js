const canvas = document.querySelector('.canvas');
const rows = document.getElementsByClassName("row");
const columns = document.getElementsByClassName("column");
const resizeBtn = document.querySelector(".resizeBtn");

let x = 16;
let changeColor = false;

resizeBtn.addEventListener("click", () => {
    let msg = prompt("Please enter a number between 1-100", "16");

    if (parseInt(msg) <= 100 && parseInt(msg) > 0) {
        canvas.replaceChildren();
        createGrid(parseInt(msg));
    }

    else if (parseInt(msg) > 100 || parseInt(msg) < 0){
        alert('Invalid Number');
    }

})

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

            newColmn.addEventListener('mousedown', () => {
                newColmn.style.backgroundColor = "black"
                changeColor = true;
            })

            newColmn.addEventListener('mouseup', () => {
                changeColor = false;
            })

            newColmn.addEventListener('mouseover', () =>{
                if (changeColor){
                    newColmn.style.backgroundColor = "black";
                }
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