document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        const selectBank = getValueFromInput('bank')
        if (selectBank == 'Select bank') {
            alert('Please select a bank')
            return;
        }

        const moneyNumber = getValueFromInput('add-money-number')

        if (moneyNumber === '') {
            alert('Please enter "Account number"')
            return
        }
        else if ((isNaN(moneyNumber))) {
            alert('Please enter a number')
            return
        }
        else if (moneyNumber.length != 11) {
            alert('Account number is invalid.')
            return;
        }

        const amount = getValueFromInput('add-money-amount')
        const currentBalance = getBalence()
        const newBalence = currentBalance + Number(amount);
        if (amount == '') {
            alert('Please enter your amount')
            return
        }


        const pin = getValueFromInput('add-money-pin')
        if (pin === '') {
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

        const historyContainer = document.getElementById("history-container");

        const newHistory = document.createElement('div')

        // Create ONE date object
        const today = new Date();

        // Weekdays
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = days[today.getDay()];

        // Date parts
        const date = today.getDate();
        const month = today.toLocaleString("en-US", { month: "short" });
        const year = today.getFullYear();

        // Time parts (12-hour format)
        let hour = today.getHours();
        const minute = String(today.getMinutes()).padStart(2, "0");
        const second = String(today.getSeconds()).padStart(2, "0");

        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12;
        hour = hour ? hour : 12; // convert 0 to 12

        // Final formatted date
        const formattedDate = `${dayName} ${date} ${month} ${year} ${hour}:${minute}:${second} ${ampm}`;


        newHistory.innerHTML = `
        <div class="card bg-base-100 w-full shadow rounded-3xl flex relative">
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">AddMoney</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 1.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[16px]"> <span class = "font-medium text-[13px]" >${selectBank}</span> <br> Amonut: <span class = "text-[#2dc653] font-semibold text-[13px]"> +${amount} $</span> <br> Account Number : ${moneyNumber} <br> Date: ${formattedDate}</p>
                </div>
            </div>
            <br>
    `

        historyContainer.append(newHistory);
        checkTransactionState();
    })

// function model (){
//     const model1 = document.getElementById('my_modal_1')
//     model1.showModal()
// }