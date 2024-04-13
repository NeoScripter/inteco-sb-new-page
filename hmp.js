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


// Expandable images 

function setupImageOverlay(selector) {
const expandables = document.querySelectorAll(selector);

    expandables.forEach(element => {
        element.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src; 
            const overlay = document.createElement('div');
            overlay.className = 'fullscreen-overlay';
            overlay.style.opacity = '0'; 
            overlay.style.transition = 'opacity 0.3s';

            const img = document.createElement('img');
            img.src = imgSrc;
            img.style.transform = 'scale(0)';
            img.style.transition = 'transform 0.5s';

            overlay.appendChild(img);
            document.body.appendChild(overlay);

            setTimeout(() => { 
                overlay.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, 200);

            overlay.addEventListener('click', function() {
                this.style.opacity = '0';
                img.style.transform = 'scale(0)';
                setTimeout(() => {
                    document.body.removeChild(this);
                }, 300);
            });
        });
    });
}

setupImageOverlay('.image-expandable');
setupImageOverlay('.review-expandable');

// Agreement carousel
setupOverlay(
    document.querySelector('.camera-mb-float-button'),
    document.querySelector('.mobile-overlay'),
    document.querySelectorAll('.mobile-image'),
    document.querySelector('.mobile-close')
);

setupOverlay(
    document.querySelector('.camera-float-button'),
    document.querySelector('.desktop-overlay'),
    document.querySelectorAll('.desktop-image'),
    document.querySelector('.desktop-close')
);

function setupOverlay(button, overlay, images, closeBtn) {
    let currentIndex = 0;

    button.addEventListener('click', () => {
        overlay.style.display = 'flex';
        showImage(currentIndex);
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    function showImage(index) {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
        images[index].addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }

    showImage(0);
}

// Youtube video button
function createVideoOverlay(videoPath) {
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    overlay.style.opacity = '0';
    overlay.style.display = 'flex'; 

    const video = document.createElement('video');
    video.setAttribute('src', videoPath);
    video.style.width = '90%';
    video.style.height = '90%';
    video.style.transform = 'scale(0)'; 
    video.setAttribute('controls', ''); 
    video.setAttribute('autoplay', ''); 

    const closeButton = document.createElement('div');
    closeButton.className = 'close-overlay';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.backgroundColor = '#fff';

    const closeBar1 = document.createElement('span');
    closeBar1.className = 'close-bar';
    closeBar1.style.position = 'absolute';
    closeBar1.style.height = '3px';
    closeBar1.style.width = '100%';
    closeBar1.style.backgroundColor = '#000';
    closeBar1.style.transform = 'rotate(45deg)';

    const closeBar2 = document.createElement('span');
    closeBar2.className = 'close-bar';
    closeBar2.style.position = 'absolute';
    closeBar2.style.height = '3px';
    closeBar2.style.width = '100%';
    closeBar2.style.backgroundColor = '#000';
    closeBar2.style.transform = 'rotate(-45deg)';

    closeButton.appendChild(closeBar1);
    closeButton.appendChild(closeBar2);

    setTimeout(() => {
        overlay.style.opacity = '1';
        video.style.transform = 'scale(1)'; 
    }, 200); 


    closeButton.addEventListener('click', function() {
        overlay.style.opacity = '0';
        video.style.transform = 'scale(0)';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    });

    // Prevent clicks on the video from propagating to the overlay
    video.addEventListener('click', function(event) {
        event.stopPropagation(); // This stops the click from reaching the overlay
    });

    overlay.appendChild(video);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        video.style.transform = 'scale(1)';
    }, 10);
}

// Example of setting up a trigger for the overlay
document.querySelectorAll('.video-play').forEach(button => {
    button.addEventListener('click', () => {
        createVideoOverlay('assets/video/trailer.mov');
    });
});

// Emerging webform 
const inviteBtns = document.querySelectorAll('.inv-btn');
const inviteWebform = document.querySelector('.invite-webform');

inviteBtns.forEach(button => {
    button.addEventListener('click', function() { 
        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-overlay';
        overlay.style.opacity = '0'; 
        overlay.style.transition = 'opacity 0.3s';
    
        inviteWebform.style.transform = 'scale(0)';
        inviteWebform.style.transition = 'transform 0.5s';
        inviteWebform.style.display = 'block';
    
        overlay.appendChild(inviteWebform);
        document.body.appendChild(overlay);
    
        setTimeout(() => { 
            overlay.style.opacity = '1';
            inviteWebform.style.transform = 'scale(1)';
        }, 200);
    
        // Здесь нужно будет добавить механизм закрытия формы и открытия блока с благодарностью в случае успешной валидации вебформы
        overlay.addEventListener('click', function() {
            this.style.opacity = '0';
            inviteWebform.style.transform = 'scale(0)';
            inviteWebform.style.display = 'none';
            setTimeout(() => {
                document.body.removeChild(this);
            }, 300);
        });
    });
});