function getPin() {
    const pin = generatePin()
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin()
    const DisplayPinField = document.getElementById('display-pin')
    DisplayPinField.value = pin;
})

document.getElementById('Calculator').addEventListener('click', function () {
    const number = event.target.innerText;

    const typedNUmberField = document.getElementById('typed-numbers')
    const previousTypedNumber = typedNUmberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNUmberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNUmberField.value = remainingDigits;
        }
    }
    else {

        const newTypedNumber = previousTypedNumber + number;
        typedNUmberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const DisplayPinField = document.getElementById('display-pin')
    const currectPin = DisplayPinField.value

   const typedNUmberField = document.getElementById('typed-numbers')
   const typedNumber = typedNUmberField.value;

   const pinSuccessMessage = document.getElementById('pin-success')
   const pinFailureMessage = document.getElementById("pin-failure")
   if(currectPin === typedNumber){
   
    pinSuccessMessage.style.display = 'block'
    pinFailureMessage.style.display = 'none'
   }

   else{
   
   pinFailureMessage.style.display = 'block'
   pinSuccessMessage.style.display = 'none'
   }
})
