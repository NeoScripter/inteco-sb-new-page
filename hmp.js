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

// Expanding mobile menu
const mobileExpandedNav = document.querySelector('.nav-mb-unfolding-menu');
const burgerMenuOpen = document.querySelector('.burger-menu-open');
const burgerMenuClosed = document.querySelector('.burger-menu-closed');
const phoneNumberMobileNav = document.querySelector('.mb-nav-phone-link');

burgerMenuClosed.addEventListener('click', () => {
    burgerMenuClosed.style.display = 'none';
    burgerMenuOpen.style.display = 'block';
    mobileExpandedNav.style.display = 'block';
    phoneNumberMobileNav.style.display = 'none';
});

burgerMenuOpen.addEventListener('click', () => {
    burgerMenuClosed.style.display = 'block';
    burgerMenuOpen.style.display = 'none';
    mobileExpandedNav.style.display = 'none';
    phoneNumberMobileNav.style.display = 'inline';

});

// Coping the phone number to clipboard
const phoneLinks = document.querySelectorAll('.copy-phone');

phoneLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const phoneNumber = this.getAttribute('data-phone');
        if (!phoneNumber) return;

        navigator.clipboard.writeText(phoneNumber).then(() => {
            this.textContent = 'Скопировано!'
            setTimeout(() => { this.textContent = `${phoneNumber}`; }, 1500);
        }).catch(err => {
            console.error('Не удалось скопировать номер: ', err);
        });
    });
});

// Coping the email to clipboard
const emailLinks = document.querySelectorAll('.copy-email');

emailLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const emailAddress = this.getAttribute('data-email');
        if (!emailAddress) return;

        navigator.clipboard.writeText(emailAddress).then(() => {
            this.textContent = 'Скопировано!'
            setTimeout(() => { this.textContent = `${emailAddress}`; }, 1500);
        }).catch(err => {
            console.error('Не удалось скопировать емаил: ', err);
        });
    });
});