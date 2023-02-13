//------------------ Deposit----------------
document.getElementById('btn-deposit').addEventListener('click', function () {

    // input deposit amount
    const inputDeposit = document.getElementById('deposit-amount');
    const DepositAmountString = inputDeposit.value;
    const NewDepositAmount = parseFloat(DepositAmountString);

    inputDeposit.value = '';
    
    // condition for invalid number
    if (isNaN(NewDepositAmount)) {
        alert('Please Enter a valid Number');
        return;
    }

    // condition for too much deposit
    if (NewDepositAmount > 10000) {
        alert("You can't Never earn this amount.Stop day dreaming you poor.")
        return;
    }

    // Previous Deposit
    const PreDeposit = document.getElementById('total-deposit');
    const PreTotalDepositString = PreDeposit.innerText;
    const PreTotalDeposit = parseFloat(PreTotalDepositString);



    // total new deposit
    const NewTotalDeposit = PreTotalDeposit + NewDepositAmount;
    PreDeposit.innerText = NewTotalDeposit;

    // total new balance
    const preBalance = document.getElementById('total-balance');
    const PreTotalBalanceString = preBalance.innerText;
    const PreTotalBalance = parseFloat(PreTotalBalanceString);

    // new total balance
    const newTotalBalance = PreTotalBalance + NewDepositAmount;
    preBalance.innerText = newTotalBalance;




})

//----------------- Withdraw-----------
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // input Withdraw amount
    const inputWithdraw = document.getElementById('withdraw-amount');
    const WithdrawAmountString = inputWithdraw.value;
    const NewWithdrawAmount = parseFloat(WithdrawAmountString);

    inputWithdraw.value = '';

    // condition for invalid number
    if (isNaN(NewWithdrawAmount)) {
        alert('Please Enter a valid Number');
        return;
    }

   // Previous Withdraw
    const PreWithdraw = document.getElementById('total-withdraw');
    const PreTotalWithdrawString = PreWithdraw.innerText;
    const PreTotalWithdraw = parseFloat(PreTotalWithdrawString);

    // total new balance
    const preBalance = document.getElementById('total-balance');
    const PreTotalBalanceString = preBalance.innerText;
    const PreTotalBalance = parseFloat(PreTotalBalanceString);
    
    // condition for too much withdraw
    if (NewWithdrawAmount > PreTotalBalance) {
        alert("First earn this much then come You poor.")
        return;
    }

    // total new Withdraw
    const NewTotalWithdraw = PreTotalWithdraw + NewWithdrawAmount;
    PreWithdraw.innerText = NewTotalWithdraw;

    // new total balance
    const newTotalBalance = PreTotalBalance - NewWithdrawAmount;
    preBalance.innerText = newTotalBalance;




    inputWithdraw.value = '';
})