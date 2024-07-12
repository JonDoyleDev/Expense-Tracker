// Feather

feather.replace()

// Pop-up

let expensePopup = document.getElementById("expense-popup");
let crossIcon = document.getElementById("cross");
let expenseTitle = document.getElementById("title");
let expenseAmount = document.getElementById("amount");
let expenseDate = document.getElementById("date");
let submit = document.getElementById("submit");

// Landing Page 

let expenseContainer = document.getElementById("expense-container");
let newExpense = document.getElementById("new-expense-button");
let totalAmount = document.getElementById("expense-total");
let expenseList = document.querySelector(".expense-list");

// Pop-up View

newExpense.addEventListener("click", function(){ 
    expensePopup.classList.remove("hide");
    expenseContainer.style.opacity = "0.3";
    expensePopup.classList.add("fade-in");
    setTimeout(() => {
        expensePopup.classList.remove('fade-in');
        expensePopup.classList.remove('fade-in');
      }, 1000);
})

crossIcon.addEventListener("click", function(){ 
    expensePopup.classList.add("hide");
    expenseContainer.style.opacity = "1";
})

// Form Functionality

let expenseForm = document.querySelector("form");

expenseForm.addEventListener("submit", function(event){ 
    event.preventDefault();

    let title = expenseTitle.value;
    let amount = expenseAmount.value;
    let rawDate = expenseDate.value;
    let formattedDate = moment(rawDate).format("MM/DD/YY");
    let expenseData = {
        title: title,
        amount: amount,
        date: formattedDate,
    };

    
let newExpenseItem = document.createElement("li");
newExpenseItem.classList.add("expense");

newExpenseItem.innerHTML = `
    <div class="expense-details">
        <p class="expense-title">${expenseData.title}</p>
        <p class="expense-date">Paid on: ${expenseData.date}</p>
    </div>
    <p class="expense-amount">- $${expenseData.amount}</p>
`;

expenseList.appendChild(newExpenseItem);
expenseForm.reset();
expensePopup.classList.add("hide");
expenseContainer.style.opacity = "1";

updateExpenseOverview(expenseData.amount);

newExpenseItem.classList.add('fade-in');
  setTimeout(() => {
    newExpenseItem.classList.remove('fade-in');
    newExpenseItem.classList.remove('fade-in');
  }, 1000);
})

emptyListMessage();

// UPDATE TOTAL

let total = 0; 
function updateExpenseOverview(amount) {
    total += parseFloat(amount);
    totalAmount.innerText = "$" + total.toFixed(2);
    totalAmount.classList.add('fade-in')
    setTimeout(() => {
        totalAmount.classList.remove('fade-in');
        totalAmount.classList.remove('fade-in');
      }, 1000);

}

function emptyListMessage() {
    let message = "";
    let messageNode = document.createElement("li");
    messageNode.classList.add("list-info");
    messageNode.textContent = message;
}
  


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden');
  
    const animateElements = () => {
      elements.forEach(element => {
        element.classList.remove('hidden');
        element.classList.add('fade-in');
      });
    };
  
    animateElements();
  });

