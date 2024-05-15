document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('[data-mdb-dropdown-init]');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        const isOpen = dropdownMenu.classList.contains('show');

        // Close all dropdowns before opening this one
        closeAllDropdowns();
        
        // Toggle the 'show' class on the dropdown menu
        if (!isOpen) {
            dropdownMenu.classList.add('show');
        }
    });

    // Function to close all dropdowns
    function closeAllDropdowns() {
        const dropdownMenus = document.querySelectorAll('.dropdown-menu.show');
        dropdownMenus.forEach(function(dropdownMenu) {
            dropdownMenu.classList.remove('show');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
});
