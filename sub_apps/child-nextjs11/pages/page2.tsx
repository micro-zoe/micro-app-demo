import type { NextPage } from 'next'
import styles from '../styles/page2.module.css'
import { formatPath } from '../lib/utils'

const Home: NextPage = () => {
  return (
    <div className={styles.page2Container}>
      <h3>page2</h3>
      <img src={formatPath("/micro-app-logo.png")} alt="micro-app-logo" />
    </div>
  )
}

export default Home
