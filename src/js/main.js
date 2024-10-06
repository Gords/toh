document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    function loadPage(url, pushState = true) {
        htmx.ajax('GET', url, {
            target: mainContent,
            select: '#content'  // Only select the content within the main element
        }).then(() => {
            if (pushState) {
                history.pushState({url: url}, "", url);
            }
            const h2 = mainContent.querySelector('h2');
            document.title = (h2 ? h2.textContent : 'Threads of Hybridity') + ' - Threads of Hybridity';
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