import { sortArrays } from '@/utils/utils'

interface WeatherPayloadByDefault {
  time: any
  temperature_2m: any
  precipitation_probability: any
  wind_speed_10m: any
}
export default {
  state: {
    dayIndex: null,
    rawTime: null,
    rawTemperature: null,
    rawPrecipitation: null,
    rawWind: null,
    timeArrays: null,
    temperatureArrays: null,
    precipitationArrays: null,
    windArrays: null,
  },
  getters: {},
  mutations: {
    SET_WEATHER_DATA_INDEX(state: any, index: any | null) {
      state.dayIndex = index
    },
    RESET_WEATHER_DATA_INDEX(state: any) {
      state.dayIndex = null
    },
    SET_WEATHER_DATA(
      state: any,
      {
        time,
        temperature_2m,
        precipitation_probability,
        wind_speed_10m,
      }: WeatherPayloadByDefault,
    ) {
      state.dayIndex = null
      state.rawTime = time
      state.rawTemperature = temperature_2m
      state.rawPrecipitation = precipitation_probability
      state.rawWind = wind_speed_10m
      state.timeArrays = sortArrays(time)
      state.temperatureArrays = sortArrays(temperature_2m)
      state.precipitationArrays = sortArrays(precipitation_probability)
      state.windArrays = sortArrays(wind_speed_10m)
    },
    RESET_WEATHER_DATA(state: any) {
      state.dayIndex = null
      state.rawTime = null
      state.rawTemperature = null
      state.rawPrecipitation = null
      state.rawWind = null
      state.timeArrays = null
      state.temperatureArrays = null
      state.precipitationArrays = null
      state.windArrays = null
    },
  },
  actions: {},
}
