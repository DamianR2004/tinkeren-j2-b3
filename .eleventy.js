module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");
  return {    
  dir: {
      input: "src",
      output: "public",
    },
  };
};