document.getElementById('withdraw-btn')
    .addEventListener('click', function () {
        //1- get the aget number & validate
        const cashoutNumberInput = document.getElementById('cashout-number');
        const cashOut = cashoutNumberInput.value;
        console.log(cashOut);
        if(cashOut.length !=11){
            alert('wertyu')
            return
        }
        //2- get the amount, validate & convert to number
        const cashoutAmountInput = document.getElementById('cashout-amount')
        const cashoutValue = cashoutAmountInput.value;
        console.log(cashoutValue)
        //3- get current balence, validate & convert to number
        const currentAmount = document.getElementById('balence')
        const currentAmountValue = currentAmount.innerText;
        console.log(currentAmountValue)
        //4- calcolate new balance
        const newBalence = Number(currentAmountValue) - Number(cashoutValue);
        if(newBalence < 0){
            console.log(alert('Your amount is invalid. Please enter a valid amount.'))
            return
        }
        //5- get the pin e verify
        const cashoutpininput = document.getElementById('cashout-pin')
        const cashoutpinvalue = cashoutpininput.value;
        if(cashoutpinvalue === '1234'){
            alert('Withdraw successful ✅')
            console.log('new balence', newBalence)
            currentAmount.innerText = newBalence
        }
        //5-1 ture === show the alert > set balence
        else{
            alert('Your PIN is incorrect. Please try again.');
            return;
        }
        //5-1 false === show errore alert > return
    })