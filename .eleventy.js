module.exports = function(eleventyConfig) {
  // Existing config
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addWatchTarget("src/css/");

  // Add localization support
  eleventyConfig.addCollection("locales", function(collection) {
    return ["en", "es", "ja"];
  });

  // Create collections for each locale
  ["en", "es", "ja"].forEach(locale => {
    eleventyConfig.addCollection(locale, function(collection) {
      return collection.getAll().filter(page => page.data.locale === locale);
    });
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data"
    }
  };
};