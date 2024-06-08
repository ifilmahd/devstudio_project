document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
        
        // Adjust the z-index dynamically
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.style.zIndex = "9999";
        } else {
            dropdownMenu.style.zIndex = "";
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.zIndex = ""; // Reset z-index when closing the dropdown
        }
    });

    // Language switching logic
    const languageLinks = document.querySelectorAll('.dropdown-item');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const languageCode = link.querySelector('i').classList[1].split('-')[1]; // Extracting the language code from the class
            changeLanguage(languageCode);
        });
    });

    // Function to change language
    function changeLanguage(languageCode) {
        // Save the selected language in localStorage
        localStorage.setItem('selectedLanguage', languageCode);

        // Update the URL to reflect the language change
        const currentUrl = window.location.href;
        const newUrl = new URL(currentUrl);
        newUrl.searchParams.set('lang', languageCode);
        window.history.pushState({ path: newUrl.href }, '', newUrl.href);

        // Reload the page with the new language
        window.location.href = `/${languageCode}/`;
    }

    // On page load, check if a language is saved in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const languageCode = urlParams.get('lang') || 'en'; // Default to 'en' if no language is set
        changeLanguage(languageCode);
    });
});
