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

/* FORMULÁRIO DE CONTATO ENVIO PELO WHATSAPP + SWEETALERT2 */
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Captura os dados do formulário
    const nome = form.querySelector("input[name='nome']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const assunto = form.querySelector("input[name='assunto']").value.trim();
    const mensagem = form.querySelector("textarea[name='mensagem']").value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        Swal.fire({
            icon: "warning",
            title: "Campos obrigatórios",
            text: "Por favor, preencha todos os campos antes de enviar."
        });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: "error",
            title: "E-mail inválido",
            text: "Por favor, insira um e-mail válido."
        });
        return;
    }

    const texto = `Olá, meu nome é ${nome}!\n` +
                  `Email: ${email}\n` +
                  `Assunto: ${assunto}\n` +
                  `Mensagem: ${mensagem}`;

    const numeroWhatsApp = "5511977218265";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    Swal.fire({
        icon: "info",
        title: "Redirecionando para o WhatsApp...",
        text: "Clique em 'OK' para enviar a mensagem.",
        confirmButtonText: "OK"
    }).then(() => {
        window.open(url, "_blank");
        form.reset();
    });
});
