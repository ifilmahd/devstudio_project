<script>
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle language switch
    function switchLanguage(url) {
        window.location.href = url;
    }

    // Add event listeners to the dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent the default action of the anchor tag
            let url = this.href;
            switchLanguage(url);
        });
    });
});
</script>
