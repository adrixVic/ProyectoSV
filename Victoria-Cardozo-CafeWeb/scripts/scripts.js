document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

function adjustCards() {
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        const width = cards[0].offsetWidth;
        cards.forEach(card => {
            card.style.height = `${width * 1.25}px`;
        });
    }
}

window.addEventListener('load', adjustCards);
window.addEventListener('resize', adjustCards);