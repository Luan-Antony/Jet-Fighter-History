document.addEventListener('DOMContentLoaded', () => {
    const botaoPrincipal = document.querySelector('.botao-principal');
    const countryList = document.querySelector('.country-list');

    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelectorAll('.slider');


    let slideNumber = 0;

    nextBtn.onclick = () => {
        if (slideNumber >= slides.length - 1) {
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

            changeSlide();
        }
    });

    function changeSlide() {
        const countryIndex = {
            'United States': 0,
            'United Kingdom': 1,
            'Russia': 2,
            'Sweden': 3,
            'French': 4
        };
    
        slider.forEach(slide => slide.classList.remove('ativo'));
    
        const country = botaoPrincipal.firstChild.textContent;
        const index = countryIndex[country];
        if (index !== undefined) {
            slider[index].classList.add('ativo');
        }
    }
});

