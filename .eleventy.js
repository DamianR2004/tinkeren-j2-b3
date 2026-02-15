module.exports = function(eleventyConfig) {
  // Kopieer JS confetti uit node_modules
  eleventyConfig.addPassthroughCopy({
    "node_modules/js-confetti/dist/js-confetti.browser.js": "js/js-confetti.js"
  });

  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");

  return {    
    dir: {
      input: "src",
      output: "public",
    }
  };
};