const billAmount = document.querySelector("#bill-amount");
const cashTaken = document.querySelector("#cash-taken");
const button = document.querySelector("#check-btn");
const msgReturn = document.querySelector("#msg-return");
const changeTable = document.querySelector("#change-table");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

let availableNotes = [2000,500,100,20,10,5,1];

button.addEventListener("click", validate)

function validate(){

    message.style.display = "none";

    if(billAmount.value > 0){

      if(Number(cashTaken.value) >= Number(billAmount.value)){
        const returnableAmount = cashTaken.value - billAmount.value;
        msgReturn.style.color = "var(--primary-color)"
        msgReturn.style.fontWeight = "bold";
        msgReturn.style.fontSize = "larger";
        msgReturn.value = returnableAmount;
        calculateChange(returnableAmount);

      } else {
        message.style.display = "block";
        message.style.color = "red";
        message.innerText = "Invalid Amount. Cash Taken must be greater than or equal to the Bill Amount"
      }

    } else {
      message.style.display = "block";
      message.style.color = "red";
      message.innerText= "Bill Amount must be greater than 0"   
    }

};

function calculateChange(returnableAmount){
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(returnableAmount / availableNotes[i]);
    returnableAmount =  returnableAmount % availableNotes[i];
    if(numberOfNotes > 0) {
      noOfNotes[i].style.color = "var(--primary-color)";
      noOfNotes[i].style.fontWeight = "bold";
    }
    noOfNotes[i].innerText = numberOfNotes
  }
}

