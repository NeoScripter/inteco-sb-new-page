// Navigation large icon section

const emergingField = document.querySelector('.nav-emerging-par');
const emergingCatalog = document.querySelector('.catalog-emerging-wrapper');
const emergingCatalogChild = document.querySelector('.catalog-emerging');
const firstNavItem = document.querySelector('.list-item-underline');

document.querySelectorAll('.nav-large-icon').forEach(socialLink => {
    socialLink.addEventListener('mouseenter', () => {
        emergingField.style.opacity = '1';
    });
    socialLink.addEventListener('mouseleave', () => {
        emergingField.style.opacity = '0'; 
    });
});

firstNavItem.addEventListener('mouseenter', () => {
    emergingCatalog.style.visibility = 'visible';
});
firstNavItem.addEventListener('mouseleave', () => {
    setTimeout(() => {
    emergingCatalog.style.visibility = 'hidden'; 
    }, 200);
});

emergingCatalogChild.addEventListener('mouseenter', () => {
    setTimeout(() => {
        emergingCatalog.style.visibility = 'visible'; 
        }, 200);
});
emergingCatalogChild.addEventListener('mouseleave', () => {
    setTimeout(() => {
    emergingCatalog.style.visibility = 'hidden'; 
    }, 200);
});


// Reviews sections gradually appearing and disappearing
document.querySelectorAll('.expand_button').forEach(button => {
    button.addEventListener('click', function() {
        const review = this.previousElementSibling;
        const expandedText = review.querySelector('.expanded');
        const ellipsis = review.querySelector('.ellipsis');

        if (expandedText.style.display === "none" || !expandedText.style.display) {
            expandedText.style.display = 'inline';
            setTimeout(() => { 
                expandedText.style.opacity = '1'; 
              }, 150);
            ellipsis.style.display = 'none';
            this.textContent = 'Скрыть';
            button.style.setProperty('--expand-button-after-width', '23%');
        } else {
            expandedText.style.opacity = '0'; 
            setTimeout(() => { 
                expandedText.style.display = 'none';
                ellipsis.style.display = 'inline';
                this.textContent = 'Читать весь отзыв';
                button.style.removeProperty('--expand-button-after-width');
              }, 150);
        }
    });
});

// Expanding mobile menu
const mobileExpandedNav = document.querySelector('.nav-mb-unfolding-menu');
const burgerMenuOpen = document.querySelector('.burger-menu-open');
const burgerMenuClosed = document.querySelector('.burger-menu-closed');
const phoneNumberMobileNav = document.querySelector('.mb-nav-phone-link');

burgerMenuClosed.addEventListener('click', () => {
    burgerMenuClosed.style.display = 'none';
    burgerMenuOpen.style.display = 'block';
    mobileExpandedNav.classList.add('active');
    phoneNumberMobileNav.style.display = 'none';
});

burgerMenuOpen.addEventListener('click', () => {
    burgerMenuClosed.style.display = 'block';
    burgerMenuOpen.style.display = 'none';
    mobileExpandedNav.classList.remove('active'); 
    phoneNumberMobileNav.style.display = 'inline';
});


// Coping the phone number to clipboard
const phoneLinks = document.querySelectorAll('.copy-phone');

phoneLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.classList.contains('disabled-link')) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        this.classList.add('disabled-link');

        const targetElement = event.target.closest('.copy-phone');

        const phoneNumber = targetElement.getAttribute('data-phone');
        const textContainer = targetElement.querySelector('.phone-text') || targetElement.nextElementSibling.querySelector('.phone-text');

        if (!phoneNumber) return;

        navigator.clipboard.writeText(phoneNumber).then(() => {
            const originalText = textContainer.textContent;
            textContainer.textContent = 'Скопировано!';
            
            setTimeout(() => {
                textContainer.textContent = originalText;
                this.classList.remove('disabled-link');
            }, 1200); 
        }).catch(err => {
            console.error('Не удалось скопировать номер: ', err);
            this.classList.remove('disabled-link');
        });
    });
});



// Coping the email to clipboard

const emailLinks = document.querySelectorAll('.copy-email');

emailLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.classList.contains('disabled-link')) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        this.classList.add('disabled-link');

        const targetElement = event.target.closest('.copy-email');

        const phoneNumber = targetElement.getAttribute('data-email');
        const textContainer = targetElement.querySelector('.email-text') || targetElement.nextElementSibling.querySelector('.email-text');

        if (!phoneNumber) return;

        navigator.clipboard.writeText(phoneNumber).then(() => {
            const originalText = textContainer.textContent;
            textContainer.textContent = 'Скопировано!';
            
            setTimeout(() => {
                textContainer.textContent = originalText;
                this.classList.remove('disabled-link');
            }, 1200); 
        }).catch(err => {
            console.error('Не удалось скопировать номер: ', err);
            this.classList.remove('disabled-link');
        });
    });
});

// Review carousel 
let currentIndex = 0;
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const reviews = document.querySelectorAll('.reviews-grid-group .review');
const reviewsArray = Array.from(reviews);

function updateReviewsDisplay() {
    reviewsArray.forEach(review => {
        review.classList.add('desktop');
    });
    reviewsArray[currentIndex].style.opacity = '0';
    reviewsArray[currentIndex].classList.remove('desktop');
    setTimeout(() => { 
        reviewsArray[currentIndex].style.opacity = '1'; 
      }, 300);
}

updateReviewsDisplay();

arrowLeft.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? reviewsArray.length - 1 : currentIndex - 1;
    updateReviewsDisplay();
});

arrowRight.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % reviewsArray.length;
    updateReviewsDisplay(); 
});
