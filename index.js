let billAmount = document.querySelector(".bill-amount");
let cashTaken = document.querySelector(".cash-taken")
let toReturn = document.querySelector(".cash-taken")
let denomination = document.querySelector(".denomination")
let currency = [1,5,10,20,100,500,2000];


function billing(billAmount, cashTaken) {
    var billAmount = readLineSync.question("Billed Amount: ");
    var cashTaken = readLineSync.question("Cash Taken: ");
    var cashToReturn = cashTaken - billAmount; 
    console.log("Cash to return: ", cashToReturn);
    
    var remainder = cashToReturn;
    for (var i=currency.length-1; i>=0; i--) {
      if (remainder >= currency[i]) {
        var notes = remainder/currency[i];
        var remainder = remainder % currency[i];
        console.log("Denomination/Number   ", currency[i]," / ", Math.floor(notes));
      }       
    }
}

console.log(billing(210, 2000));
