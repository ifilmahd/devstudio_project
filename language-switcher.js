// language-switcher.js

document.addEventListener('DOMContentLoaded', function () {
    const languageLinks = document.querySelectorAll('.language-switch');
    const userLanguage = localStorage.getItem('preferredLanguage');

    // Set initial language based on localStorage
    if (userLanguage) {
        changeLanguage(userLanguage);
    }

    // Add event listeners to language links
    languageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedLanguage = this.getAttribute('data-language');
            localStorage.setItem('preferredLanguage', selectedLanguage);
            changeLanguage(selectedLanguage);
        });
    });

    function changeLanguage(language) {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace(/\/(en|it|al|de)\//, `/${language}/`);
        
        if (currentUrl !== newUrl) {
            window.location.href = newUrl;
        }
    }
});
