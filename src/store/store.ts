import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import RequestData from './modules/RequestData'
import { WeatherAPI } from './plugins/WeatherAPI'
import WeatherData from './modules/WeatherData'

export const key: InjectionKey<Store> = Symbol()

export const store = createStore({
  modules: {
    RequestData,
    WeatherData,
  },
  plugins: [createPersistedState(), WeatherAPI],
})
