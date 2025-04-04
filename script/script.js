/* TRANFORMAR MENU EM X */

const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () =>{
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}

/* VALIDAÇÃO DO FORMULÁRIO PELO WHATS */

function validateForm(event) {
    event.preventDefault(); // Impede envio padrão do formulário

    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;
    const assunto = document.querySelector('input[name="assunto"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    const numeroWhatsApp = '5511977218265';

    const texto = `Olá, me chamo ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${texto}`;

    window.open(url, '_blank'); // Abre o WhatsApp em nova aba
    return false;
}
