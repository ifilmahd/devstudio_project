/* ==================================================
    Language flag icon menu with localStorage
================================================== */
document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const langLinks = dropdownMenu.querySelectorAll('.dropdown-item');

    // Helper function to get the base language path
    function getBaseLanguagePath(path) {
        const parts = path.split('/');
        return parts.length > 1 ? `/${parts[1]}/` : '/';
    }

    // Load saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        const savedLangBase = getBaseLanguagePath(savedLang);
        const currentLangBase = getBaseLanguagePath(window.location.pathname);
        if (currentLangBase === '/' && savedLangBase === '/it/') {
            window.location.href = savedLang; // Redirect to the Italian language page
        } else if (!window.location.pathname.startsWith(savedLangBase)) {
            window.location.href = savedLang; // Redirect to the saved language page if not already there
        }
    }

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
        
        // Adjust the z-index dynamically
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.style.zIndex = "9999";
        } else {
            dropdownMenu.style.zIndex = "auto";
        }
    });

    langLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute('href');
            setLanguage(selectedLang);
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.zIndex = "auto"; // Reset z-index when closing the dropdown
        }
    });

    function setLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
        const selectedLangBase = getBaseLanguagePath(lang);
        const currentLangBase = getBaseLanguagePath(window.location.pathname);
        if (!window.location.pathname.startsWith(selectedLangBase)) {
            window.location.href = lang; // Redirect to the selected language page if not already there
        }
    }
});
