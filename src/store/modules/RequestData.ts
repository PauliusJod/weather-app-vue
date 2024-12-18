import { store } from '../store'
interface WeatherPayload {
  showRain: boolean
  showWind: boolean
  latitude: number
  longitude: number
}
export default {
  state: {
    rain: true,
    wind: true,
    latitude: 54.8,
    longitude: 23.9,
  },
  getters: {
    getLatitude: (state: any) => {
      return state.latitude
    },
  },
  mutations: {
    SET_LAT(state: any, value: number) {
      state.latitude = value
    },
    RESET_LAT(state: any) {
      state.latitude = 53.9
    },
    SET_REQUEST_FORM_VALUES(
      state: any,
      rain: Boolean,
      wind: Boolean,
      latitude: Number,
      longitude: Number,
    ) {
      state.rain = rain
      state.wind = wind
      state.latitude = latitude
      state.longitude = longitude
    },
    RESET_REQUEST_FORM_VALUES(state: any) {
      state.rain = true
      state.wind = true
      state.latitude = 2
      state.longitude = 23.9
    },
  },
  actions: {
    async getWeather(
      context: any,
      { showRain, showWind, latitude, longitude }: WeatherPayload,
    ) {
      context.commit('SET_REQUEST_FORM_VALUES', {
        showRain,
        showWind,
        latitude,
        longitude,
      })
      const response = await store.getWeatherAPI(
        showRain,
        showWind,
        latitude,
        longitude,
      )
      context.commit('SET_WEATHER_DATA', response.hourly)
    },
  },
}
