document.getElementById('loging-btn')
    .addEventListener('click', function () {
        //1
        const number = document.getElementById('input-number')
        const PhoneNumber = number.value;
        console.log(PhoneNumber);

        //2
        const inputPin = document.getElementById('input-pin')
        const pin = inputPin.value
        console.log(pin)

        //3
        if (PhoneNumber == '01234567890' && pin == '1234') {
            const modalText = document.getElementById('modal-text')
            modalText.innerHTML = `
                <div class = "text-center">
                    <div class = "justify-self-center text-[70px] text-[#198755]">
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <h1 class = "text-[25px] font-bold">Success!</h1>
                    <p>You have been successfully authenticated. Please wait while we log you in</p>
                </div>
            `
            document.getElementById('my_modal_4').showModal();
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
        }
        else if (PhoneNumber == '' || pin == '') {
            const modalText = document.getElementById('modal-text')
            modalText.innerHTML = `
                <div class = "text-center">
                    <div class = "justify-self-center text-[60px] text-[#ED0000]">
                        <i class="fa-solid fa-exclamation"></i>
                    </div>
                    <h1 class = "text-[25px] font-bold">Oops!</h1>
                    <p>Please enter your Phone Number and PIN to continue.</p>
                </div>
            `
            document.getElementById('my_modal_4').showModal();
        }
        else {
            const modalText = document.getElementById('modal-text')
            modalText.innerHTML = `
                <div class = "text-center">                
                    <div class = "justify-self-center text-[70px] text-[#ED0000]">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <h1 class = "text-[25px] font-bold">Oops!</h1>
                    <p>Your Phonenumber or Pin incorrect. Please try again</p>
                </div>
            `
            document.getElementById('my_modal_4').showModal();
            return;
        }

    })