export default interface Token {
  accessToken: string
  tokenType: string
  refreshToken: string
  expiresIn: number
  scope: string
}
