const botaoPrincipal = document.querySelector('.botao-principal');
const countryList = document.querySelector('.country-list');

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;


let slideNumber = 0;

nextBtn.onclick = () => {
    if (slideNumber >= numberOfSlides - 1) {
        return;
    }

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    slides[slideNumber].classList.add('active');
};

prevBtn.onclick = () => {
    if (slideNumber <= 0) {
        return;
    }

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    slides[slideNumber].classList.add('active');
};



//Menu de paises
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
