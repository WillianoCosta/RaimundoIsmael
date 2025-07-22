document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active'); // Adiciona/remove a classe para a animação do hamburger
    });

    // Fechar o menu ao clicar em um item (apenas para mobile)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Suavizar o scroll para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});