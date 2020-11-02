//! Movement animation to happen
const cardEl = document.querySelector('.card');
const containerEl = document.querySelector('.container');
const titleEl = document.querySelector('.card__title');
const sneakerEl = document.querySelector('.card__sneaker img');
const purchaseEl = document.querySelector('.card__purchase');
const infoEl = document.querySelector('.card__info h3');
const sizesEl = document.querySelector('.card__sizes');

//! Moving animation event
containerEl.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    cardEl.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//! Animate In
containerEl.addEventListener('mouseenter', () => {
    cardEl.style.transition = 'none';
    //+ Pop-out effect
    titleEl.style.transform = 'translateZ(150px)';
    sneakerEl.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    infoEl.style.transform = 'translateZ(125px)';
    sizesEl.style.transform = 'translateZ(100px)';
    purchaseEl.style.transform = 'translateZ(75px)';
});

//! Animate Uut
containerEl.addEventListener('mouseleave', () => {
    cardEl.style.transition = 'all 0.5s ease-in-out';
    cardEl.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    //+ Pop-out effect
    titleEl.style.transform = 'translateZ(0)';
    sneakerEl.style.transform = 'translateZ(0) rotateZ(0)';
    infoEl.style.transform = 'translateZ(0)';
    sizesEl.style.transform = 'translateZ(0)';
    purchaseEl.style.transform = 'translateZ(0)';
});
