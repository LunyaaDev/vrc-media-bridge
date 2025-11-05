<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const url = ref('')
const copyDisabled = computed(() => {
  return !urlToId(url.value)
})
const { copy, copied } = useClipboard()
</script>

<template>
  <UInput
    v-model="url"
    class="w-full"
    size="xl"
    placeholder="https://..."
    :ui="{
      base: `pl-44`,
      leading: 'pointer-events-none',
    }"
  >
    <template #leading>
      <p class="text-sm text-muted"> {{ convertUrlPrefix }} </p>
    </template>

    <template v-if="url?.length" #trailing>
      <UButton
        variant="link"
        size="sm"
        aria-label="Copy to clipboard"
        class="cursor-pointer size-6"
        :color="copied ? 'success' : 'neutral'"
        :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
        :disabled="copyDisabled"
        @click="copy(convertUrlPrefix + url)"
      />
    </template>
  </UInput>
</template>
