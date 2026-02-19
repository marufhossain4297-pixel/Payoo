document.getElementById('loging-btn')
    .addEventListener('click', function (){
        //1
        const number = document.getElementById('input-number')
        const PhoneNumber = number.value;
        console.log(PhoneNumber);

        //2
        const inputPin = document.getElementById('input-pin')
        const pin = inputPin.value
        console.log(pin)

        //3
        if(PhoneNumber == '01234567890' && pin == '1234'){
            alert('Login Succses')
            window.location.assign ('/home.html')
        }
        else{
            alert('Your Phonenumber or Pin incorrect. Please try again 😊')
            return;
        }
    })