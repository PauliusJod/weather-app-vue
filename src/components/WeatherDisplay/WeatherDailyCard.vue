<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { key } from '../../store/store'
import { Icon } from '@iconify/vue'
const store = useStore(key)

const props = defineProps({
  index: {
    type: Number,
    default: null,
  },
})
const commitStoreIndex = () => {
  if (props.index !== 7) {
    store.commit('SET_WEATHER_DATA_INDEX', props.index)
  } else {
    store.commit('SET_WEATHER_DATA_INDEX', null)
  }
}
const stateIndex = computed(() => {
  //ERROR HANDLING ...
  return store.state.WeatherData.dayIndex
})
const stateTime = computed(() => {
  //ERROR HANDLING ...
  return props.index !== 7
    ? store.state.WeatherData.timeArrays[props.index]
    : store.state.WeatherData.rawTime
})
const stateTemp = computed(() => {
  //ERROR HANDLING ...
  return props.index !== 7
    ? store.state.WeatherData.temperatureArrays[props.index]
    : store.state.WeatherData.rawTemperature
})
const dayTemp = defineModel<String>('dayTemp', {
  default: '',
})
const nightTemp = defineModel<String>('nightTemp', {
  default: '',
})
const weekDay = defineModel<String>('weekDay', {
  default: '',
})
const WeekDay = (time: object) => {
  const data = Object.values(time)[0] as Date
  const date = new Date(data)
  const day = date.toLocaleString('default', { weekday: 'short' })
  return day
}

const DayTemp = (temp: object) => {
  const selectedValues = Object.values(temp).slice(8, 18)
  const average = selectedValues.reduce((acc, curr) => acc + curr, 0) / 10
  return average.toFixed(0)
}
const NightTemp = (temp: Object) => {
  const selectedValues = Object.values(temp)
    .slice(18)
    .concat(Object.values(temp).slice(0, 9))
    .reduce((acc, curr) => acc + curr, 0)
  const average = selectedValues / 14
  return average.toFixed(0)
}
onMounted(() => {
  dayTemp.value = DayTemp(stateTemp.value)
  nightTemp.value = NightTemp(stateTemp.value)
  weekDay.value = WeekDay(stateTime.value)
})
</script>

<template>
  <button
    class="transition-colors border rounded-sm border-slate-500 dark:border-slate-700"
    :class="
      props.index === stateIndex || (props.index === 7 && stateIndex === null)
        ? 'bg-slate-400 dark:bg-slate-700'
        : 'bg-slate-300 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-900'
    "
    @click="commitStoreIndex"
  >
    <Icon
      icon="line-md:calendar"
      width="35"
      class="mx-auto text-slate-700 dark:text-slate-100"
      v-if="index !== 7"
    />
    <div className="flex justify-between text-sm gap-1 px-2" v-if="index !== 7">
      <p className="text-yellow-800 dark:text-yellow-500">{{ dayTemp }} °C</p>
      <p className="text-slate-800 dark:text-slate-400">{{ nightTemp }} °C</p>
    </div>

    <Icon
      icon="line-md:weather-cloudy-loop"
      width="45"
      class="mx-auto text-slate-700 dark:text-slate-100"
    />
    <p
      className="text-sm text-slate-700 dark:text-slate-100"
      v-if="index !== 7"
    >
      {{ weekDay }}
    </p>
    <p v-else>Week</p>
  </button>
</template>
