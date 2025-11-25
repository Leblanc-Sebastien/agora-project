# Démarrage rapide

Bienvenue dans la documentation du projet Agora ! Ce guide vous aidera à démarrer rapidement.

## Prérequis

- Node.js 18+
- npm ou yarn
- Android Studio (pour builds Android)
- Xcode (pour builds iOS, Mac uniquement)

## Installation

```bash
# Cloner le projet
git clone https://github.com/Leblanc-Sebastien/agora-project.git
cd agora-project

# Installer les dépendances
npm install
```

## Développement

### Application Web

```bash
# Démarrer le serveur de développement (avec SSR)
npm run dev

# Accéder à l'application
# http://localhost:3000
```

### Application Mobile

```bash
# Builder et ouvrir Android Studio
npm run mobile:android

# Builder et ouvrir Xcode (Mac uniquement)
npm run mobile:ios
```

## Commandes disponibles

| Commande                 | Description                                |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Démarre le serveur de développement        |
| `npm run build`          | Build pour la production (web)             |
| `npm run generate`       | Génère une version statique                |
| `npm run mobile:android` | Build et ouvre Android Studio              |
| `npm run mobile:ios`     | Build et ouvre Xcode                       |
| `npm run lint`           | Vérifie le code avec ESLint                |
| `npm run lint:fix`       | Corrige automatiquement les erreurs ESLint |

## Prochaines étapes

- [Configuration du projet](/guide/configuration)
- [Structure du projet](/guide/structure)
- [Gestion d'état avec Pinia](/guide/state-management)
