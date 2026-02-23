module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("style/vendor");
  eleventyConfig.addPassthroughCopy("style/core/style.min.css");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  };
};
