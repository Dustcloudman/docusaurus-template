import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Docusaurus Template',
  tagline: 'This template is cool',
  favicon: 'img/leadership-dark.svg',

  // Set the production url of your site here
  url: 'https://docusaurus-template-arg.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Dustcloudman', // Usually your GitHub org/user name.
  projectName: 'docusaurus-template', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Dustcloudman/docusaurus-template/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Dustcloudman/docusaurus-template/tree/main/blog',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
    // ...
    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'blog02',
          routeBasePath: 'blog02',
          path: './blog02',
        },
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'blog03',
          routeBasePath: 'blog03',
          path: './blog03',
        },
      ],
    ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/leadership-dark.svg',
    navbar: {
      title: 'Docusaurus custom template',
      logo: {
        alt: 'My Site Logo',
        src: 'img/leadership-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar01',
          position: 'left',
          label: 'Sidebar 01',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar02',
          position: 'left',
          label: 'Sidebar 02',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar03',
          position: 'left',
          label: 'Sidebar 03',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {to: '/blog02', label: 'Blog02', position: 'right'},
        {to: '/blog03', label: 'Blog03', position: 'right'},
        {
          href: 'https://kaufmann-firewall.cloudflareaccess.com/cdn-cgi/access/logout',
          label: 'Logout',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ressources',
          items: [
            {
              label: 'Docusaurus official website',
              href: 'https://docusaurus.io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog01',
              to: '/blog',
            },
            {
              label: 'Blog02 (exemple)',
              to: '/blog02',
            },
            {
              label: 'Blog03 (exemple)',
              to: '/blog03',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dustcloudman's Docusaurus template.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;