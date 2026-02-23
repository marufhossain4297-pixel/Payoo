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