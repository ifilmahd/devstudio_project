<script>
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle language switch
    function switchLanguage(language) {
        // Define the base URL for each language
        let baseUrlEnglish = 'https://devstudioal.com/';
        let baseUrlGerman = 'https://devstudioal.com/de/';

        // Determine which URL to redirect to based on selected language
        let newUrl = language === 'de' ? baseUrlGerman : baseUrlEnglish;

        // Redirect to the selected language URL
        window.location.href = newUrl;
    }

    // Add event listeners to the dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent the default action of the anchor tag
            let language = this.href.includes('/de/') ? 'de' : 'en';
            switchLanguage(language);
        });
    });
});
</script>
