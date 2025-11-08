<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()

const platforms = computed(() => getEnabledSupportedPlatforms())
</script>

<template>
  <div class="text-center space-y-4">
    <p>
      Want to watch your favorite videos in VRChat? Just put this before the
      link:
    </p>

    <UButton
      class="text-lg font-mono px-2 py-1 rounded cursor-pointer transition bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-indigo-200 dark:hover:bg-indigo-700"
      :trailing-icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
      @click="copy(convertUrlPrefix)"
    >
      <code>
        {{ convertUrlPrefix }}
      </code>
    </UButton>

    <p> Or use the link generator above — it'll give you the right link. </p>

    <p> Works instantly, no setup, no sign-in. </p>

    <h2 class="text-2xl pt-6 font-semibold">Supported platforms:</h2>

    <div class="flex flex-wrap justify-center gap-3 pt-2">
      <span
        v-for="platform of platforms"
        :key="platform.name"
        class="px-3 py-1 rounded-lg text-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
      >
        {{ platform.name }}
      </span>
    </div>
  </div>
</template>
