document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    function loadPage(url, pushState = true) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('main').innerHTML;
                mainContent.innerHTML = newContent;

                if (pushState) {
                    history.pushState({url: url}, "", url);
                }
                
                const h1 = mainContent.querySelector('h1');
                document.title = (h1 ? h1.textContent : 'Threads of Hybridity') + ' - Threads of Hybridity';
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