            // INFORMAÇÕES GERAIS
            const inputSenha = document.querySelector('#senha');
            const inputConfirmar = document.querySelector('#senha-igual');
            const iconeOlho = document.querySelector('#iconeOlho');
            const iconeVer = document.querySelector('#iconeVer');
            let senhaValida = false; // Começa como falso

            

            //JS - VISUALIZAÇÃO DA SENHA / OLHINHO
            function toggleSenha() {
                if (inputSenha.type === 'password') {
                    inputSenha.type = 'text'; // mostra a senha
                    iconeOlho.src = "/svg/mostrar-senha.svg"; //troca o ícone
                } else {
                    inputSenha.type = 'password'; // Esconde a senha
                    iconeOlho.src = "/svg/ocultar-senha.svg"; // Volta o ícone inicial
                }
        }

           function toggleConfirmar() {
                if (inputConfirmar.type === 'password') {
                    inputConfirmar.type = 'text'; // mostra a senha
                    iconeVer.src = "/svg/mostrar-senha.svg"; //troca o ícone
                } else {
                    inputConfirmar.type = 'password'; // Esconde a senha
                    iconeVer.src = "/svg/ocultar-senha.svg"; // Volta o ícone inicial
                }
        }

        // VALIDANDO EM TEMPO REAL DA CRIAÇÃO DA SENHA
        inputSenha.addEventListener('input', () => {
            const valor = inputSenha.value;

            const regras = {
                caracteres: valor.length >= 8,
                maiuscula: /[A-Z]/.test(valor),
                numero: /[0-9]/.test(valor),
                especial: /[!@#$%&*(),.:{}|<>_-]/.test(valor)
            };
            
            // ATUALIZA O VISUAL DAS REGRAS
            atualizarVisualRegra('regra-caracteres', regras.caracteres);
            atualizarVisualRegra('regra-maiuscula', regras.maiuscula);
            atualizarVisualRegra('regra-numero', regras.numero);
            atualizarVisualRegra('regra-especial', regras.especial);

            // VÊ SE TODAS AS REGRAS FORAM ATINGIDAS
            senhaValida = Object.values(regras).every(v => v === true);
        });

        // *ESTUDAR E PROCURAR ENTENDER ESSE PEDAÇO DEPOIS
        function atualizarVisualRegra(id, ehValido) {
            const elemento = document.getElementById(id);
            if (ehValido) {
                elemento.classList.add('valido');
            } else {
                elemento.classList.remove('valido');
            }
}

// Lógica do Botão Continuar
document.querySelector('#btnContinuar').addEventListener('click', function(event) {
    event.preventDefault();

    const senha = inputSenha.value;
    const confirma = inputConfirmar.value;

    // 1. Verifica campos vazios
    if (senha === '' || confirma === '') {
        alert("Por favor, preencha os dois campos de senha.");
        return;
    }

    // 2. Verifica se as regras de segurança foram atingidas
    if (!senhaValida) {
        alert("Sua senha ainda não atende a todos os requisitos de segurança.");
        return;
    }

    // 3. Verifica se as senhas são iguais
    if (senha !== confirma) {
        alert("As senhas não coincidem. Verifique se digitou corretamente.");
        return;
    }

    //Recupera o email que foi cadastrado na tela anterior
    const emailVinculado = localStorage.getItem('emailEmCadastro');

    if (!emailVinculado) {
        alert("Erro: nenhum e-mail foi encontrado. Tente novamente.");
        window.location.href = "/pages/cadastropages/cadastro-funcionario.html";
        return;  
    }

    // salva a senha usando o email do usuario como chave
    localStorage.setItem(emailVinculado, senha);

    // limpa o email temporario e organiza
    localStorage.removeItem('emailEmCadastro');

    alert("Usuário cadastrado com sucesso!");

    // vai para pág. de login para testar o acesso
    window.location.href = "/pages/cadastropages/acesso.html";
});