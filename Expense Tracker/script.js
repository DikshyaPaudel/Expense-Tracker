window.addEventListener("load", () => {
  const fillForm = document.getElementById("fill-form");
  const name = document.getElementById("name-input");
  const combinedDateAmount = document.getElementById("combined-date-amount");
  const date = document.getElementById("date-input");
  const amount = document.getElementById("amount-input");

  fillForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //getting input values
    const taskName = name.value; //Or can also use: const name= document.getElementById('name-input).value (directly)
    const taskDate = date.value;
    const taskAmount = amount.value;
    //getting the html table
    // 0 = the first table
    const table = document.getElementsByTagName("table")[0];

    //add new empty row in the table

    //const newRow = table.insertRow(1); //top ma add hudai janxa in stack manner
    const newRow = table.insertRow(table.rows.length); //the end

    //add cells to the row
    const cell1 = newRow.insertCell(0); //inserting new cell into current row.
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    //add values to the cells
    cell1.innerHTML = taskName;
    cell2.innerHTML = taskDate;
    cell3.innerHTML = taskAmount;

    name.value = "";
    date.value = "";
    amount.value = "";
  });
});
