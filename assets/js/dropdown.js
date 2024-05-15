// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown toggle element
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');
    
    // Add event listener to the dropdown toggle element
    dropdownToggle.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        
        // Toggle the 'show' class on the dropdown menu
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(event.target)) {
                const openDropdown = dropdown.querySelector('.dropdown-menu.show');
                if (openDropdown) {
                    openDropdown.classList.remove('show');
                }
            }
        });
    });
});
