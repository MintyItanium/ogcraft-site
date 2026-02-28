import { themes as prismThemes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';

const config = {
  title: 'OGCraft',
  tagline: '',
  favicon: 'img/OGCraft.svg',

  url: 'https://wiki.ogcraft.org',
  baseUrl: '/',

  organizationName: 'OGCraft',
  projectName: 'ogcraft-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
      locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
          'https://github.com/OGCraftMC/ogcraft-site/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
      },
    ],

    colorMode: {
      defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
    },

    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'OGCraft',
      logo: {
        alt: 'My Site Logo',
        src: 'img/OGCraft.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://store.ogcraft.org',
          label: 'Store',
          position: 'left',
          className: 'navbarDiscord',
        },
        {
          href: '/Discord',
          label: 'Discord',
          position: 'left',
          className: 'navbarDiscord',
        },
        {
          href: '/docs/Info/Voting',
          label: 'Voting',
          position: 'left',
          className: 'navbarDiscord',
        },
        {
          href: 'https://github.com/orgs/OGCraftMC/projects/2',
          label: 'Bug Tracker',
          position: 'right',
          className: 'navbarDiscord',
        },
        {
          href: 'https://github.com/OGCraftMC/ogcraft-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '/Discord',
            },
            {
              label: 'Status',
              href: 'https://status.ogcraft.org/',
            },
            {
              label: 'TOS',
              href: 'docs/Legal/TOS-PrivacyPolicy',
            },
          ],
        },
      ],
      copyright:
      `Copyright © ${new Date().getFullYear()} OGCraft, All rights reserved.\nNot affiliated with Mojang or Microsoft.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
