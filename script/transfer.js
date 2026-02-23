document.getElementById('transfer-btn')
.addEventListener('click', function(){
    const transferNumberInput = getValueFromInput('transfer-number');
    if(transferNumberInput == ''){
        alert('Please enter user account number')
        return;
    }
    else if(transferNumberInput.length != 11){
        alert('Please your account number must be 11 digit')
        return
    }


    const tranferAmount = getValueFromInput('transfer-amount')

    const currentBalance = getBalence();

    //4- calcolate new balance
    const newBalence = currentBalance - Number(tranferAmount);
    if (newBalence < 0) {
        console.log(alert('Your amount is invalid ❌. Please enter a valid amount.'))
        return
    }
    console.log(newBalence)

    const pin = getValueFromInput('transfer-pin')
    if(pin === '1234'){
        alert('Transfar successful ✅')
        setBalence(newBalence)
    }
    else{
        alert('Your PIN is incorrect. Please try again.')
        return;
    }

    const history = document.getElementById('history')

    const newHistory = document.createElement ('div')

    newHistory.innerHTML = `
        <div class="card bg-base-100 w-full shadow rounded-3xl flex relative">
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">Transfer</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 3.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[6px] "> Transfar successful ✅ <br> Account Number: ${transferNumberInput}, Amonut: ${tranferAmount} <br> Date: ${new Date} </p>
                </div>
            </div>
            <br>
    `
    history.append(newHistory)
})