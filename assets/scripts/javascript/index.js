const btnOpenAndClosePlatforms = document.querySelector('.btn-plataforma');
const platforms = document.querySelector('.btn-plataforma .plataformas');

btnOpenAndClosePlatforms.addEventListener('click', () => {
    platforms.classList.toggle('ativo');
});

