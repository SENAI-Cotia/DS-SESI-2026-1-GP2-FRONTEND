//script para salvar a escolha antes de mudar de página
  function definirTipo(tipo) {
            // salva a informação de quem que está indo para próxima página
            localStorage.setItem('tipoUsuario', tipo);
            
            // vai para tela de login
            window.location.href = '/pages/loginpages/login.html';
        }