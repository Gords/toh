module.exports = function(eleventyConfig) {
    // Copy `src/css/` to `docs/css/`
    eleventyConfig.addPassthroughCopy("src/css");
    
    // Copy `src/js/` to `docs/js/`
    eleventyConfig.addPassthroughCopy("src/js");
  
    // Copy `src/images/` to `docs/images/`
    eleventyConfig.addPassthroughCopy("src/images");
  
    // Watch CSS files for changes
    eleventyConfig.addWatchTarget("src/css/");
  
    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };