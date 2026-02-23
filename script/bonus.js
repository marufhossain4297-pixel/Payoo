document.getElementById('bonus-btn')
.addEventListener('click', function(){
    const coupon = getValueFromInput('bonus-text');
    if(coupon == ''){
        alert('Please enter a Coupon code for Get Bonus')
        return;
    }
    if(coupon != 'payoo1000'){
        alert('Please enter a valid coupon code')
        return;
    }

    const couponValue = 1000;
    const currentBalance = getBalence()

    const newBalence = currentBalance + Number(couponValue);
    setBalence(newBalence)

    alert(`Congratulation, you got the bonus ${couponValue} ${new Date}`)


    const history = document.getElementById('history')

    const newHistory = document.createElement ('div')

    newHistory.innerHTML = `
        <div class="card bg-base-100 w-full shadow rounded-3xl flex relative">
                <p class = "text-[16px] font-semibold mt-[10px] ml-[80px] text-[#525252] absoluten top-[-1px] ">Bonus</p>
                <div class="flex items-center">
                    <img class="w-[45px] h-[45px] mx-[16px] mb-[13px]" src="./images/wallet 1.png" alt="">
                    <p class="self-center text-[12px] text-[#525252] mt-[5px] mb-[6px]">

                    Congratulation, you got the bonus $ ${couponValue}, <br>

                    Date: ${new Date} </p>

                </div>
            </div>
            <br>
    `

    history.append(newHistory)
})