/* ==================================================
    Language flag icon menu with localStorage
================================================== */
document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const langLinks = dropdownMenu.querySelectorAll('.dropdown-item');
    const currentLang = document.querySelector('.fi-gb');

    // Load saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
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
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.zIndex = "auto";
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
        if (lang === 'https://devstudioal.com/') {
            window.location.href = '/';
        } else {
            window.location.href = lang;
        }
    }
});
