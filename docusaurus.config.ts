import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// import type * as Plugin from "@docusaurus/types/src/plugin";
// import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'WCIA',
    tagline: 'Washington Cannabis Integrators Alliance',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://wcia.conflabs.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'conflabs', // Usually your GitHub org/user name.
    projectName: 'wcia', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    path: 'docs',
                    routeBasePath: 'docs',
                    sidebarPath: './sidebars.ts',
                    // docItemComponent: '@theme/ApiItem',
                },
                blog: {
                    routeBasePath: 'meetings',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom', 'json'],
                        title: 'Washington Cannabis Integrators Alliance',
                        description: 'A community organization of cannabis professionals in Washington state focused on interoperability and collaboration.',
                        copyright: '&copy;2025 WCIA.',
                        language: 'en',
                        limit: 10,
                        xslt: true,
                    },
                    postsPerPage: 'ALL',
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
            '@docusaurus/plugin-content-docs',
            {
                id: 'api',
                path: 'api',
                routeBasePath: 'api',
                sidebarPath: './sidebars.ts',
                // docItemComponent: '@theme/ApiItem',
            }
        ]
    ],

    // themes: ["docusaurus-theme-openapi-docs"],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/wcia-logo-black.svg',
        metadata: [
            {name: 'keywords', content: 'washington, cannabis, integrators, alliance, software, news'},
        ],
        headTags:{
            tagName: 'script',
            attributes: {
                type: 'application/ld+json',
            },
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org/',
                '@type': 'Organization',
                name: 'Washington Cannabis Integrators Alliance',
                alternateName: 'WCIA',
                description: 'A community organization of cannabis professionals in Washington state focused on interoperability and collaboration.',
                url: 'https://wcia.conflabs.com/',
                logo: 'https://wcia.conflabs.com/img/wcia-logo-black.svg',
            }),
        },
        navbar: {
            title: 'WCIA',
            logo: {
                alt: 'WCIA Logo',
                src: 'img/wcia-logo-black.svg',
                srcDark: 'img/wcia-logo-white.svg',
                href: '/',
                target: '_self',
                width: 32,
                height: 32,
                className: 'custom-navbar-logo',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'wciaSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'wciaSidebar',
                    position: 'left',
                    label: 'API',
                    docsPluginId: 'api',
                },
                {
                    to: '/meetings',
                    label: 'Meeting Summaries',
                    position: 'left'
                },
                {
                    to: '/about',
                    label: 'About',
                    position: 'left'
                },
                {
                    href: 'https://github.com/conflabs/wcia',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Quick Links',
                    items: [
                        {
                            label: 'Home',
                            to: '/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Slack Channel',
                            href: 'https://washingtoncan-fqx6181.slack.com',
                        },
                    ],
                },
                {
                    title: 'Newsreaders',
                    items: [
                        {
                            label: 'RSS Feed',
                            href: 'https://wcia.conflabs.com/meetings/rss.xml',
                        },
                        {
                            label: 'Atom Feed',
                            href: 'https://wcia.conflabs.com/meetings/atom.xml',
                        },
                        {
                            label: 'JSON Feed',
                            href: 'https://wcia.conflabs.com/meetings/feed.json',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Washington Cannabis Integrators Alliance`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
