# Configuration

Guide de configuration du projet Agora.

## Nuxt Configuration

Le fichier `nuxt.config.ts` contient la configuration principale :

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
```

### Modules

- `@nuxt/ui` : Composants UI
- `@pinia/nuxt` : Gestion d'état
- `@nuxt/test-utils/module` : Tests

## Tailwind CSS

### Configuration des couleurs

Éditez `tailwind.config.js` :

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... palette complète
          900: '#1e3a8a',
        },
      },
    },
  },
}
```

### Classes personnalisées

Ajoutez vos classes dans `app/assets/css/main.css` :

```css
@import 'tailwindcss';
@import '@nuxt/ui';

/* Vos styles personnalisés */
```

## Capacitor

### Configuration de base

Le fichier `capacitor.config.ts` :

```typescript
const config: CapacitorConfig = {
  appId: 'com.agora.app',
  appName: 'Agora',
  webDir: '.output/public',
  server: {
    androidScheme: 'https',
  },
}
```

### Personnalisation

- **appId** : Identifiant unique de votre app (format inverse DNS)
- **appName** : Nom affiché de l'application
- **webDir** : Dossier contenant les fichiers web générés

## Variables d'environnement

Créez un fichier `.env` à la racine :

```env
# API
NUXT_PUBLIC_API_BASE=https://api.example.com

# Autres variables
NUXT_PUBLIC_APP_NAME=Agora
```

Utilisez-les dans votre code :

```typescript
const config = useRuntimeConfig()
console.log(config.public.apiBase)
```

## ESLint

Configuration dans `eslint.config.js`. Lancez :

```bash
npm run lint        # Vérifier
npm run lint:fix    # Corriger automatiquement
```

## TypeScript

Configuration dans `tsconfig.json`. Le projet utilise TypeScript strict par défaut.
