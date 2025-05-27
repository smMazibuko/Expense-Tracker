
let balance = document.getElementById('');

// fetches the balance from the JSON file
// function getBalance(){
// fetch("user.json") // GET is already the default method set

//     .then(response => response.json())

//     .then(value => {
//         balance=value.balance;
//     })

//     .catch(error => console.error(error));
// }

function sumUp(operation){

    if (operation == 1){

        balance -= document.getElementById('newAmount').value;
        console.log(`Your new balance is ${balance}`);
        

    } else if (operation == 2){

        balance += document.getElementById('newAmount').value;
        console.log(`Your new balance is ${balance}`);
        

    }

}
