document.getElementById("btn-withdraw").addEventListener('click', function(){
  const inputField = document.getElementById("field-input");
  const inputFieldString = inputField.value ;
  const inputFieldValue = parseFloat(inputFieldString);

inputField.value = '';

const previousWithdraw = document.getElementById("btn-preWithdraw");
const previousWithdrawString = previousWithdraw.innerText;
const previousWithdrawValue = parseFloat(previousWithdrawString);


const totalWithdraw = previousWithdrawValue + inputFieldValue ;


previousWithdraw.innerText = totalWithdraw;


const balancePrevious = document.getElementById("balance-total");
const balancePreviousString = balancePrevious.innerText ;
const balancePreviousValue = parseFloat(balancePreviousString);


const withdrawBalance = balancePreviousValue - totalWithdraw;


balancePrevious.innerText = withdrawBalance;

})