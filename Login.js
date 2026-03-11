const form = document.getElementById("loginForm");
const btnBio = document.getElementById("btnBiometria");
const statusBio = document.getElementById("status-bio");

// --- LOGICA DE LOGIN TRADICIONAL ---
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Conforme sua credencial informada
    if(user === "ADM" && pass === "021520"){
        localStorage.setItem("logado", "true");
        window.location.href = "Dashbord.html";
    } else {
        document.getElementById("error").innerText = "Usuário ou senha incorretos!";
    }
});

// --- LOGICA DE BIOMETRIA (IMPRESSÃO DIGITAL) ---
btnBio.addEventListener("click", async () => {
    // Verifica se o navegador suporta biometria (WebAuthn)
    if (!window.PublicKeyCredential) {
        statusBio.innerText = "Seu dispositivo não suporta biometria.";
        return;
    }

    statusBio.innerText = "Aguardando sensor digital...";

    try {
        /* Simulação de Autenticação: 
           Em um sistema real, o navegador abre o prompt do Windows/Android/iOS aqui.
        */
        
        // Simulando o tempo de resposta do sensor
        setTimeout(() => {
            // Sucesso na digital
            localStorage.setItem("logado", "true");
            statusBio.style.color = "#22c55e";
            statusBio.innerText = "Digital confirmada! Entrando...";
            
            setTimeout(() => {
                window.location.href = "Dashbord.html";
            }, 1000);
        }, 1500);

    } catch (err) {
        statusBio.style.color = "#ef4444";
        statusBio.innerText = "Erro ao validar digital.";
        console.error(err);
    }
});
