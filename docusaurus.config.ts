import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

const config: Config = {
  title: "Routify",
  tagline: "Comprehensive documentation for our REST API and event system.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://geinala.github.io",
  baseUrl: "/",

  organizationName: "geinala",
  projectName: "routify",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          myservice: {
            specPath: "./static/specs/openapi.yaml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
    () => ({
      name: "custom-webpack-config",
      configureWebpack() {
        return {
          plugins: [new NodePolyfillPlugin()],
          resolve: {
            fallback: {
              fs: false,
              path: require.resolve("path-browserify"),
              stream: require.resolve("stream-browserify"),
              zlib: require.resolve("browserify-zlib"),
              bufferutil: false,
              "utf-8-validate": false,
              canvas: false,
            },
          },
          module: {
            rules: [
              {
                test: /\.yaml$/,
                use: "raw-loader",
              },
            ],
          },
        };
      },
    }),
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Documentation Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "RESTful API",
        },
        {
          to: "/events",
          position: "left",
          label: "Events Catalog",
        },
        {
          href: "https://github.com/geinala",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} Routify, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
