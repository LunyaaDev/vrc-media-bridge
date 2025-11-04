<script setup lang="ts">
const platformNames = computed(() => {
  return Object.values(supportedPlatforms).map((x) => x.name)
})
</script>

<template>
  <div>
    <p class="w-full text-center">
      To watch a video from a supported platform in VRChat, simply prepend the
      video's URL with:
    </p>
    <p class="w-full text-center">
      <code>https://vrcpp.net/?u=</code>
    </p>
    <p class="w-full text-center pt-4">
      Or use the link generator above to create it automatically.
    </p>
    <p class="w-full text-center text-2xl pt-8"> Supported platforms: </p>
    <p class="w-full text-center">
      <span v-for="platform of platformNames" :key="platform" class="px-4">
        {{ platform }}
      </span>
    </p>
  </div>
</template>
