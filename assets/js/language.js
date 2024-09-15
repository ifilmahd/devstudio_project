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

    // Update the language icon based on the current URL
    function updateLanguageIcon() {
        const currentURL = window.location.href;
        if (currentURL.includes('/de/')) {
            currentLanguageIcon.className = 'fi fi-de'; // German flag
        } else {
            currentLanguageIcon.className = 'fi fi-gb'; // English flag
        }
    }

    // Change language on dropdown item click
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function () {
            window.location.href = this.href; // Navigate to the selected language URL
        });
    });

    // Initialize the language icon based on the current URL
    updateLanguageIcon();
});
