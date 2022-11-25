let sheetDB = [];

for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < columns; j++) {
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "Roboto",
            fontSize: "14",
            fontColor: "#000000",
            BGcolor: "#000000", //default value just for indication purpose

        }
        sheetRow.push(cellProp);
    }

    sheetDB.push(sheetRow);
}


//selectors for cell properties

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let fontColor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".background-color-prop");
let alignment = document.querySelector(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let righAlign = alignment[2];