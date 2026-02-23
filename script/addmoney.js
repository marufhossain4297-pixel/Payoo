document.getElementById('add-money-btn')
.addEventListener('click', function(){
    const selectBank = getValueFromInput('bank')
    if(selectBank == 'Select bank'){
        alert('Please select a bank')
        return;
    }

    const moneyNumber = getValueFromInput('add-money-number')

    if(moneyNumber === ''){
        alert('Please enter "Account number"')
        return
    }
    else if ((isNaN(moneyNumber))){
        alert('Please enter a number')
        return
    }
    else if(moneyNumber.length != 11){
        alert('Account number is invalid.')
        return;
    }

    const amount = getValueFromInput('add-money-amount')
    const currentBalance = getBalence()
    const newBalence = currentBalance + Number(amount);
    if(amount == ''){
        alert('Please enter your amount')
        return
    }


    const pin = getValueFromInput('add-money-pin')
    if(pin === ''){
        alert('Please enter PIN')
        return
    }
    else if (pin !== '1234') {
        alert('Pin is invalid ❌')
        return
    }
    else {
        setBalence(newBalence)
    }
    alert(`Add money success ${selectBank} ${new Date}`)

    const history = document.getElementById('history')

    const newHistory = document.createElement ('div')

    newHistory.innerHTML = `
        <div class="card bg-base-100 w-full shadow rounded-3xl flex relative">
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">AddMoney</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 1.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[6px] ">${selectBank}, Amonut ${amount} <br> Account Number : ${moneyNumber}, Date: ${new Date} </p>
                </div>
            </div>
            <br>
    `

    history.append(newHistory)
})

// function model (){
//     const model1 = document.getElementById('my_modal_1')
//     model1.showModal()
// }