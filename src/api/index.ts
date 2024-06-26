import axios from "axios"
import { URLS } from "../constants/urls"

const $api = axios.create({
  withCredentials: true,
  baseURL: URLS.API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "access_token"
  )}`
  config.headers["Content-Type"] = "application/json"
  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.post(
          `${URLS.API_URL}${URLS.REFRESH_TOKEN}`,
          {
            value: localStorage.getItem("refresh_token"),
            withCredentials: true,
          }
        )
        localStorage.setItem("access_token", response.data.access_token)
        return $api.request(originalRequest)
      } catch (e) {
        console.log(e, "проблема")
        localStorage.removeItem("access_token")
        window.location.href = "/"
      }
    }
    throw error
  }
)

export default $api
