# Structure du projet

Organisation des fichiers et dossiers du projet Agora.

## Vue d'ensemble

```
tact-project/
├── app/                      # Code source de l'application
│   ├── assets/              # Ressources (CSS, images)
│   ├── components/          # Composants Vue
│   ├── composables/         # Fonctions composables
│   ├── layouts/             # Layouts de page
│   ├── middleware/          # Middleware de routing
│   ├── models/              # Modèles TypeScript
│   ├── pages/               # Pages (routing automatique)
│   ├── plugins/             # Plugins Nuxt
│   ├── stores/              # Stores Pinia
│   ├── utils/               # Fonctions utilitaires
│   ├── app.vue              # Composant racine
│   └── error.vue            # Page d'erreur
├── android/                 # Projet Android (Capacitor)
├── docs/                    # Documentation (VitePress)
├── public/                  # Fichiers statiques
├── capacitor.config.ts      # Configuration Capacitor
├── nuxt.config.ts          # Configuration Nuxt
├── tailwind.config.js      # Configuration Tailwind
└── package.json            # Dépendances et scripts
```

## Dossier `app/`

### `components/`

Composants Vue réutilisables :

```
components/
├── AppButton.vue
├── AppNavigationMenu.vue
├── AppSlideOverMenu.vue
└── ColorTest.vue
```

**Convention** : Préfixez les composants avec `App` ou par catégorie.

### `pages/`

Système de routing automatique de Nuxt :

```
pages/
├── index.vue          → /
├── about.vue          → /about
└── users/
    ├── index.vue      → /users
    └── [id].vue       → /users/:id
```

### `stores/`

Stores Pinia pour la gestion d'état :

```typescript
// stores/useUserStore.ts
export const useUserStore = defineStore('user', () => {
  const currentUser = ref<User | null>(null)

  function login(email: string, password: string) {
    // ...
  }

  return { currentUser, login }
})
```

Utilisation dans un composant :

```vue
<script setup>
import { useUserStore } from '~/stores/useUserStore'

const userStore = useUserStore()
</script>
```

### `composables/`

Fonctions réutilisables (auto-importées) :

```typescript
// composables/useAuth.ts
export const useAuth = () => {
  const isAuthenticated = ref(false)

  const login = () => {
    isAuthenticated.value = true
  }

  return { isAuthenticated, login }
}
```

### `layouts/`

Templates de mise en page :

```vue
<!-- layouts/default.vue -->
<template>
  <div>
    <header>...</header>
    <slot />
    <!-- Contenu de la page -->
    <footer>...</footer>
  </div>
</template>
```

Utilisation :

```vue
<script setup>
definePageMeta({
  layout: 'default',
})
</script>
```

## Configuration

### `nuxt.config.ts`

Configuration principale de Nuxt (modules, CSS, plugins, etc.).

### `capacitor.config.ts`

Configuration Capacitor pour les builds mobiles.

### `tailwind.config.js`

Configuration Tailwind CSS (couleurs, polices, etc.).

## Dossier `android/`

Projet Android natif généré par Capacitor. À ouvrir avec Android Studio.

## Bonnes pratiques

1. **Composants** : Un fichier par composant, PascalCase
2. **Stores** : Préfixe `use`, suffixe `Store`
3. **Composables** : Préfixe `use`
4. **Types** : Dans `models/` ou à côté du fichier concerné
5. **Assets** : Images dans `public/`, CSS dans `assets/`
