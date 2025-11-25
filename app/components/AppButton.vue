<template>
  <UButton :size="size" @click="() => action">{{ label }}</UButton>
</template>
<script lang="ts" setup>
defineProps<{
  variant: string
  label: string
  size: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  action: () => void
}>()
</script>
