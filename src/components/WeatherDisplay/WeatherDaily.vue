<script setup lang="ts">
import WeatherDailyCard from './WeatherDailyCard.vue'
</script>

<template>
  <div
    class="grid gap-1 grid-cols-8 text-black dark:text-slate-200 my-auto px-2"
  >
    <WeatherDailyCard v-for="index in 8" :key="index" :index="index - 1">
    </WeatherDailyCard>
  </div>
</template>
