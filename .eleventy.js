module.exports = function(eleventyConfig) {

    // Copy `bundle.css` to the output folder
    eleventyConfig.addPassthroughCopy("bundle.css");

    // favicon
    eleventyConfig.addPassthroughCopy("favicon.svg");
}