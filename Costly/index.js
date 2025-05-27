
// initializes balance
const balanceShown = document.getElementById('balanceShown');
let balance;

// fetches the balance from the JSON file
function getBalance(){
fetch("user.json") // GET is already the default method set

    .then(response => response.json())

    .then(value => {
        balance=value.balance;
        refresh();
    })

    .catch(error => console.error(error));

}

getBalance();

// FUNCTIONS

const logIncome = () => {
    balance+=10;
    console.log(`Your new balance is ${balance}`);
    refresh();
}

const logExpense = () => {
    balance-=10;
    console.log(`Your new balance is ${balance}`);
    refresh();
}

function refresh() {
balanceShown.textContent = balance;
}
