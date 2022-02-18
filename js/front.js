document.getElementById('submit-btn').addEventListener('click', function () {
    //Get email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value

    //Get Password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value

    //condition
    if (userEmail == 'omar@gmail.com' && userPassword == 'omar') {

        window.location.href = 'banking.html'
    }

})