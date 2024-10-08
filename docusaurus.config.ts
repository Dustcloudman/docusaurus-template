import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Agenda',
  tagline: 'Every Leader has an Agenda',
  favicon: 'img/leadership-global-leader-world-leader-business-leader.svg',

  // Set the production url of your site here
  url: 'https://agenda.lkmail.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Dustcloudman', // Usually your GitHub org/user name.
  projectName: 'agenda', // Usually your repo name.

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
            'https://coder.lkmail.me/?folder=/home/ubuntu/dustcloudman',
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
            'https://coder.lkmail.me/?folder=/home/ubuntu/dustcloudman',
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

    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog2',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog2',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog2',
        },
      ],


      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog3',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog3',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog3',
        },
      ],

      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog4',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog4',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog4',
        },
      ],

      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog5',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog5',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog5',
        },
      ],

      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog6',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog6',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog6',
        },
      ],

      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog7',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog7',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog7',
        },
      ],

      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog8',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog8',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog8',
        },
      ],

      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog9',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog9',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog9',
        },
      ],

      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'blog10',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog10',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blog10',
        },
      ],


    ],
  


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Agenda',
      logo: {
        alt: 'My Site Logo',
        src: 'img/leadership-blue-yellow.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Connaissances Pratiques',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docs2Sidebar',
          position: 'left',
          label: 'Connaissances Pratiques2',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/blog2', label: 'blog2', position: 'left'},
        {to: '/blog3', label: 'blog3', position: 'left'},
        {to: '/blog4', label: 'blog4', position: 'left'},
        {
          href: 'https://coder.lkmail.me/?folder=/home/ubuntu/dustcloudman',
          label: 'Code Server',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'Preview',
              href: 'https://preview.lkmail.me',
            },
            {
              label: 'SSH',
              href: 'https://ssh.lkmail.me',
            },
            {
              label: 'VS Studio in Browser',
              href: 'https://coder.lkmail.me/?folder=/home/ubuntu/dustcloudman',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Docusaurus source code',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Agenda, Inc. Built by Lionel.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
