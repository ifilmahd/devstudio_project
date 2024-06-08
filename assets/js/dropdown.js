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
        const languageCode = link.querySelector('i').classList[1].split('-')[1]; // Extracting the language code from the class
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
        // You need to implement the logic to load and display the page content in the selected language
        // This might involve fetching new content via AJAX or reloading the page with new content dynamically

        // Example: Assume you have different language files and you load them via AJAX
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

    // On page load, check if a language is saved in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        updatePageLanguage(savedLanguage);
    }

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const languageCode = urlParams.get('lang') || 'en'; // Default to 'en' if no language is set
        updatePageLanguage(languageCode);
    });
});
