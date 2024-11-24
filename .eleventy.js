const path = require('path');

module.exports = function(eleventyConfig) {
    // Copy static files
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/_redirects");

    // Add language switcher filter
    eleventyConfig.addFilter("getLocale", function(path) {
        const match = path.match(/^\/([a-z]{2})\//);
        return match ? match[1] : 'en';
    });

    // Add language switcher shortcode
    eleventyConfig.addShortcode("languageSwitcher", function(page) {
        const currentPath = page.filePathStem.replace(/^\/[a-z]{2}/, '');
        const localeMatch = page.filePathStem.match(/^\/([a-z]{2})\//);
        const locale = localeMatch ? localeMatch[1] : 'en';
        const langs = ['en', 'es', 'ja'];
        
        return `
            <div class="language-switcher">
                ${langs.map(lang => `
                    <a href="/${lang}${currentPath}" 
                       class="lang-link${locale === lang ? ' active' : ''}" 
                       hreflang="${lang}">
                        ${lang.toUpperCase()}
                    </a>
                `).join('')}
            </div>
        `;
    });

    // Configure directory structure
    return {
        dir: {
            input: "src",
            output: "docs",  // Changed from _site to docs
            includes: "_includes",
            data: "_data"
        },
        // Process markdown and HTML files
        templateFormats: ["md", "njk", "html"],
        // Use Nunjucks for processing HTML templates
        htmlTemplateEngine: "njk",
        // Use Nunjucks for processing Markdown templates
        markdownTemplateEngine: "njk"
    };
};