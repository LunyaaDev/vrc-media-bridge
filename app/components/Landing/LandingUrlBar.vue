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

function handlePasteEvent(this: HTMLInputElement, e: ClipboardEvent) {
  const pastedText = e.clipboardData?.getData('text')
  if (!pastedText) return
  url.value = pastedText

  // copy url if supported
  if (urlToId(url.value)) copyUrl()
}

const prefixRef = useTemplateRef('prefix')

const prefixWidth = computed(() => {
  if (!prefixRef.value) return 0
  return prefixRef.value.getBoundingClientRect().width + 12
})

const urlInput = useTemplateRef('urlInput')
onMounted(() => {
  const el = urlInput.value?.inputRef
  el?.addEventListener('paste', handlePasteEvent)
})

onBeforeUnmount(() => {
  const el = urlInput.value?.inputRef
  el?.removeEventListener('paste', handlePasteEvent)
})
</script>

<template>
  <UInput
    ref="urlInput"
    v-model="url"
    class="w-full"
    size="xl"
    placeholder="https://..."
    :style="{ paddingLeft: prefixWidth + 'px' }"
    :ui="{
      leading: 'pointer-events-none',
    }"
  >
    <template #leading>
      <p ref="prefix" class="text-sm text-muted"> {{ convertUrlPrefix }} </p>
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
