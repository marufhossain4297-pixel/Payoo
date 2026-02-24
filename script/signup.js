document.getElementById('signup-btn')
    .addEventListener('click', function () {
        const firstName = document.getElementById('first-name');
        const firstNameValue = firstName.value;
        console.log(firstNameValue);

        const lastName = document.getElementById('last-name');
        const lastNameValue = lastName.value;
        console.log(lastNameValue);

        const datOfBirth = document.getElementById('date-of-birth');
        const datOfBirthValue = datOfBirth.value;
        console.log(datOfBirthValue);

        const phoneNumber = document.getElementById('phone-number');
        const phoneNumberValue = phoneNumber.value;
        console.log(phoneNumberValue);

        const emailInput = document.getElementById('email');
        const emailInputValue = emailInput.value;
        console.log(emailInputValue);

        const streetAddress = document.getElementById('street-address');
        const streetAddressValue = streetAddress.value;
        console.log(streetAddressValue);

        const streetAddressLine2 = document.getElementById('street-address-line-2');
        const streetAddressLine2Value = streetAddressLine2.value;
        console.log(streetAddressLine2Value);

        const county = document.getElementById('county');
        const countyValue = county.value;
        console.log(countyValue);

        const city = document.getElementById('city');
        const cityValue = city.value;
        console.log(cityValue);

        const state = document.getElementById('state');
        const stateValue = state.value;
        console.log(stateValue);

        const postal = document.getElementById('postal');
        const postalValue = postal.value;
        console.log(postalValue);

        if (firstNameValue == 'Avik' && lastNameValue == 'Anik' && datOfBirthValue == '01/01/2000' && phoneNumberValue == '01234567890' && emailInputValue == 'avikanik@gmail.com' && streetAddressValue == 'Boshundora, Dhaka' && countyValue == 'Bangladesh' && cityValue == 'Dhaka' && stateValue == 'Dhaka' && postalValue == '12345') {
            // alert('SignUp succses ✅')
        }

        else {
            alert('Please complete with your information')
            return;
        }
        const typeAccount = getValueFromInput('type')
        if (typeAccount == 'Select your account type') {
            alert('Please selct your "Account type"')
            return
        }

        const monthlyIncome = getValueFromInput('saveing')
        if (monthlyIncome == 'Select your monthly saveing') {
            alert('Please selct your "Monthly saveing"')
            return
        }

        const usePayoo = getValueFromInput('what')
        if (usePayoo == 'Select what do you went to use Payoo') {
            alert('Please selct your "What do you went to use Payoo')
            return
        }

        const privacy = document.getElementById('privacy')
        if(!privacy.checked){
            alert('Please accept the Privacy & Conditions')
            return
        }
        alert('Congratulation, your first is step done 👍')
        window.location.assign('/password.html')

    })