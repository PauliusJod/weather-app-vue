<script setup lang="ts">
import NavigationItem from '@/components/Navigation/NavigationItem.vue'
import SliderToggle from '@/components/SliderToggle.vue'
</script>

<template>
  <nav
    class="bg-slate-600 dark:bg-slate-600 flex justify-center -space-x-px h-8 text-sm my-2"
  >
    <SliderToggle></SliderToggle>
    <NavigationItem>
      <template #home><RouterLink to="/">Home</RouterLink></template>
      <template #weather
        ><RouterLink to="weather">Weather</RouterLink></template
      >
    </NavigationItem>
  </nav>
</template>
