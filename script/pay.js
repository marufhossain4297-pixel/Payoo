document.getElementById('bill-btn')
.addEventListener('click', function(){
    const billNumberInput = getValueFromInput('bill-number');

    if(billNumberInput == ''){
        alert('Please enter Biller account number')
        return;
    }
    else if(billNumberInput.length != 11){
        alert('Please your account number must be 11 digit')
        return;
    }

    //2- get the amount, validate & convert to number
    const billAmount = getValueFromInput('bill-amount')
    if(billAmount == ''){
        alert('Please enter your pay amount')
        return
    }


    //3- get current balence, validate & convert to number
    const currentBalance = getBalence();

    //4- calcolate new balance
    const newBalence = currentBalance - Number(billAmount);
    console.log(newBalence)
    if (newBalence < 0) {
        console.log(alert('Your amount is invalid ❌. Please enter a valid amount.'))
        return
    }
    //5- pin

    const pin = getValueFromInput('bill-pin')
    if(pin === '1234'){
        alert('BillPay successful ✅')
        setBalence(newBalence)
    }
    else if (pin == ''){
        alert('Please enter your PIN for pay')
        return;
    }
    else{
        alert('Your PIN is incorrect. Please try again.')
        return;
    }

    const history = document.getElementById('history')

    const newHistory = document.createElement ('div')

    newHistory.innerHTML = `
        <div class="card bg-base-100 w-full shadow rounded-3xl flex relative">
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">Pay Bill</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 2.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[6px] "> BillPay successful ✅ <br> Account Number: ${billNumberInput}, Amonut: ${billAmount} <br> Date: ${new Date} </p>
                </div>
            </div>
            <br>
    `
    history.append(newHistory)
})