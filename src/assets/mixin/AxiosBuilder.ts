import Axios, {AxiosBasicCredentials, AxiosInstance, AxiosRequestConfig} from 'axios'
import {stringify} from 'qs'
import {store} from "../../store"
import {refreshToken} from "../api/Auth"

const baseUrl = import.meta.env.DEV ? 'http://localhost:8080' : ''
export const auth: AxiosBasicCredentials = {username: 'root', password: '1234'}

const instance: AxiosInstance = Axios.create({
  baseURL: baseUrl,
  transformRequest: data => stringify(data)
})

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const authorized = store.getters.authorized
    if (authorized.value && !config.auth) {
      if (store.state.token!.expiresAt < new Date().getTime() + 5000) {
        //提前5秒刷新Token
        await refreshToken(store.state.token!.refreshToken)
          .then(token => store.commit('updateToken', token))
      }
      config.headers.Authorization = config.headers.Authorization ? config.headers.Authorization : store.state.token!.tokenType + ' ' + store.state.token!.accessToken
    }
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data.data)
    }
    return Promise.reject(response.data)
  },
  error => Promise.reject(error)
)

export default instance
