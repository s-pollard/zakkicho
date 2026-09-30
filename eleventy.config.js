export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/css");

  eleventyConfig.addFilter("sortByTitle", (items) =>
    [...items].sort((a, b) =>
      (a.data.title || "").localeCompare(b.data.title || "")
    )
  );

  eleventyConfig.addFilter("sitemapLines", (items) => {
    const root = {
      children: {}
    };

    // build a tree from Eleventy URLs
    for (const item of items) {
      if (!item.url) continue;
      if (item.url === "/") continue;
      if (item.url === "/sitemap/") continue;
      if (item.data.sitemap === false) continue;

      const parts = item.url
        .split("/")
        .filter(Boolean);

      let current = root;

      parts.forEach((part, index) => {
        if (!current.children[part]) {
          current.children[part] = {
            slug: part,
            title: part,
            url: null,
            children: {}
          };
        }

        current = current.children[part];

        // actual Eleventy page
        if (index === parts.length - 1) {
          current.title = item.data.title || part;
          current.url = item.url;
        }
      });
    }

    // recursively sort everything alphabetically
    function sortTree(node) {
      return Object.values(node.children)
        .sort((a, b) =>
          (a.title || a.slug).localeCompare(b.title || b.slug)
        )
        .map((child) => {
          child.sortedChildren = sortTree(child);
          return child;
        });
    }

    const tree = sortTree(root);

    // flatten the tree into printable lines
    const lines = [];

    function walk(nodes, prefix = "") {
      nodes.forEach((node, index) => {
        const last = index === nodes.length - 1;

        lines.push({
          prefix,
          branch: last ? "└── " : "├── ",
          title: node.title,
          url: node.url,
          hasChildren: node.sortedChildren.length > 0
        });

        walk(
          node.sortedChildren,
          prefix + (last ? "    " : "│   ")
        );
      });
    }

    walk(tree);

    return lines;
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      output: "_site"
    }
  };
}