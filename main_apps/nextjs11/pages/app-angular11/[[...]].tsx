import type { NextPage } from 'next'
import 'zone.js'

const Home: NextPage = () => {
  return (
    <div>
      <micro-app
        name='appname-angular11'
        url='http://localhost:4001/'
        baseroute='/app-angular11'
      ></micro-app>
    </div>
  )
}

export default Home
