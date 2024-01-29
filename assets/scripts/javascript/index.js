const btnOpenAndClosePlatforms = window.document.getElementsByClassName('btn-plataforma');
const platforms = window.document.getElementsByClassName('plataformas');
console.log(platforms[1]);

btnOpenAndClosePlatforms[0].addEventListener('click', () => {
    if(platforms[1].classList.contains('ativo')) {
        platforms[1].classList.remove('ativo');
    } else if(!platforms[1].classList.contains('ativo')) {
        platforms[1].classList.add('ativo');
    };
});
