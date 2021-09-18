import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <micro-app
        name='appname-react17'
        url='http://localhost:4005/'
        baseroute='/app-react17'
      ></micro-app>
    </div>
  )
}

export default Home
