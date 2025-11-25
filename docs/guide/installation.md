# Installation

Guide détaillé pour installer et configurer le projet Agora.

## Environnement de développement

### Node.js

Le projet nécessite Node.js version 18 ou supérieure.

```bash
# Vérifier votre version de Node.js
node --version
```

Si vous devez installer ou mettre à jour Node.js, téléchargez-le depuis [nodejs.org](https://nodejs.org/).

## Installation du projet

### 1. Cloner le repository

```bash
git clone https://github.com/Leblanc-Sebastien/agora-project.git
cd agora-project
```

### 2. Installer les dépendances

```bash
npm install
```

Cette commande installe :

- Nuxt 4
- Tailwind CSS v4
- Pinia
- Capacitor
- Et toutes les autres dépendances

### 3. Configuration initiale

Le projet est pré-configuré, mais vous pouvez personnaliser :

#### Tailwind CSS

Modifiez `tailwind.config.js` pour vos couleurs personnalisées :

```js
colors: {
  primary: {
    500: '#VotreCouleur',
    // ...
  }
}
```

#### Capacitor

Modifiez `capacitor.config.ts` pour vos informations d'app :

```ts
const config: CapacitorConfig = {
  appId: 'com.votreentreprise.app',
  appName: 'Votre App',
  // ...
}
```

## Développement mobile

### Android

1. Installer [Android Studio](https://developer.android.com/studio)
2. Installer le SDK Android et les outils nécessaires
3. Configurer les variables d'environnement (ANDROID_HOME)

### iOS (Mac uniquement)

1. Installer [Xcode](https://developer.apple.com/xcode/)
2. Installer les Command Line Tools
3. Accepter les licences Xcode

## Vérification

Testez que tout fonctionne :

```bash
# Démarrer le serveur de développement
npm run dev
```

Si tout est correct, votre application devrait être accessible sur `http://localhost:3000`.
