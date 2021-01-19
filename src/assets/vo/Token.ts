export default interface Token {
  accessToken: string
  tokenType: string
  refreshToken: string
  expiresAt: number
  scope: string
}
