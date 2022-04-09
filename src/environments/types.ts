export interface Environment {
  /**
   * Specify API prefix
   *
   * 指定API前缀
   */
  SERVER_URL: string
  /**
   * Whether production environment
   *
   * 是否生产环境
   */
  production: boolean

  /**
   * hmrBootstrap
   *
   * 是否生产环境
   */
  hmr: boolean
  /**
   * Whether uses the URL fragment instead of the history API.
   *
   * 是否启用 URL 片段（#）代替 history API
   */
  useHash: boolean
  /**
   * API configuration
   *
   * API配置
   */
  api: ApiConfig
}
export interface ApiConfig {
  /**
   * Specify API prefix
   *
   * 指定API前缀
   */
  baseUrl?: string

  /**
   * token 过期时间
   */
  tokenExpiredTime: number
  /**
   * refretoken 过期时间
   */
  refreTokenExpiredTime: number

  /**
   * Whether to enable automatic refresh token
   *
   * 是否启用自动刷新Token
   * false token过期自动去登录页
   */
  refreshTokenEnabled: boolean
  /**
   * Token refresh type, `re-request` Trigger token refresh request when the detection time expires, and then re-send the original request, `auth-refresh` uses `@knz/auth` to periodically check whether it has expired
   *
   * 刷新Token方式，`re-request` 当检测过期时间到期时先发起刷新Token请求，再重新发起原请求，`auth-refresh` 利用 `@knz/auth` 来定期检测是否过期
   */
  refreshTokenType: 're-request' | 'auth-refresh'
}