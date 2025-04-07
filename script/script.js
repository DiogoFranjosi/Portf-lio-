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
    event.preventDefault();
  
    const nome = document.querySelector('input[name="nome"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const assunto = document.querySelector('input[name="assunto"]').value.trim();
    const mensagem = document.querySelector('textarea[name="mensagem"]').value.trim();
    const statusMessage = document.getElementById('status-message');
  
    if (!statusMessage) {
      alert("Elemento de status não encontrado.");
      return;
    }
  
    const showStatus = (msg, type) => {
        statusMessage.textContent = msg;
      
        statusMessage.classList.remove('success', 'error', 'loading');
        statusMessage.classList.add(type); // adiciona a classe correspondente
      };
  
    // Simula envio e redireciona
    setTimeout(() => {
      const numeroWhatsApp = '5511977218265';
      const texto = `Olá, me chamo ${nome}%0AEmail: ${email}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;
      const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${texto}`;
  
      showStatus('Mensagem enviada com sucesso! Redirecionando para o WhatsApp...', 'success');
  
      setTimeout(() => {
        window.open(url, '_blank');
      }, 1000);
    }, 1200);
  }
  
