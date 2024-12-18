<script setup lang="ts"></script>
<!-- That is not 'the best' use case of <template> & <slot> -->
<template>
  <div
    class="rounded-s-lg flex items-center justify-center transition-colors px-3 h-8 leading-tight font-bold text-gray-500 bg-slate-100 border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-slate-200"
  >
    <slot name="home"> placeholder.. </slot>
  </div>
  <div
    class="rounded-r-lg flex items-center justify-center transition-colors px-3 h-8 leading-tight font-bold text-gray-500 bg-slate-100 border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-slate-200"
  >
    <slot name="weather"> placeholder.. </slot>
  </div>
</template>
