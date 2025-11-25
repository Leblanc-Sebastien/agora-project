<template>
  <UNavigationMenu
    color="neutral"
    variant="link"
    :items="items"
    orientation="vertical"
    class="w-full"
  />
</template>
<script lang="ts" setup>
import type { NavigationLink } from '~/models/navigation'

const items = ref<NavigationLink[]>([
  { label: 'Accueil', to: '#', icon: 'i-lucide-book-open' },
  { label: 'Pôle alimentaire', to: '#', icon: 'i-lucide-book-open' },
  { label: 'Pôle sportif', to: '#', icon: 'i-lucide-book-open' },
  { label: 'Pôle administration', to: '#', icon: 'i-lucide-book-open' },
  { label: 'Pôle support', to: '#', icon: 'i-lucide-book-open' },
  { label: 'A propos du TACT', to: '#', icon: 'i-lucide-book-open' },
])
</script>
<style scoped></style>
