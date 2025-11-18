// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addEmployeeForm');
const employeeTable = document.getElementById('employees').getElementsByTagName('tbody')[0];

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;
empCountDisplay = document.getElementById('empCount');
empCountDisplay.textContent = `Employees (${empCount})`;

// ADD EMPLOYEE
// Upon submission, the form should completely clear itself of the entered values.
// Upon submission, the user’s cursor should immediately return to the Employee ID field.
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const empID = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const idCell = row.insertCell();
    const nameCell = row.insertCell();
    const extensionCell = row.insertCell();
    const emailCell = row.insertCell();
    const departmentCell = row.insertCell();
    const deleteCell = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(empID));
    nameCell.appendChild(document.createTextNode(name));
    extensionCell.appendChild(document.createTextNode(extension));
    emailCell.appendChild(document.createTextNode(email));
    departmentCell.appendChild(document.createTextNode(department));
    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('X'));
    deleteButton.className = 'delete-btn';
    deleteCell.appendChild(deleteButton);
    // RESET THE FORM
    addForm.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++;
    empCountDisplay.textContent = `Employees (${empCount})`;
})


// DELETE EMPLOYEE
// You don’t need to check to see if the .delete class exists here like you did in Lab 9.
// Confirm the deletion to the user. If the user clicks OK, the row should be deleted.
// Use the .deleteRow() method of the table to delete the row. 
// This method will accept the rowIndex for the row you want to select. 
// You’ll need to select the <tr> tag that the delete button exists within. 
// Think about how you will accomplish this. 
// The code to delete the selected row from the table will look something like this (replace path-to-tr-tag with DOM properties for selecting the <tr> tag):
// employeeTable.deleteRow(path-to-tr-tag.rowIndex)
employeeTable.addEventListener('click', (e) => {
    // CHECK IF THE CLICKED ELEMENT IS THE DELETE BUTTON
    if (e.target && e.target.classList.contains('delete-btn')) {
        // CONFIRM THE DELETE ACTION
        if (confirm('Are you sure you want to delete this employee?')) {
            // Get the <tr> element that contains the delete button
            const row = e.target.closest('tr');
            
            // Delete the row using the table's deleteRow method
            employeeTable.deleteRow(row.rowIndex);
            
            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            empCount--;
            empCountDisplay.textContent = `Employees (${empCount})`;
        }
    }
});
