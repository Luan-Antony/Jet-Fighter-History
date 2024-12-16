document.addEventListener('DOMContentLoaded', () => {
    const botaoPrincipal = document.querySelector('.botao-principal');
    const countryList = document.querySelector('.country-list');

    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const slider = document.querySelectorAll('.slider');

    let currentGroup = null;
    let slideNumber = 0;

    nextBtn.onclick = () => {
        if (currentGroup=== null) return;

        const slides = slider[currentGroup].querySelectorAll('.slide');

        if (slideNumber >= slides.length - 1) {
            return;
        }

        slides[slideNumber].classList.remove('active');
        slideNumber++;

        slides[slideNumber].classList.add('active');
    };

    prevBtn.onclick = () => {
        if (currentGroup=== null) return;

        const slides = slider[currentGroup].querySelectorAll('.slide');

        if (slideNumber <= 0) {
            return;
        }

        slides[slideNumber].classList.remove('active');
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
            'Welcome': 0,
            'United States': 1,
            'United Kingdom': 2,
            'Russia': 3,
            'Sweden': 4,
            'French': 5
        };
    
        slider.forEach(slide => slide.classList.remove('ativo'));
    
        const country = botaoPrincipal.firstChild.textContent;
        const index = countryIndex[country];
        if (index !== undefined) {
            currentGroup = index;
            const activeGroup = slider[currentGroup];
            activeGroup.classList.add('ativo');

            slideNumber = 0;
            const slides = activeGroup.querySelectorAll('.slide');
            slides.forEach(slide => slide.classList.remove('active'));
            slides[slideNumber].classList.add('active');
        }
    }
});

