<script setup lang="ts">
const config = useRuntimeConfig()
useScriptRybbitAnalytics({
  scriptInput: {
    src: config.public.rybbitAnalytics.host + '/api/script.js',
  },
  siteId: config.public.rybbitAnalytics.siteId,
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>
