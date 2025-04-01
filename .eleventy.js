module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addPassthroughCopy("CNAME");
    
    return {
        dir: {
            input: 'src',
        },
    };
};
