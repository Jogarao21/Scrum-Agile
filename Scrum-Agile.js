       // Navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const navItems = document.querySelectorAll('.nav-item');
            const contentSections = document.querySelectorAll('.content-section');
            const imageElement = document.getElementById('scrum-image');

            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const targetSection = this.getAttribute('data-section');
                    
                    // Remove active class from all nav items
                    navItems.forEach(nav => nav.classList.remove('active'));
                    
                    // Add active class to clicked nav item
                    this.classList.add('active');
                    
                    // Hide all content sections
                    contentSections.forEach(section => section.classList.remove('active'));
                    
                    // Show target section
                    document.getElementById(targetSection).classList.add('active');
                    
                    // Show/hide image based on section
                    if (targetSection === 'overview') {
                        imageElement.classList.remove('hidden');
                    } else {
                        imageElement.classList.add('hidden');
                    }
                });
            });
        });