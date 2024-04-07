// Navigation large icon section

const emergingField = document.querySelector('.nav-emerging-par');

document.querySelectorAll('.nav-large-icon').forEach(socialLink => {
    socialLink.addEventListener('mouseenter', () => {
        emergingField.style.opacity = '1';
    });
    socialLink.addEventListener('mouseleave', () => {
        emergingField.style.opacity = '0'; 
    });
});


// Reviews sections gradually appearing and disappearing
document.querySelectorAll('.expand_button').forEach(button => {
    button.addEventListener('click', function() {
        const review = this.previousElementSibling;
        const expandedText = review.querySelector('.expanded');
        const ellipsis = review.querySelector('.ellipsis');

        // Toggle visibility
        if (expandedText.style.display === "none" || !expandedText.style.display) {
            expandedText.style.display = 'inline';
            setTimeout(() => { 
                expandedText.style.opacity = '1'; 
              }, 150);
            ellipsis.style.display = 'none';
            this.textContent = 'Скрыть';
            button.style.setProperty('--expand-button-after-width', '18%');
        } else {
            expandedText.style.opacity = '0'; 
            setTimeout(() => { 
                expandedText.style.display = 'none';
                ellipsis.style.display = 'inline';
                this.textContent = 'Читать полностью';
                button.style.removeProperty('--expand-button-after-width');
              }, 150);
        }
    });
});
