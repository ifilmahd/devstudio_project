<script>
    document.addEventListener("DOMContentLoaded", function() {
        const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        let selectedLanguage = 'en'; // Default language is English

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

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                dropdownMenu.classList.remove('show');
                dropdownMenu.style.zIndex = "auto"; // Reset z-index when closing the dropdown
            }
        });

        // Change language function
        function changeLanguage(lang) {
            selectedLanguage = lang;
            // Update the URL
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('lang', lang);
            window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
        }

        // Language change event listeners
        document.getElementById('en').addEventListener('click', function(event) {
            event.preventDefault();
            changeLanguage('en');
        });

        document.getElementById('it').addEventListener('click', function(event) {
            event.preventDefault();
            changeLanguage('it');
        });

        document.getElementById('al').addEventListener('click', function(event) {
            event.preventDefault();
            changeLanguage('al');
        });

        document.getElementById('de').addEventListener('click', function(event) {
            event.preventDefault();
            changeLanguage('de');
        });

        // Check if language is specified in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam) {
            selectedLanguage = langParam;
        }
    });
</script>
