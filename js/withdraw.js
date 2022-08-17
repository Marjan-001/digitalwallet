//
document.getElementById('btn-withdraw').addEventListener('click', function() {

    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //clear field

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('provide Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




    // get balance total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You do not have enough balance');
        return;

    }
    const currentwithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentwithdrawTotal;



    // current total balance

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set the balance total

    balanceTotalElement.innerText = currentBalanceTotal;





})