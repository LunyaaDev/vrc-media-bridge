<script lang="ts" setup>
import { useInterval } from '@vueuse/core'
const counter = useInterval(1000)

const platform = computed(() => {
  const list = Object.values(supportedPlatforms).map((x) => x.name)
  return list[counter.value % list.length]
})
</script>

<template>
  <div>
    <h1 class="w-full text-center text-5xl"><b>VRC Media Bridge</b></h1>
    <p class="w-full text-center">
      The easiest way to play
      <span>{{ platform }}</span>
      videos in VRChat
    </p>
  </div>
</template>
