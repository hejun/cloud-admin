import AxiosBuilder, {auth} from "../mixin/AxiosBuilder"
import Token from "../vo/auth/Token"

function convertToken(resp: any): Token {
  return {
    accessToken: resp['access_token'],
    tokenType: resp['token_type'],
    refreshToken: resp['refresh_token'],
    expiresAt: new Date().getTime() + 1000 * resp['expires_in'],
    scope: resp['scope']
  }
}

export function obtainToken(username: string, password: string): Promise<Token> {
  return AxiosBuilder
    .post<Token>('/auth/oauth/token', {
      grant_type: 'password',
      username: username,
      password: password
    }, {auth: auth})
    .then(resp => Promise.resolve(convertToken(resp)))
}

export function refreshToken(refreshToken: string): Promise<Token> {
  return AxiosBuilder
    .post<Token>('/auth/oauth/token', {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }, {auth: auth})
    .then(resp => Promise.resolve(convertToken(resp)))
}
