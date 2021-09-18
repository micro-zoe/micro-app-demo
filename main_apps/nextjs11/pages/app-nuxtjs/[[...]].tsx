import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [url, changeUrl] = useState('')
  useEffect(() => {
    changeUrl('http://localhost:4003' + location.pathname)
  }, [])

  return (
    <div>
      {
        url && <micro-app name='appname-nuxtjs' url={url} inline></micro-app>
      }
    </div>
  )
}

export default Home
