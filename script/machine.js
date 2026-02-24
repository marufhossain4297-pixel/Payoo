function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

function getBalence (){
    const balanceElements = document.getElementById('balence');
    const balance = balanceElements.innerText;
    console.log('current balance', Number(balance))
    return Number(balance)
}

function setBalence (value){
    const balanceElements = document.getElementById('balence')
    balanceElements.innerText = value;
}

function showOnly (id){
    const cashOut = document.getElementById('chackout')
    const addMoney = document.getElementById('add-money')
    const transfer = document.getElementById('transfer')
    const bonus = document.getElementById('bonus')
    const bill = document.getElementById('bill')
    const history = document.getElementById('history')
    const payment = document.getElementById('payment')
    
    cashOut.classList.add("hidden")
    addMoney.classList.add("hidden")
    transfer.classList.add("hidden")
    bonus.classList.add("hidden")
    bill.classList.add("hidden")
    history.classList.add("hidden")
    payment.classList.add("hidden")

    const selected = document.getElementById(id)
    selected.classList.remove("hidden")
}

function color (id){
    const add = document.getElementById('header-add')
    const cashout = document.getElementById('header-cashout')
    const transfer = document.getElementById('header-tranfer')
    const bonus = document.getElementById('header-bonus')
    const bill = document.getElementById('header-bill')
    const trasition = document.getElementById('header-trasition')

    // add.classList.remove('bg-white')
    // cashout.classList.remove('bg-white')
    // transfer.classList.remove('bg-white')
    // bonus.classList.remove('bg-white')
    // bill.classList.remove('bg-white')
    // trasition.classList.remove('bg-white')

    add.classList.remove('bg-[#F3F8FE]', 'text-[#0874F2]', 'border-1.5', 'border-[#0874F2]')
    cashout.classList.remove('bg-[#F3F8FE]', 'text-[#0874F2]', 'border-1.5', 'border-[#0874F2]')
    transfer.classList.remove('bg-[#F3F8FE]', 'text-[#0874F2]', 'border-1.5', 'border-[#0874F2]')
    bonus.classList.remove('bg-[#F3F8FE]', 'text-[#0874F2]', 'border-1.5', 'border-[#0874F2]')
    bill.classList.remove('bg-[#F3F8FE]', 'text-[#0874F2]', 'border-1.5', 'border-[#0874F2]')
    trasition.classList.remove('bg-[#F3F8FE]', 'text-[#0874F2]', 'border-1.5', 'border-[#0874F2]')

    add.classList.add('bg-white')
    cashout.classList.add('bg-white')
    transfer.classList.add('bg-white')
    bonus.classList.add('bg-white')
    bill.classList.add('bg-white')
    trasition.classList.add('bg-white')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-white')
    selected.classList.add('bg-[#F3F8FE]', 'text-[#0874F2]', 'border-1.5', 'border-[#0874F2]')
}