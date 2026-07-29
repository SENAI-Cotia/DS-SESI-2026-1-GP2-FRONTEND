const fotoInput = document.getElementById('foto-input');
const fotoTexto = document.getElementById('foto-texto');
const btnEnviar = document.getElementById('btn-enviar');
const descricao = document.getElementById('descricao');
const localizacao = document.getElementById('localizacao');
const categorias = document.getElementsByName('categoria');
const modal = document.getElementById('modalChamado');
const botaoFecharX = document.getElementById('btnFecharModal');
const botaoOutroChamado = document.getElementById('btnOutroChamado');

// Função criada para limpar todos os campos do chamado
function limparFormulario() {
    descricao.value = "";
    localizacao.value = "";

    for (const radio of categorias) {
        radio.checked = false;
    }
    
    
    fotoInput.value = "";
    
    fotoTexto.textContent = "Adicionar foto";
    fotoTexto.style.color = ""; 
}


fotoInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
        fotoTexto.textContent = `Foto: ${this.files[0].name}`;
        fotoTexto.style.color = "#6200ee";
    }
});


btnEnviar.addEventListener('click', function (event) {
    event.preventDefault(); // Impede qualquer comportamento padrão de recarregar a página
    
    let categoriaSelecionada = false;
    let valorCategoria = "";

    // Validação da categoria
    for (const radio of categorias) {
        if (radio.checked) {
            categoriaSelecionada = true;
            valorCategoria = radio.value;
            break;
        }
    }

    if (!categoriaSelecionada) {
        alert("Por favor, selecione a Categoria do Problema.");
        return;
    }

    // Validação da descrição
    if (descricao.value.trim() === "") {
        alert("Por favor, descreva o que aconteceu.");
        descricao.focus();
        return;
    }

    // Validação da localização
    if (localizacao.value === "") {
        alert("Por favor, selecione sua localização.");
        localizacao.focus();
        return;
    }

    // Se passou em todas as validações, simula o envio salvando no console
    console.log({
        categoria: valorCategoria,
        descricao: descricao.value,
        local: localizacao.value,
        foto: fotoInput.files[0] ? fotoInput.files[0].name : "Sem foto"
    });

    // Abre o pop-up de sucesso
    modal.classList.add('active'); 
    
    // Limpa a tela de fundo imediatamente para o próximo chamado
    limparFormulario();
});

// Fechar o pop-up no (X)
botaoFecharX.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Fechar no botão "Realizar outro chamado"
botaoOutroChamado.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Fechar se o usuário clicar no fundo escuro fora da caixa branca
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});