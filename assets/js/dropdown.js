<script>
    document.addEventListener("DOMContentLoaded", function() {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        let selectedLanguage = 'en'; // Default language is English

        // Toggle dropdown menu
        function toggleDropdown() {
            dropdownMenu.classList.toggle('show');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                dropdownMenu.classList.remove('show');
            }
        });

        // Change language function
        function changeLanguage(lang) {
            selectedLanguage = lang;
            // Update URL
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('lang', lang);
            window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
            toggleDropdown(); // Close dropdown after selecting a language
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

        // Set the default selected language in the dropdown
        document.getElementById(selectedLanguage).classList.add('active');

        // Dropdown toggle click event listener
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of the anchor tag
            toggleDropdown();
        });
    });
</script>
