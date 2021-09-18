/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [url, changeUrl] = useState('')

  function handleCreated () {
    console.log('被创建了')
  }

  useEffect(() => {
    changeUrl('http://localhost:4002' + location.pathname)
  }, [])

  return (
    <div>
      {
        url && (
          <micro-app
            name='appname-nextjs'
            url={url}
            disablescopecss
            onCreated={handleCreated}
          ></micro-app>
        )
      }
    </div>
  )
}

export default Home
