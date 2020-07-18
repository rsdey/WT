
  var rIndex,
  table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
  var isEmpty = false,
    name = document.getElementById("name").value,
    id = document.getElementById("id").value,
    qty = document.getElementById("quantity").value,
    category = document.getElementById("category"),
    supplier = document.getElementById("supplier").value;

  if (name === "") {
    alert("Product name field cannot be empty");
    isEmpty = true;
  } else if (id === "") {
    alert("ID field cannot be empty");
    isEmpty = true;
  } else if (qty === "") {
    alert("Quantity field cannot be empty");
    isEmpty = true;
  } else if (supplier === "") {
    alert("Supplier field cannot be empty");
    isEmpty = true;
  }
  return isEmpty;
}

//add a row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  var table = document.getElementById("table");
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),

      name = document.getElementById("name").value,
      id = document.getElementById("id").value,
      qty = document.getElementById("quantity").value,
      category = document.getElementById("category"),
      supplier = document.getElementById("supplier").value;

    cell1.innerHTML = name;
    cell2.innerHTML = id;
    cell3.innerHTML = qty;
    cell4.innerHTML = category;
    cell5.innerHTML = supplier;
    // call the function to set the event to the new row
    selectedRowToInput();
  }
}

// display selected row data into input text
function selectedRowToInput() {

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("name").value = this.cells[0].innerHTML;
      document.getElementById("id").value = this.cells[1].innerHTML;
      document.getElementById("quantity").value = this.cells[2].innerHTML;
      document.getElementById("category").value = this.cells[3].innerHTML;
      document.getElementById("supplier").value = this.cells[4].innerHTML;
    };
  }
}
selectedRowToInput();
 