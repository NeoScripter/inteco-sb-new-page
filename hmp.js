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
/* document.querySelectorAll('.expand_button').forEach(button => {
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
}); */

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


// Team member carousels 
const teamGridGroup = document.querySelector('.team-grid-group');
const teamMembers = document.querySelectorAll('.team-member');
let offset = 0;
let startX; 

function changeMember(direction) {
    offset = (direction === 'right' ? offset + 1 : offset - 1 + teamMembers.length) % teamMembers.length;
    teamGridGroup.style.transform = `translateX(-${offset * (100 / teamMembers.length)}%)`;
}

document.querySelector('.arrow-right-team').addEventListener('click', () => {
    changeMember('right');
});

document.querySelector('.arrow-left-team').addEventListener('click', () => {
    changeMember('left');
});

teamGridGroup.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; 
}, false);

teamGridGroup.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;  
    const threshold = 50;  

    if (startX - endX > threshold) {
        changeMember('right');
    } else if (endX - startX > threshold) {
        changeMember('left');
    }
}, false);

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        offset = 0; 
        teamGridGroup.style.transform = 'translateX(0)';
    }
});

// Review carousels 
const reviewGridGroup = document.querySelector('.reviews-grid-group');
const reviews = document.querySelectorAll('.review');
let offsetReviews = 0;
let reviewStartX; 

function changeReview(direction) {
    offset = (direction === 'right' ? offset + 1 : offset - 1 + reviews.length) % reviews.length;
    reviewGridGroup.style.transform = `translateX(-${offset * (100 / reviews.length)}%)`;
}

document.querySelector('.arrow-left-review').addEventListener('click', () => {
    changeReview('right');
});

document.querySelector('.arrow-right-review').addEventListener('click', () => {
    changeReview('left');
});

reviewGridGroup.addEventListener('touchstart', (e) => {
    reviewStartX = e.touches[0].clientX; 
}, false);

reviewGridGroup.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;  
    const threshold = 50;  

    if (reviewStartX - endX > threshold) {
        changeReview('right');
    } else if (endX - reviewStartX > threshold) {
        changeReview('left');
    }
}, false);

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        offsetReviews = 0; 
        reviewGridGroup.style.transform = 'translateX(0)';
    }
});