 document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const mainScreen = document.querySelector('.main-screen');
    const successScreen = document.getElementById('successScreen');
    const particlesContainer = document.querySelector('.particles-container');

    // Removemos a referência ao 'declarationContainer' no JS, pois as animações de texto
    // são controladas diretamente pelas classes CSS aplicadas aos elementos de texto.
    // O 'mainScreen' já começa com opacidade 0 e tem um fadeIn no CSS.

    // ----------------------------------------------------
    // Lógica da Declaração
    // ----------------------------------------------------

    // Função para mostrar a tela de sucesso e iniciar a animação
    function showSuccess() {
        // 1. Esconde a tela principal
        mainScreen.classList.add('hidden');
        
        // 2. Mostra a tela de sucesso
        successScreen.classList.remove('hidden');

        // 3. Inicia a chuva de corações/confetes
        startConfetti();
    }

    // Ambos os botões (SIM e NÃO) agora levam à tela de sucesso
    yesBtn.addEventListener('click', showSuccess);
    noBtn.addEventListener('click', showSuccess);

    // ----------------------------------------------------
    // Animação de Partículas (Chuva de Corações)
    // ----------------------------------------------------
    function startConfetti() {
        const numParticles = 50; // Número de partículas

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Posição inicial (em cima da tela, aleatoriamente na largura)
            particle.style.left = `${Math.random() * 100}vw`;
            
            // Atraso para cair em momentos diferentes
            particle.style.animationDelay = `${Math.random() * 5}s`; 
            
            // Duração da animação
            particle.style.animationDuration = `${5 + Math.random() * 5}s`; // Varia entre 5 e 10 segundos

            particlesContainer.appendChild(particle);
        }
    }
});