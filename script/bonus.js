document.getElementById('bonus-btn')
    .addEventListener('click', function () {
        const coupon = getValueFromInput('bonus-text');
        if (coupon == '') {
            alert('Please enter a Coupon code for Get Bonus')
            return;
        }
        if (coupon != 'payoo1000') {
            alert('Please enter a valid coupon code')
            return;
        }

        const couponValue = 1000;
        const currentBalance = getBalence()

        const newBalence = currentBalance + Number(couponValue);
        setBalence(newBalence)

        alert(`Congratulation, you got the bonus ${couponValue} ${new Date}`)


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
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">Bonus</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 1.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[6px]"> <span class = "font-medium text-[13px]">Congratulation, you got the bonus ✅</span> <br> Amount: <span class = "text-[#2dc653] font-semibold text-[13px]">+${couponValue}$</span> <br> Date: ${formattedDate} </p>

                </div>
            </div>
            <br>
    `

        history.append(newHistory)
    })