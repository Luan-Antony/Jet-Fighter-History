const botaoPrincipal = document.querySelector('.botao-principal');
const countryList = document.querySelector('.country-list');

botaoPrincipal.addEventListener('click', () => {
    countryList.classList.toggle('hidden');
    botaoPrincipal.classList.toggle('active');
});

countryList.addEventListener('click', (event) => {
    if (event.target.classList.contains('country')) {
        botaoPrincipal.firstChild.textContent = event.target.textContent;

        countryList.classList.add('hidden');
        botaoPrincipal.classList.remove('active');
    }
});
