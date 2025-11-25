<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-bold text-primary-600">Test des couleurs personnalisées</h1>

    <!-- Couleurs Primary -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Couleurs Primary</h2>
      <div class="flex gap-2">
        <div class="w-20 h-20 bg-primary-100 rounded flex items-center justify-center text-xs">
          100
        </div>
        <div class="w-20 h-20 bg-primary-300 rounded flex items-center justify-center text-xs">
          300
        </div>
        <div
          class="w-20 h-20 bg-primary-500 rounded flex items-center justify-center text-xs text-white"
        >
          500
        </div>
        <div
          class="w-20 h-20 bg-primary-700 rounded flex items-center justify-center text-xs text-white"
        >
          700
        </div>
        <div
          class="w-20 h-20 bg-primary-900 rounded flex items-center justify-center text-xs text-white"
        >
          900
        </div>
      </div>
    </div>

    <!-- Couleurs Secondary -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Couleurs Secondary</h2>
      <div class="flex gap-2">
        <div class="w-20 h-20 bg-secondary-100 rounded flex items-center justify-center text-xs">
          100
        </div>
        <div class="w-20 h-20 bg-secondary-300 rounded flex items-center justify-center text-xs">
          300
        </div>
        <div
          class="w-20 h-20 bg-secondary-500 rounded flex items-center justify-center text-xs text-white"
        >
          500
        </div>
        <div
          class="w-20 h-20 bg-secondary-700 rounded flex items-center justify-center text-xs text-white"
        >
          700
        </div>
        <div
          class="w-20 h-20 bg-secondary-900 rounded flex items-center justify-center text-xs text-white"
        >
          900
        </div>
      </div>
    </div>

    <!-- Couleur Accent -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Couleur Accent</h2>
      <div
        class="w-40 h-20 bg-accent rounded flex items-center justify-center text-white font-bold"
      >
        Accent Color
      </div>
    </div>

    <!-- Boutons d'exemple -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Exemples de boutons</h2>
      <div class="flex gap-4">
        <button
          class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition"
        >
          Bouton Primary
        </button>
        <button
          class="px-6 py-3 bg-secondary-500 hover:bg-secondary-700 text-white rounded-lg transition"
        >
          Bouton Secondary
        </button>
        <AppButton variant="michel" label="Michel" size="lg" :action="() => console.log('ok')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant de test pour vérifier les couleurs personnalisées
</script>
