document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('#currentLanguage');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const languageLinks = document.querySelectorAll('.dropdown-item');

    // Event listener for the dropdown toggle
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Event listener for language change
    languageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const languageCode = link.getAttribute('data-lang');
            changeLanguage(languageCode);
        });
    });

    // Function to change language
    function changeLanguage(languageCode) {
        // Save the selected language in localStorage
        localStorage.setItem('selectedLanguage', languageCode);

        // Update the displayed language
        updateDropdownIcon(languageCode);

        // Load the new language page
        window.location.href = `/${languageCode}/index.html`;
    }

    // Function to update the dropdown icon
    function updateDropdownIcon(languageCode) {
        const iconClass = `fi fi-${languageCode}`;
        dropdownToggle.querySelector('i').className = iconClass;
    }

    // On page load, check if a language is saved in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        updateDropdownIcon(savedLanguage);
    }

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const languageCode = urlParams.get('lang') || 'en'; // Default to 'en' if no language is set
        updateDropdownIcon(languageCode);
    });
});
