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
let currentReviewIndex = 0;
const arrowLeftReview = document.querySelector('.arrow-left-review');
const arrowRightReview = document.querySelector('.arrow-right-review');
const reviews = document.querySelectorAll('.reviews-grid-group .review');
const reviewsArray = Array.from(reviews);

function updateReviewsDisplay() {
    reviewsArray.forEach(review => {
        review.classList.add('desktop');
    });
    reviewsArray[currentReviewIndex].style.opacity = '0';
    reviewsArray[currentReviewIndex].classList.remove('desktop');
    setTimeout(() => { 
        reviewsArray[currentReviewIndex].style.opacity = '1'; 
      }, 300);
}

updateReviewsDisplay();

arrowLeftReview.addEventListener('click', function() {
    currentReviewIndex = (currentReviewIndex === 0) ? reviewsArray.length - 1 : currentReviewIndex - 1;
    updateReviewsDisplay();
});

arrowRightReview.addEventListener('click', function() {
    currentReviewIndex = (currentReviewIndex + 1) % reviewsArray.length;
    updateReviewsDisplay(); 
});



// Team carousel 
let currentTeamIndex = 0;
const arrowLeftTeam = document.querySelector('.arrow-left-team');
const arrowRightTeam = document.querySelector('.arrow-right-team');
const teamMembers = document.querySelectorAll('.team-member');
const teamMembersArray = Array.from(teamMembers);

function updateteamMembersDisplay() {
    teamMembersArray.forEach(teamMember => {
        teamMember.classList.add('desktop');
    });
    teamMembersArray[currentTeamIndex].style.opacity = '0';
    teamMembersArray[currentTeamIndex].classList.remove('desktop');
    setTimeout(() => { 
        teamMembersArray[currentTeamIndex].style.opacity = '1'; 
      }, 300);
}

updateteamMembersDisplay();

arrowLeftTeam.addEventListener('click', function() {
    currentTeamIndex = (currentTeamIndex === 0) ? teamMembersArray.length - 1 : currentTeamIndex - 1;
    updateteamMembersDisplay();
});

arrowRightTeam.addEventListener('click', function() {
    currentTeamIndex = (currentTeamIndex + 1) % teamMembersArray.length;
    updateteamMembersDisplay(); 
});
