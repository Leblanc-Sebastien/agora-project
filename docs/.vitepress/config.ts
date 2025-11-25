import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agora Documentation',
  description: 'Documentation complète du projet Agora',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/overview' },
      { text: 'Composants', link: '/components/overview' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Démarrage rapide', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' },
          ],
        },
        {
          text: 'Développement',
          items: [
            { text: 'Structure du projet', link: '/guide/structure' },
            { text: "Gestion d'état (Pinia)", link: '/guide/state-management' },
            { text: 'Routing', link: '/guide/routing' },
          ],
        },
        {
          text: 'Mobile',
          items: [
            { text: 'Capacitor', link: '/guide/capacitor' },
            { text: 'Build Android', link: '/guide/android' },
            { text: 'Build iOS', link: '/guide/ios' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Composants',
          items: [
            { text: "Vue d'ensemble", link: '/components/overview' },
            { text: 'Boutons', link: '/components/buttons' },
            { text: 'Formulaires', link: '/components/forms' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: "Vue d'ensemble", link: '/api/overview' },
            { text: 'Stores', link: '/api/stores' },
            { text: 'Composables', link: '/api/composables' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Leblanc-Sebastien/agora-project' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Agora Project',
    },
  },
})
