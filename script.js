document.getElementById('scrollButton').addEventListener('click', function() {
    // Rola suavemente para o conteúdo principal
    document.getElementById('main').scrollIntoView({ behavior: 'smooth' });

    // Aplica a classe para animar o main
    setTimeout(() => {
        document.getElementById('main').classList.add('visible');
    }, 300); // Delay para sincronizar com o scroll
});
