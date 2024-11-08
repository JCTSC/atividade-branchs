document.getElementById("welcome-btn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.textContent = "Bem-vindo! Obrigado por visitar nossa página.";
    message.classList.remove("hidden");
});
