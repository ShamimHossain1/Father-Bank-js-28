
// new js withdraw codes

document.getElementById('btn-withdraw').addEventListener('click', function () {

//------ calling functions for new and pre Withdraw & balance values---------------

    const NewWithdrawAmount = InputValue('withdraw-amount');
    const PreTotalWithdraw = TextElementValue('total-withdraw');
    const PreTotalBalance = TextElementValue('total-balance');

 // ----------------condition for invalid number-----------------

    if (isNaN(NewWithdrawAmount)) {
        alert('Please Enter a valid Number');
        return;
    }

// -------------condition for too much withdraw-------------

   if (NewWithdrawAmount > PreTotalBalance) {
      alert("First earn this much then come You poor.")
      return;
   }

// ----------------Total Withdraw -----------------------

    const NewTotalWithdraw = NewWithdrawAmount + PreTotalWithdraw;
    NewInnerText('total-withdraw', NewTotalWithdraw);

//------------ Total Balance after withdraw ---------------

    const NewTotalBalance = PreTotalBalance - NewWithdrawAmount;
    NewInnerText('total-balance', NewTotalBalance);


})