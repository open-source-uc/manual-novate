const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Manual Novate UC',
  tagline: 'Transición a la presencialidad 2021',
  url: 'https://manual.consejeriasuperior.cl',
  baseUrl: '/',
  // Change to "throw" after production!
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'open-source-uc', // Usually your GitHub org/user name.
  projectName: 'manual-novate', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Manual Novate UC',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Manual',
        },
        {
          href: 'https://github.com/open-source-uc/manual-novate',
          label: 'Código Fuente',
          position: 'right',
        },
        {
          href: 'https://consejeriasuperior.cl',
          label: 'CS',
          position: 'right',
        },
        {
          href: 'https://feuc.cl',
          label: 'FEUC',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Directorios',
          items: [
            {
              label: 'Guia Novata',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Links a Organizaciones',
          items: [
            {
              label: 'Open Source eUC',
              href: 'https://osuc.dev/',
            },
            {
              label: 'Consejeria Superior',
              href: 'https://consejeriasuperior.cl/',
            },
            {
              label: 'FEUC',
              href: 'https://feuc.cl/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Hecho por un equipo de voluntarios de la FEUC, la Consejería Superior y Open Source UC.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
};
