document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');
    const body = document.body;
    
    // Helper function to get current locale from URL
    function getCurrentLocale() {
        const match = window.location.pathname.match(/^\/([a-z]{2})\//);
        return match ? match[1] : 'en';
    }

    // Helper function to handle 404s and redirects
    function handleNotFound(url) {
        const locale = getCurrentLocale();
        // Try to load the 404 page for the current locale
        const notFoundUrl = locale === 'en' ? '/404.html' : `/${locale}/404.html`;
        
        fetch(notFoundUrl)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const notFoundContent = doc.querySelector('main');
                
                if (notFoundContent) {
                    mainContent.innerHTML = notFoundContent.innerHTML;
                } else {
                    mainContent.innerHTML = '<p>Page not found.</p>';
                }
                
                document.title = 'Page Not Found - Threads of Hybridity';
            })
            .catch(() => {
                mainContent.innerHTML = '<p>Page not found.</p>';
            });
    }

    // Function to load a page via AJAX
    function loadPage(url, pushState = true) {
        // Remove trailing slash if present (except for root)
        const normalizedUrl = url === '/' ? url : url.replace(/\/$/, '');
        
        fetch(normalizedUrl)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        handleNotFound(normalizedUrl);
                        throw new Error('Page not found');
                    }
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
                    
                    // Update language switcher links
                    updateActiveLangLinks();
                    
                    // Re-initialize any new scripts or event listeners
                    if (typeof initModal === 'function') {
                        initModal();
                    }
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                } else {
                    handleNotFound(normalizedUrl);
                }

                if (pushState) {
                    history.pushState({ url: normalizedUrl }, "", normalizedUrl);
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
                if (error.message !== 'Page not found') {
                    mainContent.innerHTML = '<p>Sorry, an error occurred while loading the page.</p>';
                }
            });
    }

    // Function to update active state of language switcher links
    function updateActiveLangLinks() {
        const langLinks = document.querySelectorAll('.lang-link');
        const currentLocale = getCurrentLocale();
        
        langLinks.forEach(link => {
            const linkLocale = link.getAttribute('hreflang');
            link.classList.toggle('active', linkLocale === currentLocale);
        });
    }

    // Event Listener for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage(this.href);
        });
    });

    // Event Listener for Language Switcher Links
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('lang-link')) {
            e.preventDefault();
            loadPage(e.target.href);
        }
    });

    // Handle browser back/forward buttons
    window.onpopstate = function(event) {
        if (event.state && event.state.url) {
            loadPage(event.state.url, false);
        } else {
            loadPage(window.location.pathname, false);
        }
    };

    // Initial load
    if (!window.location.hash) {
        history.replaceState({ url: window.location.pathname }, '', window.location.pathname);
    }

    // Initialize modal on initial page load
    if (typeof initModal === 'function') {
        initModal();
    }

    // Add this function near the top of your main.js file
    function changeLanguage(newLocale) {
        const currentPath = window.location.pathname;
        const currentLocale = getCurrentLocale();
        const newPath = currentPath.replace(`/${currentLocale}/`, `/${newLocale}/`);
        loadPage(newPath);
    }

    // Make sure this function is available globally
    window.changeLanguage = changeLanguage;

    // Language switcher functionality
    function initLanguageSwitcher() {
        const languageSelect = document.querySelector('.language-select');
        const languageDropdown = document.querySelector('.language-dropdown');
        
        if (!languageSelect || !languageDropdown) return;

        // Toggle dropdown on click of the selected language
        const selectedLanguage = languageSelect.querySelector('.selected-language');
        selectedLanguage.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        // Handle language option clicks
        const languageOptions = languageDropdown.querySelectorAll('.lang-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const newLocale = this.dataset.lang;
                const currentPath = window.location.pathname;
                const currentLocale = getCurrentLocale();
                
                // If we're already on this language, just close the dropdown
                if (currentLocale === newLocale) {
                    languageDropdown.classList.remove('show');
                    return;
                }
                
                // Create the new path
                let newPath;
                if (currentPath === '/' || currentPath === '') {
                    newPath = `/${newLocale}/`;
                } else {
                    newPath = currentPath.replace(`/${currentLocale}/`, `/${newLocale}/`);
                }
                
                // Force page refresh with new URL
                window.location.href = newPath;
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageSelect.contains(e.target)) {
                languageDropdown.classList.remove('show');
            }
        });
    }

    // Initialize language switcher
    initLanguageSwitcher();

    // Re-initialize language switcher after page loads via AJAX
    function reinitializeAfterPageLoad() {
        initLanguageSwitcher();
        // ... any other reinitializations you need
    }

    // Update your loadPage function to call reinitializeAfterPageLoad
    const originalLoadPage = loadPage;
    loadPage = function(url, pushState = true) {
        originalLoadPage(url, pushState).then(() => {
            reinitializeAfterPageLoad();
        });
    };
});