import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <micro-app
        name='appname-vite'
        url='http://localhost:4007/'
        inline
        disablesandbox
      ></micro-app>
    </div>
  )
}

export default Home
