const billAmount = document.querySelector("#bill-amount")
const cashTaken = document.querySelector("#cash-taken")
const button = document.querySelector("#check-btn")
const toReturn = document.querySelector("#to-return")
const denomination = document.querySelector("#denomination")

let currency = [1,5,10,20,100,500,2000];
const bill = billAmount.value;
const cash = cashTaken.value;


const handleclick = (cash, bill) => {
  toReturn.innerText = cash - bill;
}

function cashManager(){

    
    






}

