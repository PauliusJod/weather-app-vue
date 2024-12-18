<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
})
const inputStyle =
  'w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
</script>

<template>
  <label class="text-slate-900 dark:text-slate-100 text-md justify-center">{{
    label
  }}</label>
  <div class="flex justify-center">
    <input
      :class="inputStyle"
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
  </div>
</template>

<style scoped></style>
