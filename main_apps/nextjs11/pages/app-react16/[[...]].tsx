import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <micro-app
        name='appname-react16'
        url='http://localhost:4004/'
        baseroute='/app-react16'
      ></micro-app>
    </div>
  )
}

export default Home
