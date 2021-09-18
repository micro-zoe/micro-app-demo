
export function formatPath (path: string) {
  if (process.env.NODE_ENV === 'production') {
    return `${'线上地址'}${path}`
  } else {
    return `http://localhost:4002/app-nextjs${path}`
  }
}
