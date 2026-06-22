document.querySelector('#btnContinuar').addEventListener('click', function(event) {
    event.preventDefault();

const nome = document.querySelector('#nome').value;
const email = document.querySelector('#email').value;
const especialidade = document.querySelector('#especialidade').value;

    if (nome === "" || email === '' || especialidade === '') {
        alert("Ops! Preencha todos os campos para entrar.");
        return;
    }

localStorage.setItem('emailEmCadastro', email);

window.location.href = "/pages/cadastropages/criar-senha.html"
});