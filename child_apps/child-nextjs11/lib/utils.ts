import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export function formatPath (path: string) {
  return `${publicRuntimeConfig.assetPrefix}${path}`
}
