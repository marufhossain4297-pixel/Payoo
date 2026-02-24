document.getElementById('bill-btn')
    .addEventListener('click', function () {
        const billNumberInput = getValueFromInput('bill-number');

        if (billNumberInput == '') {
            alert('Please enter Biller account number')
            return;
        }
        else if (billNumberInput.length != 11) {
            alert('Please your account number must be 11 digit')
            return;
        }

        //2- get the amount, validate & convert to number
        const billAmount = getValueFromInput('bill-amount')
        if (billAmount == '') {
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
        if (pin === '1234') {
            alert('BillPay successful ✅')
            setBalence(newBalence)
        }
        else if (pin == '') {
            alert('Please enter your PIN for pay')
            return;
        }
        else {
            alert('Your PIN is incorrect. Please try again.')
            return;
        }

        const history = document.getElementById('history')

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
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">Pay Bill</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 2.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[6px]"><span class = "font-medium text-[13px]">BillPay successful ✅</span><br> Account Number: <span>${billNumberInput}</span> <br> Amonut: <span class = "text-[#EF4444] font-semibold text-[13px]">-${billAmount} $</span> <br> Date: ${formattedDate} </p>
                </div>
            </div>
            <br>
    `
        history.append(newHistory)
    })