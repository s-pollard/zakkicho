export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/css");

  eleventyConfig.addFilter("sortByTitle", (items) =>
    [...items].sort((a, b) =>
      (a.data.title || "").localeCompare(b.data.title || "")
    )
  );

  return {
    dir: {
      input: "content",
      includes: "_includes",
      output: "_site"
    }
  };
}