const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    
    const name = loginFormData.get('astronautName')
    console.log(name)

    const email = loginFormData.get('astronautEmail')
    console.log(email)

    const password= loginFormData.get('astronautPwd')
    console.log(password)

})