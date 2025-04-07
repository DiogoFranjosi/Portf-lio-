/* MENU HAMBÚRGUER */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');
    nav.style.display = menuHamburguer.classList.contains('change') ? 'block' : 'none';
}

/* VALIDAÇÃO E ENVIO PELO WHATSAPP */
function validateForm(event) {
    event.preventDefault();

    const nome = document.querySelector('input[name="nome"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const assunto = document.querySelector('input[name="assunto"]').value.trim();
    const mensagem = document.querySelector('textarea[name="mensagem"]').value.trim();
    const statusMessage = document.getElementById('status-message');

    const showStatus = (msg, type) => {
        statusMessage.textContent = msg;
        statusMessage.style.opacity = 1;
        statusMessage.style.color =
            type === 'success' ? 'limegreen' :
            type === 'loading' ? '#ffaa00' :
            'crimson';
    };

    // Mostra carregando imediatamente
    showStatus('Enviando mensagem...', 'loading');

    // Validações
    if (!nome || !email || !assunto || !mensagem) {
        showStatus('Por favor, preencha todos os campos.', 'error');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showStatus('Por favor, insira um e-mail válido.', 'error');
        return;
    }

    // Aguarda e envia
    setTimeout(() => {
        const numeroWhatsApp = '5511977218265';
        const texto = `Olá, me chamo ${nome}%0AEmail: ${email}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;
        const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${texto}`;

        showStatus('Mensagem enviada com sucesso! Redirecionando para o WhatsApp...', 'success');

        // Apaga a mensagem suavemente após abrir o WhatsApp
        setTimeout(() => {
            window.open(url, '_blank');

            // fade-out
            statusMessage.classList.add('fade-out');

            setTimeout(() => {
                statusMessage.textContent = '';
                statusMessage.classList.remove('fade-out');
            }, 500);
        }, 1500);
    }, 1000);
}
