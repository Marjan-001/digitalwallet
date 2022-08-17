// add event listen to deposit button
document.getElementById('btn-deposit').addEventListener('click', function() {
    // get deposit depositAmount
    // .value use in input field
    const depositField = document.getElementById('deposit-field');

    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Provide Number');
        return;
    }

    // get current depo 

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // clear deposit field



    // get balance total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // current total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the balance total

    balanceTotalElement.innerText = currentBalanceTotal;







})