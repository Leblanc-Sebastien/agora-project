<template>
  <!-- <AppButton variant="michel" label="Michel" size="lg" :action="action" />
  <div class="flex justify-center items-center h-screen">
    <h1 class="text-2xl">Page de test</h1>
  </div> -->
  <div class="mt-4 rounded bg-blue-500 p-4 text-white hover:bg-blue-600"></div>
  <ColorTest />
</template>

<script lang="ts" setup>
const action = () => {
  console.log('Button clicked!')
}
</script>
