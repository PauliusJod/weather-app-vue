<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

var selected = ref<string>('dark')

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    selected.value = 'dark'
    document.documentElement.classList.add('dark')
  } else {
    selected.value = 'light'
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})
const setMode = (mode: string) => {
  if (selected.value === 'dark') {
    selected.value = 'light'
  } else {
    selected.value = 'dark'
  }
  if (mode === 'dark') {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}
</script>

<template>
  <div
    className="grid place-content-center px-4 bg-slate-200 dark:bg-slate-700 rounded-lg"
  >
    <div class="relative flex w-fit items-center rounded-full">
      <button
        class="text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 relative z-10 hover:animate-ping"
        @click="setMode('light')"
        v-if="selected === 'light'"
      >
        <Icon
          icon="hugeicons:sun-03"
          width="20"
          class="relative z-10 text-lg md:text-sm text-yellow-600 dark:text-yellow-500"
        />
      </button>
      <button
        :class="selected === 'dark' ? 'text-white' : 'text-slate-800'"
        class="text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 relative z-10 hover:animate-ping"
        @click="setMode('dark')"
        v-if="selected === 'dark'"
      >
        <Icon
          icon="hugeicons:moon-02"
          width="17"
          class="relative z-10 text-lg md:text-sm text-blue-700 dark:text-blue-500"
        />
      </button>
    </div>
  </div>
</template>
