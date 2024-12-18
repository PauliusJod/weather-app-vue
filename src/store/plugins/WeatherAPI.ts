import axios from 'axios'

export const WeatherAPI = (store: any) => {
  store.getWeatherAPI = async function (
    showRain: Boolean,
    showWind: Boolean,
    latitude: Number,
    longitude: Number,
  ) {
    var requestedData = '' as string
    try {
      requestedData += showRain ? ',precipitation_probability' : ''
      requestedData += showWind ? ',wind_speed_10m' : ''
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m,apparent_temperature${requestedData}`,
      )
      return res.data
    } catch (error) {
      return new Error('Server down')
    }
  }
}
