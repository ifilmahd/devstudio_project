<script>
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default link behavior
            let url = this.getAttribute('href'); // Get the URL from the href attribute
            window.location.href = url;  // Redirect to the selected URL
        });
    });
});
</script>
