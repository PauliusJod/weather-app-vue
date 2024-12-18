<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, minValue, maxValue } from '@vuelidate/validators'
import BaseInput from '@/components/Inputs/NumberInput.vue'
import BoolInput from '@/components/Inputs/BoolInput.vue'
import { key } from '../store/store'
import { Icon } from '@iconify/vue'

const store = useStore(key)
var isClicked: boolean = false

const formData = reactive({
  showRain: true,
  showWind: true,
  latitude: store.state.RequestData.latitude,
  longitude: store.state.RequestData.longitude,
})
const rules = computed(() => {
  return {
    showRain: { required },
    showWind: { required },
    latitude: { required, minValue: minValue(-85), maxValue: maxValue(85) },
    longitude: {
      required,
      minValue: minValue(-180),
      maxValueValue: maxValue(180),
    },
  }
})
const v$ = useVuelidate(rules, formData)
const submitForm = async (e: Event) => {
  isClicked = true
  e.preventDefault()
  setTimeout(async () => {
    isClicked = false
    const result = await v$.value.$validate()
    if (result) {
      store.dispatch('getWeather', {
        showRain: formData.showRain,
        showWind: formData.showWind,
        latitude: formData.latitude,
        longitude: formData.longitude,
      })
      await new Promise((resolve) => setTimeout(resolve, 1000))
      window.location.reload()
    } else {
      alert(
        'Please check input fields \n Latitude [-85,85] \n Longitude [-180,180]',
      )
    }
  }, 1000)
}
</script>

<template>
  <div class="flex justify-center m-4 pt-4 gap-4">
    <form class="bg-slate-300 dark:bg-slate-800 py-4 px-8 rounded-sm">
      <div class="grid grid-rows-2 grid-cols-2 gap-2">
        <BoolInput v-model="formData.showRain" label="Show rain: " />
        <BoolInput v-model="formData.showWind" label="Show wind: " />
      </div>
      <div class="grid grid-rows-2 grid-cols-2 gap-2">
        <BaseInput
          :key="formData.latitude"
          v-model="formData.latitude"
          :min="-85"
          :max="85"
          label="Latitude:"
        />
        <BaseInput
          :key="formData.longitude"
          v-model="formData.longitude"
          :min="-180"
          :max="180"
          label="Longitude:"
        />
      </div>
      <button
        type="submit"
        class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-900 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700"
        :class="isClicked ? 'cursor-not-allowed' : 'cursor-pointer'"
        @click="submitForm"
      >
        <Icon
          v-if="isClicked"
          icon="hugeicons:loading-03"
          width="20"
          class="mx-auto text-slate-400 dark:text-slate-100 animate-spin"
        />
        <p v-else>Submit</p>
      </button>
    </form>
    <div class="bg-slate-200 dark:bg-slate-800">
      <span v-for="error in v$.errors" :key="error.$uid">
        {{ error.$property }} - {{ error.$message }}
      </span>
    </div>
  </div>
</template>
