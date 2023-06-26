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