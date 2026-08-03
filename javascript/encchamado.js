document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ALTERNÂNCIA DE SELEÇÃO DOS CARDS DE CHAMADOS
    const ticketCards = document.querySelectorAll(".ticket-card");
    
    ticketCards.forEach(card => {
        card.addEventListener("click", () => {
            // Remove o estado ativo de todos os cards
            ticketCards.forEach(c => c.classList.remove("active"));
            
            // Adiciona a classe ativa ao card clicado
            card.classList.add("active");
        });
    });

    // 2. ALTERNÂNCIA DE CORES NOS CARDS DOS TÉCNICOS
    const techRadioButtons = document.querySelectorAll('.tech-card input[type="radio"]');
    
    techRadioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            // Remove a classe 'selected' de todos os containers de técnicos
            document.querySelectorAll('.tech-card').forEach(card => {
                card.classList.remove("selected");
            });
            
            // Adiciona apenas no elemento pai do radio que foi marcado
            if (radio.checked) {
                radio.closest('.tech-card').classList.add("selected");
            }
        });
    });

    // 3. EVENTO DO BOTÃO DE ENCAMINHAR
    const btnEncaminhar = document.getElementById("btnEncaminhar");
    btnEncaminhar.addEventListener("click", () => {
        const chamadoAtivo = document.querySelector(".ticket-card.active h3")?.innerText || "Nenhum";
        const tecnicoSelecionado = document.querySelector('input[name="tecnico"]:checked')?.value;
        
        alert(`Sucesso! O chamado "${chamadoAtivo}" foi encaminhado.`);
    });
});
