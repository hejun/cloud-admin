import Axios, {AxiosBasicCredentials, AxiosRequestConfig} from 'axios'

const auth: AxiosBasicCredentials = {
  username: 'root',
  password: '1234'
}

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.DEV ? 'http://localhost:8080' : '',
  auth: auth
}

export default Axios.create(config)
