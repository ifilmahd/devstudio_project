document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('#currentLanguage');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const languageLinks = document.querySelectorAll('.dropdown-item');

    // Event listener for the dropdown toggle
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });
// Adjust the z-index dynamically
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.style.zIndex = "9999";
        } else {
            dropdownMenu.style.zIndex = "auto";
        }
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
        updatePageLanguage(languageCode);

        // Update the dropdown toggle icon
        updateDropdownIcon(languageCode);
    }

    // Function to update the displayed language
    function updatePageLanguage(languageCode) {
        // Implement the logic to load and display the page content in the selected language
        fetch(`/${languageCode}/index.html`)
            .then(response => response.text())
            .then(data => {
                document.documentElement.innerHTML = data;
                // Reinitialize scripts if necessary
            });

        // Optionally, update the URL without adding a new entry to the browser's history
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('lang', languageCode);
        window.history.replaceState({ path: currentUrl.href }, '', currentUrl.href);
    }

    // Function to update the dropdown icon
    function updateDropdownIcon(languageCode) {
        const iconClass = `fi fi-${languageCode}`;
        dropdownToggle.querySelector('i').className = iconClass;
    }

    // On page load, check if a language is saved in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        updatePageLanguage(savedLanguage);
        updateDropdownIcon(savedLanguage);
    }

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const languageCode = urlParams.get('lang') || 'en'; // Default to 'en' if no language is set
        updatePageLanguage(languageCode);
        updateDropdownIcon(languageCode);
    });
});
