document.getElementById("btn-deposit").addEventListener('click', function(){
    const inputField = document.getElementById("input-field");
    const fieldString = inputField.value ;
    const inputValue = parseFloat(fieldString);

    inputField.value = '';

    const previousDeposit = document.getElementById("deposit-total");
    const previousDepositString = previousDeposit.innerText;
    const previousValue = parseFloat(previousDepositString);

    const depositTotal = previousValue + inputValue;


  previousDeposit.innerText = depositTotal;

  const PreviousBalance = document.getElementById("balance-total");
  const PreviousBalanceString = PreviousBalance.innerText;
  const PreviousBalanceValue = parseFloat(PreviousBalanceString);

  const totalBalance = PreviousBalanceValue + depositTotal;

  PreviousBalance.innerText = totalBalance;

})