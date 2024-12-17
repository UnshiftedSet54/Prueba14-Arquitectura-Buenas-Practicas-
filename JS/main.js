class UserFormValidation{
  userFormData = {}

  constructor(userFormData){
    this.userFormData = userFormData
  }

  isUserValid(){
    return this.userFormData.username === 'admin' === true && this.userFormData.password === 'admin'
  }
}

const showInputErrorMessage = (targetElement, message) => {
  targetElement.textContent = message
}

const showFormMessage = (targetElement) => {
  targetElement.style.opacity = 1
    setTimeout(() => {
      targetElement.style.opacity = 0
    }, 3000)
}

document.getElementById('user-form').onsubmit = (event) => {
  event.preventDefault()

  const usernameInput = document.getElementById('username')
  const passwordInput = document.getElementById('password')
  const usernameMessageElement = document.getElementById('username-message')
  const passwordMessageElement = document.getElementById('password-message')
  const successMessageElement = document.getElementById('pop-up-message-success')
  const failMessageElement = document.getElementById('pop-up-message-fail')

  const userFormData = {
    username: usernameInput.value,
    password: passwordInput.value
  }
  const userValidation = new UserFormValidation(userFormData)

  if(!usernameInput.value){
    showInputErrorMessage(usernameMessageElement, 'Nombre de usuario incorrecto.')
  }else{
    showInputErrorMessage(usernameMessageElement, '')
  }

  if(passwordInput.value === ''){
    showInputErrorMessage(passwordMessageElement, 'Contrasena incorrecta.')
  }else{
    showInputErrorMessage(passwordMessageElement, '')
  }

  if(userValidation.isUserValid()){
    showFormMessage(successMessageElement)
  }else{
    showFormMessage(failMessageElement)
  }
}
