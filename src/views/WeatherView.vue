<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import WeatherDisplay from '@/components/WeatherDisplay.vue'
import RequestFormView from '@/views/RequestFormView.vue'
import WeatherChart from '@/components/WeatherDisplay/WeatherChart.vue'
const store = useStore(key)
const openDisplay = computed(() => {
  return store.state.WeatherData.rawTemperature
})
</script>

<template>
  <main>
    <div
      class="lg:w-[800px] md:w-[600px] sm:w-[400px] flex-row justify-center rounded-sm shadow-borders-main"
    >
      <div class="w-full bg-slate-200 dark:bg-slate-800 border-none ring-none">
        <RequestFormView /><WeatherDisplay
          v-if="openDisplay && Object.keys(openDisplay || {}).length === 168"
        />
        <WeatherChart></WeatherChart>
      </div>
    </div>
  </main>
</template>
