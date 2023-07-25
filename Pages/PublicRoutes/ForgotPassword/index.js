document.getElementById('recoverPasswordButton').addEventListener('click', function (e) {
  e.preventDefault()
})

async function handleSubmit() {
  const password = document.getElementById('password').value

  const data = {
    password
  }

  try {
    const response = await fetch('http://localhost:3000/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const { message } = await response.json();
    alert(message); // Exibe uma mensagem de sucesso após a redefinição de senha
  } catch (error) {
    console.log({ message: error.message });
  }
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