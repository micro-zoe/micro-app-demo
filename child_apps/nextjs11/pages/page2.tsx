import type { NextPage } from 'next'
import styles from '../styles/page2.module.css'
import { formatPath } from '../lib/utils'

const Home: NextPage = () => {
  return (
    <div className={styles.page2Container}>
      <h1>child-nextjs11-page2</h1>
      <div className={styles.childNextjs11TestBtn}>test</div>
      <img src={formatPath("/micro-app-logo.png")} alt="micro-app-logo" />
    </div>
  )
}

export default Home
