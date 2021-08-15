const billAmount = document.querySelector("#bill-amount")
const cashTaken = document.querySelector("#cash-taken")
const button = document.querySelector("#check-btn")
const msgReturn = document.querySelector("#msg-return")
const changeTable = document.querySelector("#change-table")
const message = document.querySelector("#message")

let currency = [1,5,10,20,100,500,2000];

button.addEventListener("click", function validate(){
  message.style.display = "none";
  if(billAmount.value > 0){
    if(cashTaken.value >= billAmount.value){
      // const returnableAmount = cashTaken.value - billAmount.value;
      // calculateChange(returnableAmount);
    } else {
      message.style.display = "block";
      message.innerText = "Invalid Amount. Cash Taken must be greater than or equal to the Bill Amount"
    }
  } else {
    message.style.display = "block";
    message.innerText= "Bill Amount must be greater than 0"   
  }

});

