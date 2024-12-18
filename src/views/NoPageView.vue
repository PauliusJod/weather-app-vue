<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full flex-row justify-center">
    <p class="flex justify-center py-2 text-slate-500 dark:text-slate-400">
      Page not found..
    </p>
    <RouterLink
      to="/"
      class="rounded-lg flex items-center justify-center transition-colors px-3 h-8 leading-tight font-bold text-slate-500 bg-slate-100 border-2 border-slate-300 hover:bg-slate-200 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
      >Back to home page...</RouterLink
    >
  </div>
</template>
