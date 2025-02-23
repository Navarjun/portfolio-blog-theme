import plugins, { Options } from "./plugins.ts";

import "lume/types.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      "_includes/css/reset.css",
      "_includes/layouts/base.vto",
      "_includes/layouts/landing.vto",
      "uploads/favicon.svg",
      "_data/metas.yml",
      "style.css",
      "script.js"
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
