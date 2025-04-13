// Get the Back to Top button
const backToTopButton = document.getElementById('backToTop');

// Show the button when the user scrolls down 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll back to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Store user preferences in localStorage
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Retrieve user preferences from localStorage
function getPreference(key) {
    return localStorage.getItem(key);
}

// Apply animation when a button is clicked
const animatedElement = document.getElementById('animatedElement');
const triggerAnimationButton = document.getElementById('triggerAnimation');

triggerAnimationButton.onclick = function () {
    animatedElement.classList.add('animate');
    savePreference('animationTriggered', 'true');

    // Remove the animation class after it completes
    setTimeout(() => {
        animatedElement.classList.remove('animate');
    }, 1000); // Match the animation duration in CSS
};

// Check if animation was previously triggered
if (getPreference('animationTriggered') === 'true') {
    animatedElement.textContent = 'Animation was triggered before!';
}