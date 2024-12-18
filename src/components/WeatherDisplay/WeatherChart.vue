<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '../../store/store'
import { Line } from 'vue-chartjs'
import { options } from '../../utils/chartOptions'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { computed, onMounted, ref } from 'vue'
import { formatDate } from '@/utils/utils'
import { isNullOrUndef } from 'chart.js/helpers'

var selected = ref<string>('dark')

const store = useStore(key)
onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    selected.value = 'dark'
  } else {
    selected.value = 'light'
  }
})
const stateIndex = computed(() => {
  //ERROR HANDLING ...
  return store.state.WeatherData.dayIndex
})
const stateTime = computed(() => {
  //ERROR HANDLING ...
  if (isNullOrUndef(store.state.WeatherData.timeArrays)) return null
  return stateIndex.value != null
    ? store.state.WeatherData.timeArrays[stateIndex.value]
    : store.state.WeatherData.rawTime
})
const stateTemp = computed(() => {
  //ERROR HANDLING ...
  if (isNullOrUndef(store.state.WeatherData.temperatureArrays)) return null
  return stateIndex.value != null
    ? store.state.WeatherData.temperatureArrays[stateIndex.value]
    : store.state.WeatherData.rawTemperature
})
const statePrec = computed(() => {
  //ERROR HANDLING ...
  if (isNullOrUndef(store.state.WeatherData.precipitationArrays)) return null
  return stateIndex.value != null
    ? store.state.WeatherData.precipitationArrays[stateIndex.value]
    : store.state.WeatherData.rawPrecipitation
})
const stateWind = computed(() => {
  //ERROR HANDLING ...
  if (isNullOrUndef(store.state.WeatherData.windArrays)) return null
  return stateIndex.value != null
    ? store.state.WeatherData.windArrays[stateIndex.value]
    : store.state.WeatherData.rawWind
})
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
const chartDataTemperature = computed(() => ({
  labels: formatDate(stateTime.value),
  datasets: [
    {
      label: 'Temperature',
      backgroundColor: '#f87171',
      data: stateTemp.value,
    },
    {
      label: 'Precipitation',
      backgroundColor: '#0891b2',
      data: statePrec.value,
    },
    {
      label: 'Wind',
      backgroundColor: '#fdba74',
      data: stateWind.value,
    },
  ],
}))
</script>

<template>
  <div class="w-full">
    <Line
      class="h-[300px]"
      :data="chartDataTemperature"
      :options="options(selected === 'dark' ? '#000' : '#fff')"
      :key="selected"
    />
  </div>
</template>
