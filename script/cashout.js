document.getElementById('withdraw-btn')
    .addEventListener('click', function () {
        //1- get the aget number & validate
        const cashoutNumberInput = getValueFromInput('cashout-number');
        if (cashoutNumberInput == '') {
            alert('Please enter your number')
            return
        }

        else if (cashoutNumberInput.length != 11) {
            alert('Your Agent number is invalid ❌')
            return
        }
        //2- get the amount, validate & convert to number
        const cashoutAmount = getValueFromInput('cashout-amount')
        if (cashoutAmount == '') {
            alert('Please enter your amount')
            return
        }


        //3- get current balence, validate & convert to number
        const currentBalance = getBalence();

        //4- calcolate new balance
        const newBalence = currentBalance - Number(cashoutAmount);
        console.log(newBalence)
        if (newBalence < 0) {
            console.log(alert('Your amount is invalid ❌. Please enter a valid amount.'))
            return
        }
        //5- pin
        const pin = getValueFromInput('cashout-pin')
        if (pin == '') {
            alert('Please enter your PIN')
            return;
        }
        else if (pin === '1234') {
            alert('Withdraw successful ✅')
            setBalence(newBalence)
        }
        else {
            alert('Your PIN is incorrect. Please try again.')
            return;
        }

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
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">CashOut</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 2.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[16px] "> <span class = "font-medium text-[13px]">Withdraw successful ✅</span><br>  Amonut: <span class = "text-[#EF4444] font-semibold text-[13px]"> -${cashoutAmount} $</span><br> Account Number: ${cashoutNumberInput}<br> Date: ${formattedDate} </p>
                </div>
            </div>
            <br>
    `
        historyContainer.append(newHistory);
        checkTransactionState();
    })
// document.getElementById('withdraw-btn')
//     .addEventListener('click', function () {
//         //1- get the aget number & validate
//         const cashoutNumberInput = document.getElementById('cashout-number');
//         const cashOut = cashoutNumberInput.value;
//         console.log(cashOut);
//         if (cashOut.length != 11) {
//             alert('Your Agent number is invalid ❌')
//             return
//         }
//         //2- get the amount, validate & convert to number
//         const cashoutAmountInput = document.getElementById('cashout-amount')
//         const cashoutValue = cashoutAmountInput.value;
//         console.log(cashoutValue)
//         //3- get current balence, validate & convert to number
//         const currentAmount = document.getElementById('balence')
//         const currentAmountValue = currentAmount.innerText;
//         console.log(currentAmountValue)
//         //4- calcolate new balance
//         const newBalence = Number(currentAmountValue) - Number(cashoutValue);
//         if (newBalence < 0) {
//             console.log(alert('Your amount is invalid ❌. Please enter a valid amount.'))
//             return
//         }
//         //5- get the pin e verify
//         const cashoutpininput = document.getElementById('cashout-pin')
//         const cashoutpinvalue = cashoutpininput.value;
//         if (cashoutpinvalue === '1234') {
//             alert('Withdraw successful ✅')
//             console.log('new balence', newBalence)
//             currentAmount.innerText = newBalence
//         }
//         //5-1 ture === show the alert > set balence
//         else {
//             alert('Your PIN is incorrect. Please try again.');
//             return;
//         }
//         //5-1 false === show errore alert > return

//         // window.location.assign('/cashoutsuccess.html')
//     })