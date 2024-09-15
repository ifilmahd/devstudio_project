document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('languageDropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const currentLanguageIcon = document.getElementById('currentLanguageIcon');

    // Toggle dropdown menu visibility
    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Hide dropdown menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Update the language icon based on the selected language stored in localStorage
    function updateLanguageIcon() {
        const selectedLanguage = localStorage.getItem('selectedLanguage');
        if (selectedLanguage === 'de') {
            currentLanguageIcon.className = 'fi fi-de'; // German flag
        } else {
            currentLanguageIcon.className = 'fi fi-gb'; // English flag
        }
    }

    // Handle language change
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default navigation

            // Store the selected language in localStorage
            const selectedLanguage = this.getAttribute('data-language');
            localStorage.setItem('selectedLanguage', selectedLanguage);

            // Update the URL based on the selected language
            if (selectedLanguage === 'de') {
                window.location.href = 'https://devstudioal.com/de/'; // German version
            } else {
                window.location.href = 'https://devstudioal.com/'; // English version
            }
        });
    });

    // Initialize the language icon based on the selected language
    updateLanguageIcon();
});
