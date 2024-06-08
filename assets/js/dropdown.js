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

langLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action of the link
            const selectedLang = this.getAttribute('href'); // Get the href attribute of the clicked link
            console.log(selectedLang); // Log the selected language to verify it's correct
            // Perform any other actions you need here, such as setting the language
        });
    });
});
