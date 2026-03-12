

// 2. Sistema de XP com Persistência (Vanilla JS)
function atualizarXPDisplay() {
    const totalXP = localStorage.getItem('total_xp') || 0;
    document.getElementById('total-xp').innerText = totalXP;
}

function ganharXP() {
    let atual = parseInt(localStorage.getItem('total_xp') || 0);
    atual += 100;
    localStorage.setItem('total_xp', atual);
    
    atualizarXPDisplay();
    
    // Efeito Visual de Feedback
    const btn = document.querySelector('.main-cta');
    btn.innerHTML = "<i class='fas fa-check'></i> Forjando...";
    setTimeout(() => {
        btn.innerHTML = "Começar Gratuitamente";
    }, 1500);

    // Lógica de "Level Up" simples
    if(atual >= 500) {
        document.querySelector('.logo').style.color = "#a855f7"; // Muda cor da logo no LVL UP
    }
}

// Inicializa o valor ao carregar a página
atualizarXPDisplay();