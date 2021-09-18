import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <micro-app
        name='appname-vue3'
        url='http://localhost:4009/'
        baseroute='/app-vue3'
      ></micro-app>
    </div>
  )
}

export default Home
