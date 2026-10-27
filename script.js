// Get saved expenses from localStorage
var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Add new expense
function addExpense(e) {
    e.preventDefault();

    var expense = {
        title: document.getElementById("title").value,
        amount: Number(document.getElementById("amount").value),
        category: document.getElementById("category").value,
        date: document.getElementById("date").value
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    e.target.reset();
    showExpenses();
}

// Show expenses and calculate total
function showExpenses() {
    var list = document.getElementById("expenseList");
    var total = 0;
    list.innerHTML = "";

    for (var i = 0; i < expenses.length; i++) {
        total = total + expenses[i].amount;

        list.innerHTML += `
            <tr>
                <td>${expenses[i].title}</td>
                <td>Rs. ${expenses[i].amount}</td>
                <td>${expenses[i].category}</td>
                <td>${expenses[i].date}</td>
                <td><button class="delete-btn" onclick="deleteExpense(${i})">Delete</button></td>
            </tr>
        `;
    }

    document.getElementById("total").innerText = total;
}

// Delete an expense
function deleteExpense(i) {
    expenses.splice(i, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    showExpenses();
}

// Display saved expenses when page opens
showExpenses();