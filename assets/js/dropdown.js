/* ==================================================
    Language flag icon menu with localStorage
================================================== */
document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const langLinks = dropdownMenu.querySelectorAll('.dropdown-item');
    
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && window.location.pathname !== new URL(savedLang, window.location.origin).pathname) {
        window.location.href = savedLang;
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
        const currentLang = window.location.pathname.split('/')[1]; // Extract current language
        const newLang = lang.split('/')[3]; // Extract selected language
        if (currentLang !== newLang) {
            const newUrl = new URL(lang, window.location.origin).href;
            localStorage.setItem('preferredLanguage', newLang);
            window.location.href = newUrl; // Redirect to the selected language page
        }
    }
});
