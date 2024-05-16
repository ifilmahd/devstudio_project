/* ==================================================
    Language flag icon menu
================================================== */
document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');

// Assuming you have a reference to the element
const element = document.querySelector('.fi');

// Set border-radius using JavaScript
element.style.borderRadius = '2px'; // Adjust the value as needed
        
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
});
