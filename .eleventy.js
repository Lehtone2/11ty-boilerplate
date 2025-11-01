
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("itemCard", function(title, url, image, excerpt){
    return `
    <article class="item-card">
      <a href="${url}">
        <img src="${image}" alt="${title}" class="item-thumb">
        <h2>${title}</h2>
      </a>
      <p>${excerpt}</p>
    </article>
    `;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};