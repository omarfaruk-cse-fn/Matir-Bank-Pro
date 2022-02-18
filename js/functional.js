//Get Value Friom Input Field
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputInText = inputField.value
    const value = parseFloat(inputInText)
    inputField.value = ''
    return value
}
//convert text field value
function getinnertextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId)
    const fieldValueInText = fieldTag.innerText
    const value = parseFloat(fieldValueInText)
    return value
}
//Set value in text field
function getUpdateValue(fieldId, amount) {
    const previoustotal = getinnertextValue(fieldId)
    const total = previoustotal + amount
    document.getElementById(fieldId).innerText = total
    return total
}
function getUpdateBalance(amount, isAdd) {
    // const balanceTag = document.getElementById('balance-total')
    // const balanceInTex = balanceTag.innerText
    const previousBalance = getinnertextValue('balance-total')
    let balance
    if (isAdd) {
        balance = previousBalance + amount
    }
    else {
        balance = previousBalance - amount
    }
    document.getElementById('balance-total').innerText = balance
}

//Deposit and manage Balance
document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-input')
    if (amount > 0) {
        getUpdateValue('deposit-total', amount)
        getUpdateBalance(amount, true)
    }
})

// Withdraw and manage Balance
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const amount = getInputValue('withdrow-input')
    if (amount > 0) {
        getUpdateValue('withdrow-total', amount)
        getUpdateBalance(amount, false)
    }
})