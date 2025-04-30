import lightningcss from "lume/plugins/lightningcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import basePath from "lume/plugins/base_path.ts";
import metas from "lume/plugins/metas.ts";
import sass from "lume/plugins/sass.ts";
import esbuild from "lume/plugins/esbuild.ts";
import { Options as SitemapOptions, sitemap } from "lume/plugins/sitemap.ts";
import { favicon, Options as FaviconOptions } from "lume/plugins/favicon.ts";
import { merge } from "lume/core/utils/object.ts";
import jsx from "lume/plugins/jsx.ts";
import "lume/types.ts";

export interface Options {
  sitemap?: Partial<SitemapOptions>;
  favicon?: Partial<FaviconOptions>;
}

export const defaults: Options = {
  favicon: {
    input: "images/favicon.svg",
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .use(jsx())
      .use(lightningcss())
      .use(
        tailwindcss({
          options: {
            PluginArray: [typography],
          },
        })
      )
      .use(basePath())
      .use(metas())
      .use(sass())
      .use(postcss())
      .use(esbuild())
      .use(sitemap(options.sitemap))
      .use(favicon(options.favicon))
      .copy("images");
  };
}
