import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <micro-app
        name='appname-vue2'
        url='http://localhost:4008/'
        baseroute='/app-vue2'
      ></micro-app>
    </div>
  )
}

export default Home
