// src/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');
    const body = document.body;

    // Function to load a page via AJAX
    function loadPage(url, pushState = true) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.text();
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newMainContent = doc.querySelector('main');
                const newBodyClass = doc.body.className || '';

                if (newMainContent) {
                    // Replace main content
                    mainContent.innerHTML = newMainContent.innerHTML;

                    // Update body class to apply page-specific styles
                    body.className = newBodyClass;

                    // Re-initialize any new scripts or event listeners if necessary
                    if (typeof initModal === 'function') {
                        initModal(); // Initialize modal after loading new content
                    }
                } else {
                    mainContent.innerHTML = '<p>Content not found.</p>';
                }

                if (pushState) {
                    history.pushState({ url: url }, "", url);
                }

                const title = doc.querySelector('title');
                if (title) {
                    document.title = title.textContent;
                } else {
                    document.title = 'Threads of Hybridity';
                }
            })
            .catch(error => {
                console.error('Error loading page:', error);
                mainContent.innerHTML = '<p>Sorry, an error occurred while loading the page.</p>';
            });
    }

    // Event Listener for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage(this.href);
        });
    });

    // Handle browser back/forward buttons
    window.onpopstate = function(event) {
        if (event.state && event.state.url) {
            loadPage(event.state.url, false);
        }
    };

    // Initial load
    if (!window.location.hash) {
        history.replaceState({ url: window.location.href }, '', window.location.href);
    }

    // Initialize modal on initial page load
    if (typeof initModal === 'function') {
        initModal();
    }
});