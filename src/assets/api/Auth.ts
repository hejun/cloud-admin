import AxiosBuilder from "../mixin/AxiosBuilder"

export function obtainToken(username: string, password: string) {
  return AxiosBuilder.post('/auth/oauth/token', {
    grant_type: 'password',
    username: username,
    password: password
  })
}
