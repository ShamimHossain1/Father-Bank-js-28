
//---------------------- New js deposit codes-----------------------------------

document.getElementById('btn-deposit').addEventListener('click', function () {

//-- calling functions for new and pre deposit values---------------

    const NewDepositAmount = InputValue('deposit-amount');
    const PreTotalDeposit = TextElementValue('total-deposit');
    const PreTotalBalance = TextElementValue('total-balance');

//----------- Condition for invalid Input--------------

    if (isNaN(NewDepositAmount)) {
        alert('Invalid Input. Please Enter a valid Number For Deposit.');
        return;
    }

//------------ condition for too much deposit--------------------

    if (NewDepositAmount > 10000) {
        alert("You can't Never earn this amount.Stop day dreaming you poor.")
        return;
    }

//---------------- Total Deposit------------------------

    const NewTotalDeposit = NewDepositAmount + PreTotalDeposit;
    NewInnerText('total-deposit', NewTotalDeposit);

//------------ Total Balance after Deposit-------------------

    
    const NewTotalBalance = NewDepositAmount + PreTotalBalance;
    NewInnerText('total-balance', NewTotalBalance);

})