// Navigation large icon section

const emergingField = document.querySelector('.nav-emerging-par');
const emergingCatalog = document.querySelector('.catalog-emerging-ctn');
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

burgerMenuOpen.addEventListener('click', closeMenu);

function closeMenu() {
    burgerMenuClosed.style.display = 'block';
    burgerMenuOpen.style.display = 'none';
    mobileExpandedNav.classList.remove('active');
    phoneNumberMobileNav.style.display = 'inline';
}

document.addEventListener('click', (event) => {
    if (!mobileExpandedNav.contains(event.target) && !burgerMenuClosed.contains(event.target) && mobileExpandedNav.classList.contains('active')) {
        closeMenu();
    }
});

mobileExpandedNav.addEventListener('click', (event) => {
    event.stopPropagation();
});

burgerMenuClosed.addEventListener('click', (event) => {
    event.stopPropagation();
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

// Team and reviews carousel 

let currentReviewIndex = 0;
let currentTeamIndex = 0;

const reviews = document.querySelectorAll('.reviews-grid-group .review');
const teamMembers = document.querySelectorAll('.team-member');

const arrowLeftReview = document.querySelector('.arrow-left-review');
const arrowRightReview = document.querySelector('.arrow-right-review');
const arrowLeftTeam = document.querySelector('.arrow-left-team');
const arrowRightTeam = document.querySelector('.arrow-right-team');

function updateDisplayElements(elements, index) {
    elements.forEach((element, idx) => {
        element.classList.toggle('desktop', idx !== index);
        element.style.opacity = idx === index ? '0' : '1';
    });
    setTimeout(() => { 
        elements[index].style.opacity = '1'; 
    }, 300);
}

function addSwipeFunctionality(selector, updateIndexCallback) {
    const swipeContainer = document.querySelector(selector);
    let touchStartX = 0;

    swipeContainer.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, false);

    swipeContainer.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        const threshold = 50; 

        if (touchEndX + threshold < touchStartX) {
            updateIndexCallback(true);
        } else if (touchEndX > touchStartX + threshold) {
            updateIndexCallback(false);
        }
    }, false);
}

function navigateReviews(next) {
    const elementsArray = Array.from(reviews);
    currentReviewIndex = next ? (currentReviewIndex + 1) % elementsArray.length : 
        (currentReviewIndex === 0 ? elementsArray.length - 1 : currentReviewIndex - 1);
    updateDisplayElements(elementsArray, currentReviewIndex);
}

function navigateTeamMembers(next) {
    const elementsArray = Array.from(teamMembers);
    currentTeamIndex = next ? (currentTeamIndex + 1) % elementsArray.length : 
        (currentTeamIndex === 0 ? elementsArray.length - 1 : currentTeamIndex - 1);
    updateDisplayElements(elementsArray, currentTeamIndex);
}

addSwipeFunctionality('.reviews-grid-group', navigateReviews);
addSwipeFunctionality('.team-grid-group', navigateTeamMembers);

updateDisplayElements(Array.from(reviews), currentReviewIndex);
updateDisplayElements(Array.from(teamMembers), currentTeamIndex);

arrowRightReview.addEventListener('click', function() {
    currentReviewIndex = (currentReviewIndex === 0) ? reviews.length - 1 : currentReviewIndex - 1;
    updateDisplayElements(reviews, currentReviewIndex);
});

arrowLeftReview.addEventListener('click', function() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateDisplayElements(reviews, currentReviewIndex);
});

arrowLeftTeam.addEventListener('click', function() {
    currentTeamIndex = (currentTeamIndex === 0) ? teamMembers.length - 1 : currentTeamIndex - 1;
    updateDisplayElements(teamMembers, currentTeamIndex);
});

arrowRightTeam.addEventListener('click', function() {
    currentTeamIndex = (currentTeamIndex + 1) % teamMembers.length;
    updateDisplayElements(teamMembers, currentTeamIndex);
});