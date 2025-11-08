<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const url = ref('')
const isUrlValid = computed(() => {
  return !!urlToId(url.value)
})
const { copy, copied, isSupported } = useClipboard()

const copyUrl = () => {
  if (!isSupported) return
  copy(convertUrlPrefix + url.value)
}
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
  </UInput>

  <div class="h-10 pt-2 flex flex-wrap justify-center">
    <UButton
      v-if="isUrlValid"
      variant="subtle"
      size="sm"
      aria-label="Copy to clipboard"
      class="cursor-pointer"
      :color="copied ? 'success' : 'neutral'"
      :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
      :disabled="!isSupported"
      @click="copyUrl"
    >
      {{ copied ? 'Copied' : 'Copy' }} URL
    </UButton>
  </div>
</template>
