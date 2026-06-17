    // 1. Seleção de elementos
        const inputEmail = document.querySelector('#email');
        const inputSenha = document.querySelector('#senha');
        const iconeOlho = document.querySelector('#iconeOlho');
        const checkLembrar = document.querySelector('#check-lembrar');
        const btnEntrar = document.querySelector('#btnEntrar');
        const inputTipoUsuario = document.querySelector('#tipo-usuario-input');

        const tituloPrincipal = document.querySelector('.card h3');
        const subtitulo = document.querySelector('.card h4');

    // 2. JS - VISUALIZAÇÃO DA SENHA / OLHINHO
        function toggleSenha() {
            if (inputSenha.type === 'password') {
                inputSenha.type = 'text'; // mostra a senha
             iconeOlho.src = "/svg/mostrar-senha.svg"; //troca o ícone
            } else {
                inputSenha.type = 'password'; // Esconde a senha
             iconeOlho.src = "/svg/ocultar-senha.svg"; // Volta o ícone inicial
            }
        }

    // 3. AO CARREGAR A PÁGINA: Altera os textos com base no localStorage
    window.onload = () => {
        // Carrega o email salvo no "Lembre de mim"
        const emailSalvo = localStorage.getItem('emailLembrado');
        if (emailSalvo) {
            inputEmail.value = emailSalvo;
            checkLembrar.checked = true;
        }

        // ALTERADO: Agora busca a escolha salva no localStorage pela tela anterior
        const tipoUsuario = localStorage.getItem('tipoUsuario'); 

        if (tipoUsuario) {
            // Preenche o campo oculto que o back-end vai ler depois
            inputTipoUsuario.value = tipoUsuario;

            // Personaliza as mensagens da tela de acordo com o perfil
            if (tipoUsuario === 'adm') {
                tituloPrincipal.textContent = "Área Administrativa";
                subtitulo.textContent = "Faça o login para gerenciar o sistema";
            } else if (tipoUsuario === 'funcionario') {
                tituloPrincipal.textContent = "Área do Funcionário";
                subtitulo.textContent = "Faça o login para abrir seus chamados";
            } else if (tipoUsuario === 'tecnico') {
                tituloPrincipal.textContent = "Área do Técnico";
                subtitulo.textContent = "Faça o login para receber seus chamados";
            }
        }
    };

    // 4. LÓGICA DE LOGIN (CLIQUE ÚNICO)
    document.querySelector('#form-login').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = inputEmail.value;
        const senhaDigitada = inputSenha.value;
        const tipoIdentificado = inputTipoUsuario.value;

        let loginValido = false;

        // CORREÇÃO: Validação rigorosa por perfil selecionado
        if (tipoIdentificado === 'adm') {
            const emailAdmFixo = "adm@helpyfast.com";
            const senhaAdmFixa = "Adm.1234";

            // Se for a rota ADM, exige estritamente os dados fixos
            if (email === emailAdmFixo && senhaDigitada === senhaAdmFixa) {
                loginValido = true;
            } else {
                alert("E-mail ou senha de Administrador incorretos!");
                return; 
            }
        } else {
            // Se for funcionário ou técnico, busca no localStorage pela chave do e-mail
            const senhaCadastradaPeloAdm = localStorage.getItem(email);

            if (senhaCadastradaPeloAdm && senhaDigitada === senhaCadastradaPeloAdm) {
                loginValido = true;
            } else {
                alert("Usuário não cadastrado ou senha incorreta!");
                return; 
            }
        }

        // Se o login for válido, finaliza o processo
        if (loginValido) {
            if (checkLembrar.checked) {
                localStorage.setItem('emailLembrado', email);
            } else {
                localStorage.removeItem('emailLembrado');
            }
            
            console.log(`Dados enviados: Email: ${email}, Tipo de Usuario: ${tipoIdentificado}`);

            alert("Login realizado com sucesso. Bem-vindo(a)!");
            
            // DICA: Você pode mudar o redirecionamento dependendo do perfil se quiser
            if (tipoIdentificado === 'adm') {
                window.location.href = "dashboard_adm.html"; // Página do administrador
            } else {
                window.location.href = "/pages/homepages/home.html"; // Página comum
            }
        }
    });