document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    function loadPage(url, pushState = true) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('main');
                if (newContent) {
                    mainContent.innerHTML = newContent.innerHTML;
                } else {
                    mainContent.innerHTML = '<p>Content not found.</p>';
                }

                if (pushState) {
                    history.pushState({url: url}, "", url);
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
        history.replaceState({url: window.location.href}, '', window.location.href);
    }
});