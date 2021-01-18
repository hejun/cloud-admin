import Axios, {AxiosBasicCredentials, AxiosInstance} from 'axios'
import {stringify} from 'qs'

const baseUrl = import.meta.env.DEV ? 'http://localhost:8080' : ''
const auth: AxiosBasicCredentials = {
  username: 'root',
  password: '1234'
}

let instance: AxiosInstance = Axios.create({
  baseURL: baseUrl,
  transformRequest: data => stringify(data)
})

instance.interceptors.request.use(
  async (config) => {
    if (!config.auth) {
      config.auth = auth
    }
    return config
  },
  error => Promise.reject(error)
)

export default instance
