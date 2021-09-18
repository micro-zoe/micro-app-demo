
export function formatPath (path: string) {
  if (process.env.NODE_ENV === 'production') {
    return `http://localhost:4002/app-nextjs${path}`
  } else {
    return `http://localhost:4002/app-nextjs${path}`
  }
}
