<script setup lang="ts">
const platformNames = computed(() => {
  return Object.values(supportedPlatforms).map((x) => x.name)
})
</script>

<template>
  <div>
    <p class="w-full text-center text-2xl"> Supported platforms: </p>
    <p class="w-full text-center">
      <span v-for="platform of platformNames" :key="platform" class="px-4">
        {{ platform }}
      </span>
    </p>
  </div>
</template>
