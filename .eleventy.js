module.exports = function(eleventyConfig) {
  // Kopieer het bestand en geef het een simpele naam in je public map
  eleventyConfig.addPassthroughCopy({
    "node_modules/js-confetti/dist/js-confetti.browser.js": "js/js-confetti.js"
  });

  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");
};