
console.log('hello world');

const balanceShown = document.getElementById('balance');
let balance = 50;
refresh();

const logIncome = () => {
    balance++;
    refresh();
}

const logExpense = () => {
    balance--;
    refresh();
}

function refresh() {
balanceShown.innerHTML = `<p>R${balance}</p>`;
}
