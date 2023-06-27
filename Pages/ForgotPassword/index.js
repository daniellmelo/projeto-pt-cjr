document.getElementById('recoverPasswordButton').addEventListener('click', function (e) {
  e.preventDefault()
})

function handleSubmit() {
  const password = document.getElementById('password').value

  const data = {
    password
  }

  console.log('data: ', data)
}

function validatedForm() {
  document.getElementById('recoverPasswordButton').disabled = !passwordMatches() || !validPassword()
  
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value

  document.getElementById('passwordErrorMessage').style.display = password ? 'none' : 'block'
  document.getElementById('confirmPasswordErrorMessage').style.display = confirmPassword ? 'none' : 'block'

}

function passwordMatches() {
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value

  return password === confirmPassword
}

function validPassword() {
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value

  return password && confirmPassword
}