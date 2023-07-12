document.getElementById('loginButton').addEventListener('click', function (e) {
  e.preventDefault()
})

function isUserLogged() {
  const userLogged = localStorage.getItem('cjr_auth_token')

  if (userLogged) {
    window.location.href = '/Pages/PrivateRoutes/Feed'
  }
}

isUserLogged()

function showHide() {

  const passwordInput = document.getElementById("inputPassword");
  const eyeIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "/Assets/telaDeLogin/Vector.svg"; // Altera a imagem para o olho fechado
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "/Assets/telaDeLogin/eye.svg"; // Altera a imagem para o olho aberto
  }
}

async function handleLogin() {
  try {
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    const userLoginData = {
      email,
      password
    }

    const response = await fetch('http://localhost:3000/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLoginData)
    })

    const { token } = await response.json()

    localStorage.setItem('cjr_auth_token', token)

    window.location.href = '/Pages/PrivateRoutes/Feed'
  } catch (error) {
    console.log({ message: error.message })
  }

}