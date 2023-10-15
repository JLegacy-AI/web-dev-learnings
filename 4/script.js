var rowNumber = 2;
function insert_Row() {
  rowNumber++;
  const table = document.getElementById("sampleTable");
  //   Table Cells
  const cell1 = document.createElement("td");
  cell1.innerText = `Row${rowNumber} cell1`;
  const cell2 = document.createElement("td");
  cell2.innerText = `Row${rowNumber} cell2`;
  // Table Row
  const newRow = document.createElement("tr");
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  //Append Row
  table.appendChild(newRow);
}
