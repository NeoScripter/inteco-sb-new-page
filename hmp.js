
const emergingField = document.querySelector('.nav-emerging-par');

document.querySelectorAll('.nav-large-icon').forEach(socialLink => {
    socialLink.addEventListener('mouseenter', () => {
        emergingField.style.opacity = '1';
    });
    socialLink.addEventListener('mouseleave', () => {
        emergingField.style.opacity = '0'; 
    });
});

