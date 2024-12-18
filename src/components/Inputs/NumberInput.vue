<script setup lang="ts">
let timeOutId: ReturnType<typeof setTimeout> | null = null
const emit = defineEmits<{
  (e: 'update:modelValue', value: Number): void
}>()
defineProps({
  label: {
    type: String,
    default: '',
  },
  min: {
    type: Number,
    default: -2,
  },
  max: {
    type: Number,
    default: 2,
  },
  modelValue: {
    type: Number,
    default: 10,
  },
})
const emitBack = (e: Event) => {
  if (timeOutId) {
    clearTimeout(timeOutId)
  }
  timeOutId = setTimeout(() => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', Number(target.value))
  }, 1000)
}
const inputStyle =
  'px-2 py-1 mb-2 border rounded-sm w-36 bg-slate-300 dark:bg-gray-900 text-slate-900 dark:text-slate-300'
</script>

<template>
  <label class="text-slate-900 dark:text-slate-100 text-md">{{ label }}</label>
  <input
    :class="inputStyle"
    :key="modelValue"
    type="number"
    :min="min"
    :max="max"
    :value="modelValue"
    step="0.000001"
    @input="emitBack"
  />
</template>
