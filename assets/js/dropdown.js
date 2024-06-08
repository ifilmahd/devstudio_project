document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const languageLinks = document.querySelectorAll('.dropdown-item');

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
    languageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const languageCode = link.dataset.language; // Extract language code from data-language attribute
            changeLanguage(languageCode);
        });
    });

    // Function to change language
    function changeLanguage(languageCode) {
        // Save the selected language in localStorage
        localStorage.setItem('selectedLanguage', languageCode);

        // Update the displayed language
        updatePageLanguage(languageCode);
    }

    // Function to update the displayed language
    function updatePageLanguage(languageCode) {
        // Determine the base URL based on the selected language
        let baseUrl = window.location.origin;
        if (languageCode !== 'en') {
            baseUrl += `/${languageCode}`;
        }
    }

    // On page load, check if a language is saved in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        updatePageLanguage(savedLanguage);
    }
});
