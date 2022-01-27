const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

    eleventyConfig.addWatchTarget('./src/sass/')

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/json');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    eleventyConfig.addFilter('slugify', function(value) {
        return value;
    });

    return{
        dir: {
            input: 'src',
            output: 'public'
        }
    };
}