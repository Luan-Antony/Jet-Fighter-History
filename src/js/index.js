document.addEventListener('DOMContentLoaded', () => {
    const countryDisplay = document.querySelector('.country-display');
    const countryList = document.querySelector('.country-list');

    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const slider = document.querySelectorAll('.slider');

    let currentGroup = 0;
    let slideNumber = 0;

    function setInitialSlide() {
        countryDisplay.firstChild.textContent = 'United States';
        countryList.classList.add('hidden');
        countryDisplay.classList.remove('active');

        const activeGroup = slider[currentGroup];
        activeGroup.classList.add('ativo');
        
        const slides = activeGroup.querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideNumber].classList.add('active');
    }

    setInitialSlide();

    nextBtn.onclick = () => {
        if (currentGroup === null) return;

        const slides = slider[currentGroup].querySelectorAll('.slide');

        if (slideNumber >= slides.length - 1) {
            return;
        }

        slides[slideNumber].classList.remove('active');
        slideNumber++;

        slides[slideNumber].classList.add('active');
    };

    prevBtn.onclick = () => {
        if (currentGroup === null) return;

        const slides = slider[currentGroup].querySelectorAll('.slide');

        if (slideNumber <= 0) {
            return;
        }

        slides[slideNumber].classList.remove('active');
        slideNumber--;

        slides[slideNumber].classList.add('active');
    };

    // Menu de países
    countryDisplay.addEventListener('click', () => {
        countryList.classList.toggle('hidden');
        countryDisplay.classList.toggle('active');
    });

    countryList.addEventListener('click', (event) => {
        if (event.target.classList.contains('country')) {
            countryDisplay.firstChild.textContent = event.target.textContent;

            countryList.classList.add('hidden');
            countryDisplay.classList.remove('active');

            changeSlide();
        }
    });

    function changeSlide() {
        const countryIndex = {
            'United States': 0,
            'United Kingdom': 1,
            'Russia': 2,
            'Sweden': 3,
            'France': 4
        };
    
        slider.forEach(slide => slide.classList.remove('ativo'));
    
        const country = countryDisplay.firstChild.textContent;
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
